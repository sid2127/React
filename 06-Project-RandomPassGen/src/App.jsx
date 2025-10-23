import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  
  const [Password , SetPassword] = useState("");
  const [Length , SetLength] = useState(8)
  const [NumChange , SetNumChange] = useState(false)
  const [CharChange , setCharChange] = useState(false)

  const CopyReference = useRef(null)

  const PasswordChanger = useCallback(()=>{
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    let newStr = "";

    if(NumChange){
      str += "0123456789"
    }
    if(CharChange){
      str+= "!@#$%^&*(){}"
    }

    for(let i = 0 ; i < Length ; i++){
      const ind = Math.floor(Math.random() * str.length + 1);
      newStr += str.charAt(ind)
    }

    SetPassword(newStr);
  } , [Password, Length , NumChange , CharChange])


  useEffect(()=>{
    PasswordChanger();
  }, [Length , NumChange , CharChange])

  //Copy to Clipboard function

  const CopyToClipBoard = ()=>{
    CopyReference.current?.select();
    window.navigator.clipboard.writeText(Password)
  }


  return (
    <>
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-12 my-8 bg-purple-600 text-orange-50">
      <h1 className='text-center pb-9'>PASSWORD GENERATOR</h1>
      <div className='flex pb-9'>
        <input type="text" value={Password} className='outline-none w-full py-1 px-3 border-2' placeholder='Password' ref={CopyReference} readOnly />
        <button className='outline-none border-2 bg-amber-300 hover:bg-purple-500 active:scale-95 transform' onClick={CopyToClipBoard}>Copy</button>
      </div>

      <div className='flex '>
        <div className='flex flex-wrap'>
          <input type="range" min={5} max={50} id='increase' value={Length} className= 'cursor-pointer' onChange={(e) => {SetLength(e.target.value)}}/>
          <label htmlFor="increase">length: ({Length})</label>
        </div>
        <div>
          <input type="checkbox" className='ml-7' id='NumberInput' onChange={()=>{SetNumChange(prev => !prev)}}/>
          <label >Numbers</label>
        </div>
        <div>
          <input type="checkbox" className='ml-7' onChange={()=> {setCharChange(CharChange => !CharChange)}} id='NumberInput'/>
          <label htmlFor="NumberInput">Characters</label>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
