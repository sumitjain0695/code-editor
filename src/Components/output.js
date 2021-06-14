import React from "react";

const Output = (props) => {
  return (
    <div id="iframewrapper">
      <iframe
        id="output"
        title="output"
        style={{ border: "none", minHeight: "76vh" , backgroundColor: "#fff"}}
        allowFullScreen
        width="100%"
      ></iframe>
    </div>
  );
};

export default Output;
