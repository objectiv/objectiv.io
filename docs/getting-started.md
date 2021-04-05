---
title: Getting Started with Objectiv
slug: /
---


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


## Step 1: Generate a new Docusaurus site

If you haven't already, generate a new Docusaurus site using the classic template:

```shell
npx @docusaurus/init@latest init my-website classic
```

## Step 2: Start your Docusaurus site

Run the development server in the newly created `my-website` folder:

```shell
cd my-website

npx docusaurus start
```

Open `docs/getting-started.md` and edit some lines. The site reloads automatically and display your changes.

## That's it!

Congratulations! You've successfully run and modified your Docusaurus project.
