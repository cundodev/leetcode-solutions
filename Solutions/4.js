// 4. Median of Two Sorted Arrays
const findMedianSortedArrays = (nums1, nums2) => {
  const mergedArray = nums1.concat(nums2)
  mergedArray.sort((a, b) => a - b)
  const length = mergedArray.length

  if (length % 2 > 0) {
    const index = Math.floor(length / 2)
    return mergedArray[index]
  } else {
    return (mergedArray[length / 2 - 1] + mergedArray[length / 2]) / 2
  }
}

findMedianSortedArrays([1, 3], [2]) // 2
findMedianSortedArrays([1, 2], [3, 4]) // 2.5
findMedianSortedArrays([], [2, 3]) // 2.5
