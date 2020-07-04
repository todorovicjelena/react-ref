import React, { Component } from 'react';
import DumbInput from '../dumbInput/DumbInput';

export default class ParentComponent extends Component {
  constructor() {
    super();
    this.state = {
      value: '',
    };
  }

  handleSubmit = (e) => {
    this.setState({
      value: this.inputElement.value,
    });
  };

  render() {
    const { value } = this.state;
    return (
      <div>
        <h1>Parent To Child React Ref Example</h1>
        <h3>Value:{value}</h3>
        <DumbInput inputRef={(el) => (this.inputElement = el)} />
        <button className='btn' onClick={this.handleSubmit}>
          Submit
        </button>
      </div>
    );
  }
}
