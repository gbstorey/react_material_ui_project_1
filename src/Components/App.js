import Header from '../Components/UI/Header';
import { ThemeProvider } from '@mui/material';
import theme from "./UI/Theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header/>
        Hello!
    </ThemeProvider>
  );
}

export default App;
