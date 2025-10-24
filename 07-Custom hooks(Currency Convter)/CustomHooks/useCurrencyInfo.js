import { useEffect, useState } from 'react'

function useCurrencyInfo(currency , ToCurrency) {

    const [data, setData] = useState({})

    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`)
            .then((res) => res.json())
            .then((res) => setData(res[currency] || {}))
            .catch((err) => console.error("Currency API error:", err))
    }, [currency , ToCurrency])

    return data;

}

export default useCurrencyInfo