---
sidebar_position: 4
slug: /tracking/core-concepts/react-native
---

# Best practices

## Tracking Locations
Even when Context wrapping would not be required for obtaining location uniqueness, it's still a good idea to wrap interactions in a LocationContext anyway.

An extra LocationContext:
- Will give a better understanding of what that area of the screen means to your Data team.
- It will act as a safeguard against future additions of interactions in the same area of the screen.
- It takes not that much effort to instrument.

### Example of non-futureproof screen
Consider the following scenario:

```tsx
<View>
  <View>
    <Text>Introductory text</Text>
    <TrackedButton onPress={onPressLearnMore} title="Learn More"/>
  </View>
  <Separator />
  <View>
    <Text>More text</Text>
  </View>
</View>
```

Note how both inner `View` components have not been instrumented as a Tracked elements.

#### What could possibly go wrong?
Suppose we decide to add another `Learn More` button in the second View; suddenly we have two identical Buttons as siblings.
It's still easy to fix, but now instead of adding just a Button, we have to fix our tracking instrumentation as well.

#### How to avoid collisions
Making sure there's at least one LocationContext tracked around all interactions will suffice to avoid future collisions.

This doesn't mean wrapping every single Interaction with their own LocationContext.  
It's more an exercise of critically identifying the logical sections of your screen and tracking them:

##### Thought process
- Do we have interactions with only RootLocationContexts in their LocationStack?
- Which sections already have interactions but not LocationContext around them?
- Which section may get (more) interactions in the future?

It's absolutely worth spending a bit of time understanding what a screen does and how it may evolve.

### Example of future-proof screen
In this last example, we are free to add any Button we want to any of the inner Views, without risk of collisions.

```tsx
<View>
  <TrackedView id="top">
    <Text>Introductory text</Text>
    <TrackedButton onPress={onPressLearnMore} title="Learn More" />
  </TrackedView>
  <Separator />
  <TrackedView id="bottom">
    <Text>More text</Text>
  </TrackedView>
</View>
```
