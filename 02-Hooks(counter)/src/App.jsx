import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //let counter = 0;      //By taking this , there is no effect on ui by change the value on count. Now for that , we will use hook name as UseState - It will change the value of constant in ui (in all the part of page ), if the value of constant changes

  let [counter, setCounter] = useState(5)

  console.log(counter);
  

  // const AddCounter = () => {
  //   if (counter < 20) {
  //     counter+=2;
  //     setCounter(counter);
  //   }

  //   console.log(counter);
  // }

  // const AddCounter = () => {
  //   setCounter(counter+1);    //count get 6 (5+1)
  //   setCounter(counter+1);    //count get 6(5+1)
  //   setCounter(counter+1);
  //   setCounter(counter+1);    //count get 6(5+1) , the last one is follows , if all statement are doing same work in batches. 

  //   console.log(counter);
    
  // }

  const AddCounter = ()=> {
    setCounter((prevCounter) => prevCounter+1)     //Here we taking Counter(prevCounter) as paramenter and return prevCounter +1 for next iteration return (5+1)
    setCounter((prevCounter) => prevCounter+1)     //return (6+1)
    setCounter((prevCounter) => prevCounter+1)
    setCounter((prevCounter) => prevCounter+1)     //return (8+1) = 9

    console.log(counter);     //we will just get the initail value of counter , i.e - 5(not the updated one 9). When we again click on addcounter , then for that state we get 9 , for that value would be increased by 4 , i.e 13 and so on.
    
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
