// 347. Top K Frequent Elements

export const topKFrequent = (nums, k) => {
  const frequents = {}
  nums.forEach((num) => {
    frequents[num] = frequents[num] ? frequents[num] + 1 : 1
  })
  return Object.entries(frequents)
    .sort(([$, a], [$$, b]) => b - a)
    .map(([key, _]) => Number(key))
    .slice(0, k)
}
