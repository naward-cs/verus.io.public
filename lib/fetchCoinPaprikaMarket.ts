type Conversions = {
  symbol: string
  price: number
}

const conversions: Conversions[] = [
  { symbol: 'vrsc', price: 0 },
  { symbol: 'eth', price: 0 },
  { symbol: 'mkr', price: 0 },
  { symbol: 'dai', price: 0 },
]

type CoinpaprikaUSD = {
  price: number
  [key: string]: string | number
}

type CoinpaprikaData = {
  id: string
  name: string
  symbol: string
  rank: number
  circulating_supply: number
  total_supply: number
  max_supply: number
  beta_value: number
  first_data_at: string
  last_updated: string
  quotes: { USD: CoinpaprikaUSD }
}[]

const CoinpaprikaURL = 'https://api.coinpaprika.com/v1/tickers'

export const fetchCoinparikaMarket = async () =>
  await fetch(CoinpaprikaURL, { mode: 'no-cors' })
    .then((res) => res.json())
    .then((c: CoinpaprikaData) => {
      const m = conversions.map((t) => {
        switch (t.symbol) {
          case 'vrsc':
            return {
              symbol: t.symbol,
              price:
                c.filter((x) => x.id === 'vrsc-verus-coin')[0].quotes.USD
                  .price || 0,
            }
          case 'eth':
            return {
              symbol: t.symbol,
              price:
                c.filter((x) => x.id === 'eth-ethereum')[0].quotes.USD.price ||
                0,
            }
          case 'mkr':
            return {
              symbol: t.symbol,
              price:
                c.filter((x) => x.id === 'mkr-maker')[0].quotes.USD.price || 0,
            }
          case 'dai':
            return {
              symbol: t.symbol,
              price:
                c.filter((x) => x.id === 'dai-dai')[0].quotes.USD.price || 0,
            }
          default:
            return { symbol: t.symbol, price: 0 }
        }
      })
      return m
    })
