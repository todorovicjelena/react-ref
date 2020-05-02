import React, { Component } from "react";
import ForwardChild from "../child/ForwardChild";

//or const inputRef = React.createRef();
export default class ForwardParent extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
    this.state = {
      value: "",
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    //or this.setState({ value: inputRef.current.value})
    this.setState({ value: this.inputRef.current.value });
  };

  render() {
    return (
      // or <ForwardInput ref={inputRef} />
      <div>
        <h1>Forward React Ref Example</h1>
        <h3>Value: {this.state.value}</h3>
        <form onSubmit={this.handleSubmit}>
          <ForwardChild ref={this.inputRef} />
          <button className="btn">Submit</button>
        </form>
      </div>
    );
  }
}
