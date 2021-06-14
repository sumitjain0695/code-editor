import {
  AppBar,
  Button, Toolbar,
  Tooltip
} from "@material-ui/core";
import { Brightness2, Brightness7, CloudDownload } from "@material-ui/icons";
import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";

const ace = require("ace-builds/src-noconflict/ace");
require("ace-builds/webpack-resolver");
require("ace-builds/src-noconflict/mode-html");
require(`ace-builds/src-noconflict/theme-clouds_midnight`);
require(`ace-builds/src-noconflict/theme-clouds`);

const AceEditor = (props) => {
  const editor = useRef(null);

  const editorRef = useRef(null);
  const [editorTheme, setEditorTheme] = useState(false);

  useEffect(() => {
    const node = editorRef.current;
    editor.current = ace.edit(node, {
      mode: "ace/mode/html",
      selectionStyle: "text",
    });
    editor.current.setFontSize("15px");
    editor.current.setTheme("ace/theme/clouds");
    editor.current.setOptions({ minLines: 50, maxLines: 50 });
  }, []);

  const download = () => {
    console.log('dd', editor.current.getValue())
    var pom = document.createElement("a");
    pom.setAttribute(
      "href",
      "data:text/plain;charset=utf-8," +
        encodeURIComponent(editor.current.getValue())
    );
    pom.setAttribute("download", "download.txt");

    if (document.createEvent) {
      var event = document.createEvent("MouseEvents");
      event.initEvent("click", true, true);
      pom.dispatchEvent(event);
    } else {
      pom.click();
    }
  };

  const onRun = () => {
    ReactDOM.findDOMNode(document.getElementById("code-result")).srcdoc =
      editor.current.getValue();
    props.scrollDown();
  };

  const toggleTheme = () => {
    if (editorTheme) {
      editor.current.setTheme("ace/theme/clouds");
      setEditorTheme(false)
      props.setEditorTheme(false)
    } else {
      editor.current.setTheme("ace/theme/nord_dark");
      setEditorTheme(true)
      props.setEditorTheme(true)
    }
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Tooltip title="Download code in .txt" arrow>
            <Button
              onClick={download}
              startIcon={<CloudDownload style={{ color: "#fff" }} />}
              style={{ color: "#fff" }}
            >
              Download
            </Button>
          </Tooltip>
          <Button
            onClick={toggleTheme}
            startIcon={
              editorTheme ? (
                <Brightness7 style={{ color: "#fff" }} />
              ) : (
                <Brightness2 />
              )
            }
            style={{ color: "#fff" }}
          >
            Change Theme
          </Button>
          <Button
            style={{ background: "#5d85fb", color: "#fff", float: "right" }}
            onClick={onRun}
          >
            Run Code
          </Button>
        </Toolbar>
      </AppBar>
      <div ref={editorRef} />
    </>
  );
};

export default AceEditor;
