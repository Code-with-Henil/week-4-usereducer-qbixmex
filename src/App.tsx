import { Container, CssBaseline, ThemeProvider } from '@mui/material';
import { useContext } from 'react';
import { ThemeContext } from './contexts/theme.provider';
import { lightTheme, darkTheme } from './themes';
import { Heading, Todos } from './components';

const App = () => {

  const { theme } = useContext(ThemeContext);

  return (
    <ThemeProvider theme={ theme === 'light' ? lightTheme : darkTheme }>
      <CssBaseline />
      <Container maxWidth="sm">
        <Heading color="blue" component="h1" fontSize={4}>Todo App</Heading>
        <Todos />
      </Container>
    </ThemeProvider>
  );
};

export default App;