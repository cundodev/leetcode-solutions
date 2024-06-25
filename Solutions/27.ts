// 27. Remove Element
function removeElement(nums: number[], val: number): number {
  let k: number = 0

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[k] = nums[i]
      k++
    }
  }

  return k
}

removeElement([3, 2, 2, 3], 3) // 2, nums = [2,2,_,_]
removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2) // 5, nums = [0,1,4,0,3,_,_,_]
