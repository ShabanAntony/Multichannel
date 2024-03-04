import { formatLaryPrice, formatUSDPrice } from '../price'

describe('formatUSDPrice', () => {
  it('should format price', () => {
    expect(formatUSDPrice(100)).toEqual('100$')
  })
})

describe('formatLaryPrice', () => {
  it('should format price', () => {
    expect(formatLaryPrice(100)).toEqual('100 ლ')
  })
})
