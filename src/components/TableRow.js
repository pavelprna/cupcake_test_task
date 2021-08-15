import { useEffect, useState } from "react"
import TableRateCell from "./TableRateCell"

export default function TableRow({ pair, markets, key }) {
  const [row, setRow] = useState([]);
  const [highest, setHighest] = useState(0)

  const getIndexOfHighest = (rates) => {
    return rates.indexOf(Math.max(...rates));
  }

  useEffect(() => {
    markets.forEach((market, i) => {
      if (pair.includes(market.base)) {
        setRow(state => {
          state[i] = market.rates[pair[0]];
          return state;
        });
      } else {
        setRow(state => {
          state[i] = market.rates[pair[0]]/market.rates[pair[1]];
          return state;
        });
      }
    });
    setHighest(getIndexOfHighest(row))
  }, [markets, pair, row])

  return (
    <tr key={key}>
      <td>{pair.join('/')}</td>
      {
        row.map((rate, i) => {
          return <TableRateCell rate={rate} isHighest={i === highest} key={i}/>
        })
      }
    </tr>
  )
}