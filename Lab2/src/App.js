import './App.css';
import Cart from './components/Cart';
import CounterList from './components/CounterList';
import MyCounter from './components/MyCounter';
import Game from './components/Game';

function App() {
  return (
    <div className="App">
      <MyCounter nameTask={'task1'} initial={0} min={-10} max={10} />
      <CounterList nameTask={'task1.2'} counters={counters} />
      <Cart nameTask={'task2'} products={products} />
      <Game nameTask={'task3'} />
    </div >
  );
}

const counters = [
  { id: 1, initial: 6, min: -5, max: 10 },
  { id: 2, initial: 5 },
  { id: 3 }
]
const products = [
  { name: "Курячі крильця", price: 80, min: 0, max: 5 },
  { name: "Картопля фрі", price: 40 , min: 0 },
  { name: "Піцца", price: 120, min: 0, max: 10 }
]

export default App;
