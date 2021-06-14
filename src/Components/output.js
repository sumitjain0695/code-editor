import React from "react";
import './output.css'
const Output = React.forwardRef((props,ref) => {
  return (
    <div id="iframewrapper" ref={ref} className='frame-wrapper'>
      <iframe
        id="output"
        title="output"
        style={{ border: "none", height: "inherit" , backgroundColor: "#fff"}}
        allowFullScreen
        width="100%"
      ></iframe>
    </div>
  );
})

export default Output;
