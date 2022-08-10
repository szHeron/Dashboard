import MyRoutes from './Routes';
import SideBar from './components/SideBar';
import HeaderBar from './components/HeaderBar';
import './app.css';

function App() {
  return (
    <div className='app'>
      <SideBar/>
      <div>
        <HeaderBar/>
        <MyRoutes/>
      </div>
    </div>
  );
}

export default App;
