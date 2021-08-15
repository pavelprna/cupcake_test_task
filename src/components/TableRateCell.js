export default function TableRateCell({ rate, isHighest, key }) {
  return(
    <td className={`${isHighest ? 'highest' : 'not'}`} key={key}>{rate}</td>
  )
}