import './App.css';
import { Cargo } from './components/dragons/component';
import logo from './imgs/SpaceX-Logo.jpg'

function App() {
    
  return (
    <div className="App">
      <header>
      <img className="header-logo" src={logo} alt="image-not-found"/>
      </header>
      <div>
        <Cargo/>
      </div>
      
    </div>
  );
}

export default App;

// ada