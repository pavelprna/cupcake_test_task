export default function Table({ markets,  ...props}) {
  return (
    <table className="table">
      <thead>
        <tr className="table__row">
          <th className="table__header">pair/market</th>
          {
            markets.map(market => {
              return (
                <th className="table__header" key={market.name}>{market.name}</th>
              )
            })
          }
        </tr>
      </thead>
      <tbody>
        {props.children}
      </tbody>
    </table>
  )
}