import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Container, Typography } from "@material-ui/core";
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Navbar from "./Navbar";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const App = () => {  
  
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: prefersDarkMode ? 'dark' : 'light',
        },
      }),
    [prefersDarkMode],
  );

  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Navbar />
      <Container className={classes.root}>
        <Typography> Edit <code>src/App.tsx</code> and save to reload. </Typography>
      </Container>
    </ThemeProvider>
  );
};

export default App;
