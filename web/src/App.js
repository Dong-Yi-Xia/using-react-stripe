import { useState } from 'react';
import './App.css';
import StripeContainer from './components/StripeContainer';
import mm from './assets/mm.jpeg'


function App() {
  const [showItem, setShowItem] = useState(false)
  return (
    <div className="App">
      <h1>The Action Figurine Store</h1>
      {showItem ? <StripeContainer/> : 
        <> 
          <h3>$10.00</h3> 
          <img src={mm} height='500px'/>
          <button onClick={() => setShowItem(true)}>Purchase</button>
        </>}
    </div>
  );
}

export default App;
