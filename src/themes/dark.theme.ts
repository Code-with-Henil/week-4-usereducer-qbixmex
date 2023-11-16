import { createTheme } from "@mui/material";
import { amber, blue, green, purple, red } from "@mui/material/colors";

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: blue[500],
    },
    secondary: {
      main: purple[500],
    },
    warning: {
      main: amber[500],
    },
    success: {
      light: green[200],
      main: green[500],
      dark: green[300],
    },
    error: {
      main: red[500],
    },
  },
});

export default darkTheme;
