import React from "react";

class LearningState extends React.Component {
  // dynamic content - state.
  constructor(props) {
    super(props);
    this.state = {
      count: this.props.count,
    };
  }

  updateState = () => {
    this.setState((prevState, props) => ({
      count: prevState.count + 1,
    }));
  };

  /* this.setState({
      count: this.state.count + 1
  }); */

  // this.state.state1 = "new-value"; incorrect

  render() {
    return (
      <div>
        {this.state.count}

        <button onClick={this.updateState}>Increment</button>
      </div>
    );
  }
}

export default LearningState;
