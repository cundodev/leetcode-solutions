// 7. Reverse Integer
const reverse = function (x) {
  if (x < Math.pow(-2, 31) || x > Math.pow(2, 31) - 1) return 0
  const rev = parseFloat(x.toString().split('').reverse().join('')) * Math.sign(x)
  if (rev < Math.pow(-2, 31) || rev > Math.pow(2, 31) - 1) return 0
  return rev
}

reverse(123) // 321
reverse(-123) // -321
reverse(120) // 21
reverse(1534236469) // 0
