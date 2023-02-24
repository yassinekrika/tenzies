
import './App.css';
import Die from './components/Die';

function App() {

  let array = [1, 2, 3, 4, 5, 6]
  return (
    <main>
      <div className='dice-container'>
        {array.map(arr => {
          <Die value={arr}/>
        })}
      </div>
    </main>
  )
}

export default App;
