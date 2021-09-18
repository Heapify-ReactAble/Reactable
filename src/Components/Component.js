import React from "react";

class Component1 extends React.Component {
  render() {
    return (
      <div>
        <div style={{ color: 'red' }}>Component1</div>
      </div>
    );
  }
}

export const Component3 = () => {
    return (
        <div>
            <div>Component3</div>
        </div>
    )
}

export const Component4 = () => {
    return (
        <div>Component4</div>
    )
}

export default Component1;
