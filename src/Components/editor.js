import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import {
  AppBar,
  Toolbar,
  Tooltip,
  Button,
  IconButton,
} from "@material-ui/core";
import { Brightness3, Brightness7, GetApp } from "@material-ui/icons";

const ace = require("ace-builds/src-noconflict/ace");

require(`ace-builds/src-noconflict/theme-monokai`);
require("ace-builds/webpack-resolver");
require("ace-builds/src-noconflict/mode-html");
require("ace-builds/src-noconflict/mode-javascript");
require("ace-builds/src-noconflict/mode-css");

const AceEditor = (props) => {
  const currRef = useRef(null);
  const editor = useRef(null);
  const [darkTheme, setDarkTheme] = useState(false);

  useEffect(() => {
    const node = currRef.current;
    editor.current = ace.edit(node, {
      mode: "ace/mode/html",
      selectionStyle: "text",
    });
    editor.current.setShowPrintMargin(false);
    editor.current.setOptions({ minLines: 33, maxLines: 33 });
    editor.current.setFontSize("18px");

    //sets code in editor and result in iframe if code is present in localstorage
    if (localStorage.getItem("code")) {
      editor.current.setValue(localStorage.getItem("code"));
      ReactDOM.findDOMNode(document.getElementById("output")).srcdoc =
        editor.current.getValue();
    }
  }, []);

  const onSubmit = () => {
    //sets the current code in localstorage to retain after refreshing the page if run and sets the code in iframe
    localStorage.setItem("code", editor.current.getValue());

    ReactDOM.findDOMNode(document.getElementById("output")).srcdoc =
      editor.current.getValue();
    props.scrollToOutput();
  };
  const toggleTheme = () => {
    //sets and unsets theme for the editor
    if (!darkTheme) {
      editor.current.setTheme("ace/theme/monokai");
    } else {
      editor.current.setTheme("ace/theme/textmate");
    }
    setDarkTheme((prevTheme) => !prevTheme);
    props.setDarkTheme((prevTheme) => !prevTheme);
  };

  const downloadCode = () => {
    //downloads the code in a txt file
    var element = document.createElement("a");
    element.setAttribute(
      "href",
      "data:text/plain;charset=utf-8," +
        encodeURIComponent(editor.current.getValue())
    );
    element.setAttribute("download", "download.txt");

    element.style.display = "none";
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Button
            color="default"
            size="large"
            style={{ background: "green", color: "#fff" }}
            onClick={onSubmit}
          >
            Run {">>"}
          </Button>
          <Tooltip title="Change theme" arrow>
            <IconButton onClick={toggleTheme}>
              {darkTheme ? (
                <Brightness7 style={{ color: "#fff" }} />
              ) : (
                <Brightness3 />
              )}
            </IconButton>
          </Tooltip>
          <Tooltip title="Download Code" arrow>
            <IconButton onClick={downloadCode}>
              <GetApp style={{ color: "#fff" }} />
            </IconButton>
          </Tooltip>
        </Toolbar>
      </AppBar>
      <div ref={currRef}>{props.code}</div>
    </>
  );
};

export default AceEditor;
