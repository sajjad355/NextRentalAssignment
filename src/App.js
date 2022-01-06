import './App.css';
import Product from './View/Products'
import Data from '../src/data/data.json'

function App() {
  return (
    <div className="App">
      {localStorage.setItem('data', JSON.stringify(Data))}
      <Product />
    </div>
  );
}

export default App;
