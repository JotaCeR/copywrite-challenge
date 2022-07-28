import './App.css';
import { Routes, Route } from 'react-router-dom'
import DefaultHeader from './components/DefaultHeader';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<DefaultHeader />} />
      </Routes>
    </div>
  );
}

export default App;
