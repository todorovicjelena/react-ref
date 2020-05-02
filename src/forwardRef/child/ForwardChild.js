import React from "react";

const ForwardInput = React.forwardRef((props, ref) => <input type="text" ref={ref} />);

export default ForwardInput;
