import { createTheme } from "@mui/material";
import { amber, blue, green, purple, red } from "@mui/material/colors";

const lightTheme = createTheme({
  palette: {
    mode: 'light',
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
      main: green[500],
    },
    error: {
      main: red[500],
    },
  },
});

export default lightTheme;
