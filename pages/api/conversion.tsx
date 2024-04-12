import type { NextApiRequest, NextApiResponse } from 'next'
import FetchConversion from '@/lib/fetchCoversion'
import cache from 'memory-cache'
import { Min1, Min15 } from '@/lib/clocks'
import { fetchCoinparikaMarket } from '@/lib/fetchCoinPaprikaMarket'
import { MarketConverstion } from '@/lib/marketConverstion'

const cacheConversionPrice = '@conversionPrice'
const cacheConverstionBridge = '@converstionBridge'

// const CoinGeckoVRSC = 'https://api.coingecko.com/api/v3/coins/verus-coin'
// const CoinGeckoETH = 'https://api.coingecko.com/api/v3/coins/ethereum'
// const CoinGeckoMRK = 'https://api.coingecko.com/api/v3/coins/maker'
// const CoinGeckoDAI = 'https://api.coingecko.com/api/v3/coins/dai'
// const urls = [CoinGeckoVRSC, CoinGeckoETH, CoinGeckoMRK, CoinGeckoDAI]

type Conversions = {
  symbol: string
  price: number
}

let index = 1
export default async (req: NextApiRequest, res: NextApiResponse) => {
  let result: any = req.query

  if (index) {
    // NOTE: Comment below for master branch.
    cache.del(cacheConversionPrice)
    cache.del(cacheConverstionBridge)
    // cache.clear()
    index = 0
  }
  let conversions: Conversions[] = [
    { symbol: 'vrsc', price: 0 },
    { symbol: 'eth', price: 0 },
    { symbol: 'mkr', price: 0 },
    { symbol: 'dai', price: 0 },
  ]
  if (!cache.get(cacheConversionPrice)) {
    try {
      conversions = await fetchCoinparikaMarket()
    } catch (error) {
      console.error('%s: fetching prices %s', Date().toString(), error)
    }
    cache.put(cacheConversionPrice, conversions, Min15)
  } else {
    conversions = cache.get(cacheConversionPrice)
  }
  if (!cache.get(cacheConverstionBridge)) {
    result = await FetchConversion()
    cache.put(cacheConverstionBridge, result, Min1)
  } else {
    result = cache.get(cacheConverstionBridge)
  }

  result.list = MarketConverstion(result, conversions)

  res.statusCode = 200
  res.json(result)
}
