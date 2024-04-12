import type { Conversion } from './fetchCoversion'

type BridgeInfo = {
  list: Conversion[] | undefined
  bridge: Omit<Conversion, 'convertPrice'>
  block: number
  currencies:
    | {
        currencyid: string
        weight: number
        reserves: number
        priceinreserve: number
      }[]
    | undefined
}

type MarketInfo = {
  symbol: string
  price: number
}

type Token = {
  name: string
  amount: number
  daiPrice: number
}

export const MarketConverstion = (
  bridge: BridgeInfo,
  marketInfo: MarketInfo[]
) => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  return bridge.list!.map((token: Token) => {
    switch (token.name) {
      case 'VRSCTEST':
      case 'VRSC':
        return {
          ...token,
          price: marketInfo.find((c) => c.symbol === 'vrsc')?.price || 0,
        }
      case 'vETH':
        return {
          ...token,
          price: marketInfo.find((c) => c.symbol === 'eth')?.price || 0,
        }
      case 'DAI.vETH':
        return {
          ...token,
          price: 1,
        }
      case 'MKR.vETH':
        return {
          ...token,
          price: marketInfo.find((c) => c.symbol === 'mkr')?.price || 0,
        }
      // return { ...token, price: vrscPrice }
      default:
        return { ...token }
    }
  })
}
