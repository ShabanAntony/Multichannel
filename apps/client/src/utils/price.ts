import {
  VSProfit,
  customsTax,
  nikeProfit,
  reebokProfit,
} from '../constants/prices'

export const formatUSDPrice = (price: number) => {
  return price + '$'
}

export const formatLaryPrice = (price: number) => {
  return Math.round(price) + ' ლ'
}

export const calculateVSFinalPrice = (price: number) => {
  return Math.round(price * (1 + VSProfit + customsTax))
}

export const calculateNikeFinalPrice = (price: number) => {
  return Math.round(price * (1 + nikeProfit)) + 10
}

export const calculateReebokFinalPrice = (price: number) => {
  return Math.round(price * (1 + reebokProfit)) + 10
}
