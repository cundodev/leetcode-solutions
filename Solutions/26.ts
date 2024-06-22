// 26. Remove Duplicates from Sorted Array

function removeDuplicates(nums: number[]): number {
  let k: number = 0

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== nums[i + 1]) {
      nums[k] = nums[i]
      k++
    }
  }

  return k
}
