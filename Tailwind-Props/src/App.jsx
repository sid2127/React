import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card'

function App() {

  const mydetails = {
    name: "Sid",
    course: "Btech",
  }
  return (
    <>
      <h1 className='bg-green-400 text-black'>Tailwind test</h1>

      <Card channel="Chai aur Code" myobj = {mydetails}/>            {/*myobj = {name: "Sid" , class = "Btech"} , it is not allowed to pass as props , not arr = [1,3,4] also*/}
      <Card channel = "Sid Mehra"/>
         
    </>
  )

}

export default App
