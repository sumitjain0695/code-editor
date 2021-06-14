import { Box, Container, Grid, Typography } from "@material-ui/core";
import AceEditor from "./editor";
import Output from "./output";

const EditorPage = () => {
  return (
    <Container maxWidth="lg">
      <Box mb={3} p={5}><Typography variant="h3" color="primary">ACE Editor</Typography></Box>
      <Grid container spacing={5} style={{ backgroundColor: "lightgray" }}>
        <Grid item xs={12} md={6}>
          <AceEditor />
        </Grid>
        <Grid item xs={12} md={6}>
          <Output />
        </Grid>
      </Grid>
    </Container>
  );
};
export default EditorPage;
