import { Tracker } from "objectiv-tracker-js";
import React from 'react';

// Create a new Tracker
const tracker = Tracker.forWebDocument({
  // TODO make the endpoint optional in debug mode
  endpoint: `https://httpstat.us/200`,
  debug: true
});

// Extend the basic tracker with a default Section representing the Docs
const docsSectionTracker = tracker.withStack([
  {
    _context_type: 'SectionContext',
    id: "Docs",
  },
]);

// Add react-live imports you need here
const ButtonExample = (props) => (
  <button
    {...props}
    style={{
      backgroundColor: 'white',
      border: 'solid red',
      borderRadius: 20,
      padding: 10,
      cursor: 'pointer',
      ...props.style,
    }}
  />
);

const ReactLiveScope = {
  React,
  ...React,
  docsSectionTracker,
  ButtonExample,
};

export default ReactLiveScope;
