function mySqrt(x: number): number {
  let min = 0
  let max = x

  while (min <= max) {
    const mid = Math.floor((min + max) / 2)
    const pow = mid * mid
    pow <= x ? (min = mid + 1) : (max = mid - 1)
  }

  return max
}
