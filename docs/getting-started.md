---
title: Getting Started with Objectiv
slug: /
---

<p class="body-large">
If you’re a data scientist and have ever developed models on existing product analytics data, you’ve probably ran into the same problems we did: the data is incomplete, lacks context and needs a lot of work to become usable, if you get there at all. We believe the main cause of this is that tracking instrumentation is not built with the data scientist in mind. 
</p>

##### Step 1

## Create a BigQuery project
First off, you need to make a choice:
* Cofee with two sugars
* Tea without any caffeine
* Fristi for me please

### Code example

<!-- TODO: make the live coder work in static builds -->
```jsx live
function TestObjectivTracker(props) {
  const trackClickMeButton = () => {
    var logger = document.getElementById('consoleLog');
    console.log = function (message, event) {
      logger.innerHTML += JSON.stringify(event, null, 4) + '<br />';
    }

    docsSectionTracker.trackEvent({
      event: "ClickEvent",
      contexts: [{
        __context_type: "ElementContext",
        id: "ClickMeButton"
      }]
    });
  }

  return (
    <div>
      <ButtonExample onClick={trackClickMeButton}>Click me</ButtonExample>
    </div>
  );
}
```
<div id="consoleLog"></div>

### FAQ

* [How do I use this?](/docs)
* [What is this?](/docs)

<div class="body-small">
  disclaimer: small text is still readable but only if you have good eyes
</div>

<div class="body-extra-small">
  tiny disclaimer: it doesn’t get any smaller than this. pinky promise
</div>
