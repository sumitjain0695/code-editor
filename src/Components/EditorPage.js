import React, { useRef, useState } from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
} from "@material-ui/core";
import AceEditor from "./editor";
import Output from "./output";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const EditorPage = () => {
  const outputRef = useRef(null);
  const [darkTheme, setDarkTheme] = useState(false);

  const matches = useMediaQuery("(max-width:600px)");

  const scrollToOutput = () => {
    if (matches) {
      outputRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <Container
      maxWidth="lg"
      style={{ backgroundColor: darkTheme ? "#272822" : "#fff" }}
    >
      <Box mb={3} p={5}>
        <Typography variant="h3" color="primary">
          ACE Editor
        </Typography>
      </Box>
      <Grid container spacing={2} style={{ backgroundColor: darkTheme ? "#616161" : "lightgray" }}>
        <Grid item xs={12} md={6}>
          <AceEditor
            setDarkTheme={setDarkTheme}
            scrollToOutput={scrollToOutput}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Output ref={outputRef} />
        </Grid>
      </Grid>
    </Container>
  );
};
export default EditorPage;
