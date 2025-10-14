import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //let counter = 0;      //By taking this , there is no effect on ui by change the value on count. Now for that , we will use hook name as UseState - It will change the value of constant in ui (in all the part of page ), if the value of constant changes

  let [counter, setCounter] = useState(5)

  const AddCounter = () => {
    if (counter < 20) {
      counter++;
      setCounter(counter);
    }

    console.log(counter);
  }

  const RemoveCounter = () => {
    if(counter > 0){
    setCounter(counter - 1);
    }

    console.log(counter);
  }
  return (
    <>
      <h1>Counter : {counter}</h1>
      <button onClick={AddCounter}>Add</button>
      <button onClick={RemoveCounter}>Remove</button>

      <footer>Count : {counter}</footer>
    </>
  )

}

export default App
