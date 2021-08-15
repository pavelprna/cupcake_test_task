import { useEffect, useState } from "react";
import api from "../utils/api";
import { initialMarkets, initialPairs } from "../utils/constants";
import Table from "./Table";
import TableRow from "./TableRow";

export default function App() {
  const [markets, setMarkets] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [pairs] = useState(initialPairs)



  useEffect(() => {
    function getPool(market) {
        setIsLoaded(true);
      
      return api.getMarketPollData(market)
        .then((json) => {
          getPool(market);
          json.name = market;
          setMarkets(state => {
            return state.map(s => s.name === market ? json : s)
          });
        })
        .catch(err => {
          console.log(err);
          setIsLoaded(false);
        });
    }

    initialMarkets.map(market => {
      return api.getMarketData(market)
        .then((json) => {
          json.name = market;
          setMarkets(state => {
            return [...state, json]
          });
          getPool(market)
        })
    })
  }, [])

  return ( isLoaded &&
    <Table markets={markets}>
      {pairs.map((pair) => {
        return <TableRow pair={pair} key={pair.join('')} markets={markets} />
      })}
    </Table>
  )
}
