
import { useState } from 'react';
import './App.css';
import Die from './components/Die';
import { nanoid } from 'nanoid';

function App() {

  const [dice, setDice] = useState(allNewDice())
 

  function allNewDice() {
    let array = []
    for (let i = 0; i < 10; i++) {
      array.push({
        id: nanoid(), 
        value: Math.floor(Math.random() * 6), 
        isHeld: false
      })
    }
    return array
  }

  function rollDice() {
    setDice(allNewDice())
  }

  function holdDice(id) {
    setDice(oldDice => oldDice.map(die => {
      return die.id === id ? 
        {...die, isHeld: !dice.isHeld} :
        die
    }))
  }

  const diceElements = dice.map(die => {
    return <Die key={die.id} value={die.value} isHeld = {die.isHeld} holdDice={()=>holdDice(die.id)} />
  })

 

  return (
    <main>
      <div className='dice-container'>
        {diceElements}
      </div>
      <button onClick={rollDice} className='roll-dice'>Roll</button>
    </main>
  )
}

export default App;
