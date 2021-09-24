import React from 'react';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

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
  ButtonExample,
};

export default ReactLiveScope;
