// 66. Plus One
function plusOne(digits: number[]): number[] {
  return String(BigInt(digits.join('')) + 1n)
    .split('')
    .map((n) => Number(n))
}

plusOne([1, 2, 3]) //[1,2,4]
plusOne([4, 3, 2, 1]) // [4,3,2,2]
plusOne([9]) // [1,0]
