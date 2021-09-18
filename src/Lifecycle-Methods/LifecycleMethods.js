import React from "react";

class LifecycleMethods extends React.Component {
  constructor(props) {
    super(props);
    // alert('Inside the constructor');
    this.state = {
      count: 10,
    };
  }

  updateCount = () => {
    this.setState({
      count: 15,
    });
  };

  componentWillUnmount() {
      
  }

  // componentDidMount() {
  //     alert('Inside componentDidMount');
  // }

//   shouldComponentUpdate(nextProps, nextState) {
    // if(this.state.count !== nextState.count)
    //     return true;
//     return false;
//   }

//   componentDidUpdate() {
//     alert("Inside componentDidUpdate");
//   }

  render() {
    return (
      <div>
        Lifecycle Methods {this.state.count}
        <button onClick={this.updateCount}>Click Me</button>
      </div>
    );
  }
}

export default LifecycleMethods;
