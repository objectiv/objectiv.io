# ReactRouter

Optional plugin, for anyone using ReactRouter, providing automatically tracked Link and NavLink components.  

## Installation
```sh
yarn add @objectiv/plugin-react-router-tracked-components
```

#### or
```sh
npm install @objectiv/plugin-react-router-tracked-components
```

## Drop-in replacements
Both `TrackedLink` and `TrackedNavLink` components are designed to be drop-in replacements of the original ones.  
This allows, if desired, to swap components at import level:

```ts
import {
  TrackedLink as Link,
  TrackedNavLink as NavLink
} from "@objectiv/plugin-react-router-tracked-components";
```

## Tracking automation
They basically perform two main tasks:
1. They wrap the original implementation in a [LinkContext](/taxonomy/reference/location-contexts/LinkContext.md).
2. Automatically attach an onPress handler to track [PressEvents](/taxonomy/reference/events/PressEvent.md).

## Usage example
Check out this [example application on codesandbox](https://codesandbox.io/s/react-router-6-objectiv-tracked-components-example-pr01du?file=/src/App.js) for a comprehensive list of all options and cases.
