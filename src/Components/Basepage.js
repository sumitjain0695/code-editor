import { Box, Grid } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import React, { useRef, useState } from "react";
import AceEditor from "./Editor/editor";
import Output from "./Result/result";

const Basepage = () => {
  const outputRef = useRef(null);
  const [editorTheme, setEditorTheme] = useState(false);

  const matches = useMediaQuery("(max-width:600px)");

  const scrollDown = () => {
    if (matches) {
      outputRef.current.scrollIntoView({ behavior: "smooth"});
    }
  };

  return (
    <Box p={2} style={{ backgroundColor: editorTheme ? "#272822" : "#fff" , height:'100vh' }}>
      <Grid
        container
        spacing={2}
        style={{ backgroundColor: editorTheme ? "#616161" : "lightgray"}}
      >
        <Grid item xs={12} md={6}>
          <AceEditor
            setEditorTheme={setEditorTheme}
            scrollDown={scrollDown}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Output ref={outputRef} />
        </Grid>
      </Grid>
    </Box>
  );
};
export default Basepage;
