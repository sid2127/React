import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import tailwind from "tailwindcss"
import './index.css'


function App() {
  const [Color , setColor] = useState("green")
  console.log(Color);
  

  return (
    
    <div className="w-full h-screen" style={{backgroundColor: Color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 p-0 ">
        <div className='flex flex-wrap items-center justify-center gap-2 p-10 border-2 border-black bg-orange-400 rounded-3xl'>
          <button className='border-2 border-black p-4 bg-blue-500 rounded-2xl 'onClick={()=>{ console.log(Color);
           return setColor("blue")}}>blue</button>
          <button className='border-2 border-black p-4 bg-yellow-200 rounded-2xl 'onClick={()=> setColor("yellow")}>yellow</button>
          <button className='border-2 border-black p-4 bg-pink-400 rounded-2xl 'onClick={()=> setColor("pink")}>pink</button>
          <button className='border-2 border-black p-4 bg-black rounded-2xl text-white'onClick={()=> setColor("black")}>black</button>
          <button className='border-2 border-black p-4 bg-red-500 rounded-2xl 'onClick={()=> setColor("red")}>red</button>
          <button className='border-2 border-black p-4 bg-purple-500 rounded-2xl 'onClick={()=> setColor("purple")}>purple</button>
          <button className='border-2 border-black p-4 bg-white rounded-2xl 'onClick={()=> setColor("white")}>white</button>
        </div>
      </div>
    </div>
  )
}

export default App
