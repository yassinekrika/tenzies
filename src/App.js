
import { useState, useEffect } from 'react';
import './App.css';
import Die from './components/Die';
import { nanoid } from 'nanoid';
import Confetti from 'react-confetti'

function App() {

  const [dice, setDice] = useState(allNewDice())
  const [tenzies, setTenzies] = useState(false)
 
  useEffect(() => {
    const allHeld = dice.every(die => die.isHeld)
    const firstVlaue = dice[0].value
    const allSameValue = dice.every(die => die.value === firstVlaue)

    if (allHeld && allSameValue) {
      setTenzies(true)
      console.log('you won!')
    }

  }, [dice])

  function allNewDice() {
    let array = []
    for (let i = 0; i < 10; i++) {
      array.push(generateNewDie())
    }
    return array
  }

  function rollDice() {
    if (!tenzies) {
      setDice(oldDice => oldDice.map(die => {
        return die.isHeld ?
                die :
                generateNewDie()
      }))
    } else {
      setTenzies(false)
      setDice(allNewDice())
    }
  }

  function generateNewDie() {
    return {
      id: nanoid(), 
      value: Math.floor(Math.random() * 6), 
      isHeld: false
    }
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
      {tenzies && <Confetti />}
      <h1 className="title">Tenzies</h1>
      <p className="instructions">Roll until all dice are the same. 
      Click each die to freeze it at its current value between rolls.</p>
      <div className='dice-container'>
        {diceElements}
      </div>
      <button onClick={rollDice} className='roll-dice'>{tenzies ? "New Game" : "Roll"}</button>
    </main>
  )
}

export default App;
