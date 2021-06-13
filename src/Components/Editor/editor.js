import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
// import AceEditor from "react-ace";
// import "ace-builds/src-noconflict/mode-java";
// import "ace-builds/src-noconflict/theme-github";

const AceEditor1 = (props) => {
  const currRef = useRef(null);
  

  const inClick=()=>{
    const node = ReactDOM.findDOMNode(currRef.current);
    const ace = require("ace-builds/src-noconflict/ace");
    const editor = ace.edit(node, {
      mode: "ace/mode/html",
      selectionStyle: "text",
    });
      ReactDOM.findDOMNode(document.getElementById("output")).srcdoc =
      editor.getValue();
    
  }

  useEffect(() => {
    const node = ReactDOM.findDOMNode(currRef.current);
    const ace = require("ace-builds/src-noconflict/ace");
    const editor = ace.edit(node, {
      mode: "ace/mode/html",
      selectionStyle: "text",
    });
    editor.setTheme("ace/theme/twilight");
    editor.getSession().setMode("ace/mode/html");
    editor.setShowPrintMargin(false);
    editor.setOptions({ minLines: 25 });
    editor.setOptions({ maxLines: 50 });
    // editor.on("change", function (newVal) {
    //   ReactDOM.findDOMNode(document.getElementById("output")).srcdoc =
    //     editor.getValue();
    // });
  }, []);

  return <>
  <button onClick={inClick}>Save</button>
  <div ref={currRef}>{props.code}</div>
  </>
};

export default AceEditor1;
