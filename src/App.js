import './App.css';
import FaqComponent from './components/FaqComponent';
import { ThemeProvider, createTheme } from '@mui/material/styles';
const theme = createTheme({
  typography: {
    fontFamily: "Kumbh Sans, Roboto, sans-serif"
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <FaqComponent />
    </ThemeProvider>
  );
}

export default App;
