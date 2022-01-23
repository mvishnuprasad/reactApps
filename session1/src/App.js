import logo from './logo.svg';
import './App.css';
import Shape from './components/Shape.js';
import Rectangle from './components/Rectangle'; 
import Navbar from './components/Navbar';
function App() {
  return (
 <div>
    <Navbar />
    <Shape />
    <Rectangle />
 </div>
  );
}

export default App;
