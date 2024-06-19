// 13. Roman to Integer

function romanToInt(s: string): number {
  let num = 0
  const values = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  }
  const rArray = s.split('')
  for (let i = 0; i < rArray.length; i++) {
    if (values[rArray[i]] / 5 === values[rArray[i - 1]]) {
      num += values[rArray[i]] - 2 * values[rArray[i - 1]]
    } else if (values[rArray[i]] / 10 === values[rArray[i - 1]]) {
      num += values[rArray[i]] - 2 * values[rArray[i - 1]]
    } else {
      num += values[rArray[i]]
    }
  }
  return num
}

romanToInt('III') //3
romanToInt('IV') //4
romanToInt('LVIII') //58
romanToInt('MCMXCIV') //1994

/*
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
*/
