---
sidebar_position: 3
---

# Portals and options.parent 
If the LocationStack is missing some elements, although they have been correctly tagged, the most likely cause is the use of [Portal-like](https://material.angular.io/cdk/portal/overview) methods to render their contents. Eg: they render part of their templates in an arbitrary location of the DOM.

Because the Tracker follows the DOM upwards, to reconstruct where an Interaction occurred, this will lead to incorrect Locations.

### Example scenario
Here is a simple example:

```html
<div [tagContent]="{ id: 'search' }" class="search">
  Search: <input [tagInput]="{ id: 'search-input' }" type="text"/>
  <search-results 
    [tagOverlay]="{ id: 'search-results' }" 
    class="search-results"
  >
    <search-result *ngFor="let searchResult of searchResults">
      <div 
        [tagPressable]="{ id: 'search-result-' + searchResult.id }"
        (click)="selectResult(searchResult, $event)"
        class="search-result"
      >
        {{ searchResult.text }}
      </div>
    </search-result>
  </search-results>
</div>
```

### DOM without portals
If `search-results` did not use portals, this would be the final DOM after running a search:
```html
<html>                                Location Tree
  <body>                              RootLocationContext: home
    <div class="search">              └─ ContentContext: search
      Search: <input type="text"/>       ├─ InputContext: search-input
      <div class="search-results">       └─ OverlayContext: search-results
        <div class="search-result">         ├─ PressableContext: search-result-1
          search result 1                   │
        </div>                              │
        <div class="search-result">         ├─ PressableContext: search-result-2
          search result 2                   │
        </div>                              │ 
        <div class="search-result">         └─ PressableContext: search-result-3
          search result 3
        </div>
      </div>
    </div>
  </body>
</html>
```

Everything works fine: the Tracker can easily navigate from a result upwards and collect the correct Location, e.g. `search-results` is a child of `search` and a sibling of `search-input`.


### DOM with portals
Let's assume that `search-results`, instead, uses a Portal to render its results.  

This is how the above template may result in the DOM (oversimplified):

```html
<html>                                     Location Tree
  <body>                                   RootLocationContext: home
    <div class="search">                   ├─ ContentContext: search
      Search: <input type="text"/>         │  └─ InputContext: search-input
    </div>                                 │
    <div class="overlay-container">        │
      <div id="search-overlay-container">  │
        <div class="search-results">       └─ OverlayContext: search-results
          <div class="search-result">         ├─ PressableContext: search-result-1
            search result 1                   │
          </div>                              │
          <div class="search-result">         ├─ PressableContext: search-result-2
            search result 2                   │
          </div>                              │
          <div class="search-result">         └─ PressableContext: search-result-3
            search result 3
          </div>
        </div>
      </div>
    </div>
  </body>
</html>
```

As you can see `search-results` is not a child of the search `<div>` anymore. 
It has been rendered somewhere else and actually, from a DOM point of view, it's now a sibling of the search div. 

When the Tracker attempts to track a click on one of the results, it will produce an incorrect LocationStack.

## `options.parent` to cross portals
All location taggers allow overriding the parent Tagged Element via the `parent` attribute of their options. 
This basically tells the Tracker to ignore the DOM tree and instead follow the Location Tagging Attributes we specify.

The whole process revolves around three steps:

1. Factor Tagging Attributes for the parent
2. `applyTaggingAttributes` on parent
3. Set `options.parent` of the child

### Factor Tagging Attributes for the parent
Instead of simply tagging the parent Element in the template, we have to go back to the Component and pre-factor its
Location Tagging Attributes. 

There's no strict way of doing so, in the following example we are going to use a public variable and `ngInit`.

```ts
@Component({
  selector: 'search-component',
  templateUrl: './component.html'
})
export class SearchComponent implements OnInit {
  public searchContentTag: TagLocationReturnValue;

  public ngOnInit(): void {
    this.searchContentTag = tagContent({
      id: 'search'
    });
  }
}
```

### `applyTaggingAttributes` on parent
In our example template we had instrumented the search-result overlay like so:
```html
<div [tagContent]="{ id: 'search' }" class="search">
```

Now that we have pre-factored its Tagging Attributes, we can instead apply them like this:

```html
<div [applyTaggingAttributes]="searchContentTag" class="search">
```

This achieves the same exact result, but now we have as set of TaggingAttributes referring to the `search` div.

### Set `options.parent` of the child
Last step: we have to link the portaled `search-result` div to the `search` div we just instrumented.

To do we are going to modify the overlay tagging from this:

```html
<search-results 
  [tagOverlay]="{ id: 'search-results' }" 
  class="search-results"
>
```

To this:
```html
<search-results 
  [tagOverlay]="{ id: 'search-results', options: { parent: searchContentTag } }" 
  class="search-results"
>
```

Angular Tracker now knows that `search-results` has `search` as a parent, regardless of where it resides in the DOM.

Here is the final template:

```html
<div [applyTaggingAttributes]="searchContentTag" class="search">
  Search: <input [tagInput]="{ id: 'search-input' }" type="text"/>
  <search-results
    [tagOverlay]="{ id: 'search-results', options: { parent: searchContentTag } }"
    class="search-results"
  >
    <search-result *ngFor="let searchResult of searchResults">
      <div 
        [tagPressable]="{ id: 'search-result-' + searchResult.id }"
        (click)="selectResult(searchResult, $event)"
        class="search-result"
      >
        {{ searchResult.text }}
      </div>
    </search-result>
  </search-results>
</div>
```