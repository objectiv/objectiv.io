---
sidebar_position: 4
---

# Troubleshooting 


## Problem: Collisions
Sometimes the browser console will show a warning about  colliding elements, e.g.:

![Collisions in browser console](/img/docs/tracking-collision-browser-console.png)


The [Core Concepts section explains Collisions and how to solve them](/tracking/core-concepts/locations.md#solving-collisions).

## Problem: Incorrect Location Stack
If the LocationStack is missing some elements, although they have been correctly tagged, the most likely cause is the use of [Portal-like](https://material.angular.io/cdk/portal/overview) methods to render their contents. Eg: they render part of their templates in an arbitrary location of the DOM.

Because the Tracker follows the DOM upwards, to reconstruct where an Interaction occurred, this will lead to incorrect Locations.

### Example scenario
Here is a simple example:

```html
<div [tagContent]="{ id: 'search' }" class="search">
  Search: <input [tagInput]="{ id: 'search-input' }" type="text"/>
  <search-results [tagOverlay]="{ id: 'search-results' }" class="search-results">
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
    <div class="search">                ContentContext: search
      Search: <input type="text"/>        InputContext: search-input
      <div class="search-results">        OverlayContext: search-results
        <div class="search-result">         PressableContext: search-result-1
          search result 1
        </div>
        <div class="search-result">         PressableContext: search-result-2
          search result 2
        </div>          
        <div class="search-result">         PressableContext: search-result-3
          search result 3
        </div>
      </div>
    </div>
  </body>
</html>
```

Everything works fine: the Tracker can easily navigate from a result upwards and collect the correct Location.

Eg: search results are children of the search `div` containing also the search `input`.


### DOM with portals
Let's assume that `search-results`, instead, uses a Portal to render its results.  

This is how the above template may result in the DOM:

```html
<body>
  <div class="search">                                    // ContentContext: search
    Search: <input type="text"/>                          // InputContext: search-input
  </div>
  <div class="overlay-container">
    <div id="search-overlay-container">
      <div class="search-results">                        // OverlayContext: search-results
        <div class="search-result">search result 1</div>  // PressableContext: search-result-1
        <div class="search-result">search result 2</div>  // PressableContext: search-result-2
        <div class="search-result">search result 3</div>  // PressableContext: search-result-3
      </div>
    </div>
  </div>
</body>
```

As you can see `search-results` is not a child of the search `<div>` anymore. They have been rendered somewhere else. 

When the Tracker attempts to track a click on one of the results, it will produce an incorrect LocationStack.

### Specify a `parent` across portals