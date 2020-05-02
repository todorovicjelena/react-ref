import React, { Component } from "react";
import "./BasicRef.css";
import "materialize-css";

export default class BasicRef extends Component {
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
      value: this.myRef.current.value,
    });
  };

  render() {
    const { value } = this.state;
    return (
      <div>
        <h1>Basic React Ref Example</h1>
        <h3>Value:{value}</h3>
        <form onSubmit={this.handleSubmit}>
          <input name="text" type="text" ref={this.myRef} />
          <button className="btn">Submit</button>
        </form>
      </div>
    );
  }
}
