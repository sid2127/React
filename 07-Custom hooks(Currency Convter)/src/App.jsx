import Displaybox from './Components/Displaybox'
import './App.css'
import { useEffect, useState } from 'react'
import useCurrencyInfo from '../CustomHooks/useCurrencyInfo';

function App() {

  const [Amount, setAmount] = useState(0);
  const [From, setFrom] = useState("usd");
  const [To, setTo] = useState("inr")
  const [Total, setTotal] = useState(0);

  const getdata = useCurrencyInfo(From , To);
  const AllKeys = Object.keys(getdata);

  const ConvertChange = () => {
    const output = Amount * getdata[To];
    setTotal(output);
  }

  const swap = () => {
  setFrom(prevFrom => {
    setTo(prevTo => prevFrom);
    return To;
  });

  console.log(From , To);
  
  setTotal(0); // reset total after swap
};



  useEffect(()=>{
    //console.log(Amount, From , To);
    
    ConvertChange();
  }, [Amount , From , To])

  return (
    <>
     <div className="min-h-screen flex items-center justify-center bg-gray-900 p-6">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          ConvertChange();
        }}
        className="w-full max-w-2xl bg-gray-800 text-gray-100 p-6 rounded-xl shadow-lg space-y-6"
      >
        <h1 className="text-2xl font-semibold text-center text-cyan-400">
          💱 Currency Converter
        </h1>

        {/* Side-by-Side From/To */}
        <div className="flex flex-col md:flex-row md:space-x-6 space-y-4 md:space-y-0">
          <Displaybox label="From" amount={Amount} AmountChange={(amount) => setAmount((amount))} CurrencyType={From} AllCurrencies={AllKeys} CurrencyChange={(newCurrency) => setFrom(newCurrency)} />

            <button type='button' className='bg-amber-400 m-12 p-3' onClick={swap}>Swap</button>
           
           <Displaybox label="To" amount={Total} CurrencyType={To} AllCurrencies={AllKeys} CurrencyChange={(newCurrency) => setTo(newCurrency)} Unchange='true' />
        </div>

        {/* Convert Button */}
        <button
          type="submit"
          className="w-full py-2 bg-cyan-500 hover:bg-cyan-600 text-gray-900 font-semibold rounded-lg active:scale-95 transition-all"
        >
          Convert
        </button>
      </form>
    </div>
           </>
  )
}

export default App
