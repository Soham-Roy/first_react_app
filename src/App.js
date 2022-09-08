import logo from './logo.svg';
import './App.css';
import Header from './components/Header.js';
import Card from './components/Card.js';
import json from './data/data.js';

function App() {
  const cards = json.map(item => {
      return (
          <Card 
            key={item.id}
            item = {item}/>
      )
  });

  return (
    <div className="App">
      <Header />
      <div className='card_grid'>
        {cards}
      </div>
    </div>
  );
}

export default App;
