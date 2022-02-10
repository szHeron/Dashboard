import { BrowserRouter } from 'react-router-dom';
import HeaderBar from './components/HeaderBar';
import NavBar from './components/NavBar';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <HeaderBar/>
      <NavBar/>
    </BrowserRouter>
  );
}

export default App;
