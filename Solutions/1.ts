// 1. Two Sum

function twoSum(nums: number[], target: number): number[] {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      let comp = nums[i] + nums[j]
      if (comp === target) return [i, j]
    }
  }
  return []
}

function twoSum1(nums: number[], target: number): number[] {
  const sum: { [key: number]: number } = {}
  for (let i = 0; i < nums.length; i++) {
    const pair = target - nums[i]
    if (sum[pair] !== undefined) return [i, sum[pair]]
    sum[nums[i]] = i
  }
  return []
}

function twoSum2(nums: number[], target: number): number[] {
  const sum = new Map<number, number>()
  for (let i = 0; i < nums.length; i++) {
    const pair = target - nums[i]
    if (sum.has(pair)) return [i, sum.get(pair)!]
    sum.set(nums[i], i)
  }
  return []
}

twoSum([2, 7, 11, 15], 9) //[0,1]
twoSum([3, 2, 4], 6) //[1,2]
twoSum([3, 3], 6) //[0,1]
twoSum([3, 2, 3], 6) //[0,2]
