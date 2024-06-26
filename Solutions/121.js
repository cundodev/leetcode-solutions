export const maxProfit = (prices) => {
  let minPrice = Infinity
  let maxProfit = 0

  for (let i = 0; i < prices.length; i++) {
    const currentPrice = prices[i]
    if (currentPrice < minPrice) {
      minPrice = currentPrice
    } else if (currentPrice - minPrice > maxProfit) {
      maxProfit = currentPrice - minPrice
    }
  }
  return maxProfit
}
