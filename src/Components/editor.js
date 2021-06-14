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
  }, []);

  const onSubmit = () => {
    ReactDOM.findDOMNode(document.getElementById("output")).srcdoc =
      editor.current.getValue();
    props.scrollToOutput();
  };
  const toggleTheme = () => {
    if (!darkTheme) {
      editor.current.setTheme("ace/theme/monokai");
    } else {
      editor.current.setTheme("ace/theme/textmate");
    }
    setDarkTheme((prevTheme) => !prevTheme);
    props.setDarkTheme((prevTheme) => !prevTheme);
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
            <IconButton>
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
