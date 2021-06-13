import React, { useEffect, useRef } from "react";

const Output = (props) => {
  const myRef = useRef();
  useEffect(() => {});

  return (<div id = 'iframewrapper'>
      <iframe id="output" title='output' allowfullscreen='true' width="100%"></iframe>
  </div>);
  
};

export default Output;
