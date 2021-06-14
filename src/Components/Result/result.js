import React from "react";
import "./result.css";
const Output = React.forwardRef((props, ref) => {
  return (
    <div id="iframe" ref={ref} className="frame">
      <iframe
        id="code-result"
        title="result"
        style={{ border: "none", height: "inherit", backgroundColor: "#fff" }}
        allowFullScreen
        width="100%"
      ></iframe>
    </div>
  );
});

export default Output;
