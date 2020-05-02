import React from "react";

const DumbInput = (props) => {
  return (
    <div>
      <input type="text" ref={props.inputRef}></input>
    </div>
  );
};


export default DumbInput;