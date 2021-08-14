class Api {
  constructor({market}) {
    const fetch = fetch(`./api/v1/${market}`, {
      method: 'GET'
    })
      .theh(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Error ${res.status}: ${res.nessage}`)
      })
  }
}

export default Api;
