export default function Table({ markets,  ...props}) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>pair/market</th>
          {
            markets.map(market => {
              return (
                <th key={market}>{market}</th>
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