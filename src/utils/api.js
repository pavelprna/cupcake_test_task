class Api {
  _request(path) {
    return fetch(`./api/v1/${path}`, {
      method: 'GET'
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Error ${res.status}: ${res.nessage}`)
      })
  }

  getMarketData = (market) => {
    return this._request(market)
  }


  getMarketPollData = (market) => {
    return this._request(`${market}/poll`)
  }
}

const api = new Api();

export default api;
