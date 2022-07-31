import './App.css';
import { Link } from 'react-router-dom';
import CartComponent from './Components/CartComponent/CartComponent';

function App() {
  return (
    <>
    <div><CartComponent/></div>
    <div style={{ display: "flex" }}>
        <nav>
          <button>
            <Link to="/shopping">Shopping App</Link>
          </button>
          <button>
            <Link to="/counter">Counter App</Link>
          </button>
          <button>
            <Link to="/password">Password App</Link>
          </button>
          <button>
            <Link to="/third-component">Third component</Link>
          </button>
        </nav>
    </div>
    </>
    
  );
}

export default App;
