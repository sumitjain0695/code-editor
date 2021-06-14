import React from "react";

const Output = React.forwardRef((props,ref) => {
  return (
    <div id="iframewrapper" ref={ref}>
      <iframe
        id="output"
        title="output"
        style={{ border: "none", minHeight: "76vh" , backgroundColor: "#fff"}}
        allowFullScreen
        width="100%"
      ></iframe>
    </div>
  );
})

export default Output;
