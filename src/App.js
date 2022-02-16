import { BrowserRouter } from 'react-router-dom';
import HeaderBar from './components/HeaderBar';
import NavBar from './components/NavBar';

function App() {
  return (
    <BrowserRouter>
      <HeaderBar/>
      <NavBar/>
    </BrowserRouter>
  );
}

export default App;
