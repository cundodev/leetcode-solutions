function searchInsert(nums: number[], target: number): number {
  const index = nums.findIndex((n) => n >= target)
  if (index >= 0) {
    return index
  } else {
    return nums.length
  }
}

function searchInsert2(nums: number[], target: number): number {
  const index = nums.findIndex((n) => n >= target)
  return index >= 0 ? index : nums.length
}

searchInsert([1, 3, 5, 6], 5) // 2
searchInsert([1, 3, 5, 6], 2) // 1
searchInsert([1, 3, 5, 6], 7) // 4
