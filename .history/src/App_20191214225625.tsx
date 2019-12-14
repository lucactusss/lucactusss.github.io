
import './App.css';
import { HashRouter, Link } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <div className="App">
      <HashRouter basename='/'>
      <div>
        <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        </ul>
        <hr />
      </div>
      </HashRouter>
    </div>
  );
}

export default App;
