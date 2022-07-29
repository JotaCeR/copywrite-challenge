import './App.css';
import { Routes, Route } from 'react-router-dom'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import DefaultHeader from './components/DefaultHeader';
import Home from './layouts/Home'

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#C0392B'
      },
      secondary: {
        main: '#4E1FBA'
      },
      background: {
        main: '#F0EAD6'
      },
      error: {
        main: '#FF0000'
      }
    },
    typography: {
      fontFamily: [
        'Poppins',
        'sans-serif'
      ].join(','),
      fontSize: 12
    },
    spacing: 3
  })

  return (
    <ThemeProvider theme={theme} >
      <div className="App">
        <Routes>
          <Route exact path='/icon' element={<DefaultHeader />} />
          <Route path='/' element={<Home />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
