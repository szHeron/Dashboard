import MyRoutes from './Routes';
import SideBar from './components/SideBar';
import HeaderBar from './components/HeaderBar';

function App() {
  return (
    <div style={{display: 'flex'}}>
      <SideBar/>
      <div style={{width: '100%'}}>
        <HeaderBar/>
        <MyRoutes/>
      </div>
    </div>
  );
}

export default App;
