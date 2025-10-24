import React from 'react'

const Displaybox = ({ label, amount, AmountChange, CurrencyType = "usd", AllCurrencies, CurrencyChange, Unchange = "false" }) => {
    return (
        <>
            <div className="flex-1">
                <label className="block mb-2 text-gray-300">{label}</label>
                <input
                    type="number"
                    value={amount}
                    onChange={(e) => AmountChange && AmountChange(e.target.value)}
                    className="w-full p-2 rounded-lg bg-gray-700 border border-gray-600 outline-none focus:ring-2 focus:ring-cyan-400 mb-3"
                />
                <select
                    value={CurrencyType}
                    onChange={(e) => CurrencyChange && CurrencyChange(e.target.value)}
                    className="w-full p-2 rounded-lg bg-gray-700 border border-gray-600 outline-none focus:ring-2 focus:ring-cyan-400"
                >

                    {AllCurrencies.map((currency) => (
                        <option key={currency} value={currency}>
                            {currency.toUpperCase()}
                        </option>
                    ))}
                </select>
            </div>


        </>
    )
}

export default Displaybox