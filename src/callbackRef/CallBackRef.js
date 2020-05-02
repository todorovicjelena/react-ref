import React, { Component } from "react";
import './CallBackRef.css';

export default class CallBackRef extends Component {
  constructor() {
    super();
    this.state = {
      value: "",
    };
    this.myRef = React.createRef();
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      value: this.textInput.value,
    });
  };

  render() {
    const { value } = this.state;
    return (
      <div>
        <h1>Callback React Ref Example</h1>
        <h3>Value:{value}</h3>
        <form onSubmit={this.handleSubmit}>
          <input type="text" ref={(e) => (this.textInput = e)} />
          <button className="btn">Submit</button>
        </form>
      </div>
    );
  }
}
