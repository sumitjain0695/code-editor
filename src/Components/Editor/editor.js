import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
// import AceEditor from "react-ace";
// import "ace-builds/src-noconflict/mode-java";
// import "ace-builds/src-noconflict/theme-github";

const AceEditor1 = (props) => {
  // static propTypes = {
  //   mode: React.PropTypes.string,
  //   content: React.PropTypes.string,
  // };

  // static defaultProps = {
  //   mode: 'javascript',
  //   code: '//write your code here',
  // };

  const currRef = useRef(null);

  useEffect(() => {
    const node = ReactDOM.findDOMNode(currRef.current);
    const ace = require("ace-builds/src-noconflict/ace");
    // const ace = require('../../ace-builds/src-noconflict/ace');
    const editor = ace.edit(node, {
      mode: "ace/mode/javascript",
      selectionStyle: "text",
    });
    editor.setTheme("ace/theme/monolith");
    editor.getSession().setMode("ace/mode/javascript");
    editor.setShowPrintMargin(false);
    editor.setOptions({ minLines: 25 });
    editor.setOptions({ maxLines: 50 });
  },[]);

  return (
    <div ref={currRef}>{props.code}</div>
  );
};

export default AceEditor1;
