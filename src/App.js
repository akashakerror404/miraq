import logo from './logo.svg';
import './App.css';
import Home from './pages/home/Home';
import { Analytics } from '@vercel/analytics/react';

function App() {
  return (
    <div className="App">
      <Home/>
            <Analytics />

    </div>
  );
}

export default App;
