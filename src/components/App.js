import { useEffect, useState } from "react"
import api from "../utils/api"

export default function App() {
  const [markets, setMarkets] = useState({})
  const initialMarkets = ['first', 'third']

  function getPool(market) {
    return api.getMarketPollData(market)
      .then((json) => {
        getPool(market);
        setMarkets(states => {
          return {...states, [market]: json}
        });
      });
  }

  useEffect(() => {
    initialMarkets.forEach(market => {
      return api.getMarketData(market)
        .then((json) => {
          setMarkets(states => {
            return {...states, [market]: json}
          });
          getPool(market);
        })
    })  
  }, [])
  
  return (
    <></>
  )
}