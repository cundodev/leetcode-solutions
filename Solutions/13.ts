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
  for (let i = 0; i < s.length; i++) {
    if (values[s[i]] / 5 === values[s[i - 1]]) {
      num += values[s[i]] - 2 * values[s[i - 1]]
    } else if (values[s[i]] / 10 === values[s[i - 1]]) {
      num += values[s[i]] - 2 * values[s[i - 1]]
    } else {
      num += values[s[i]]
    }
  }
  return num
}

function romanToInt2(s: string): number {
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
  for (let i = 0; i < s.length; i++) {
    const isDivByFive = values[s[i]] / 5 === values[s[i - 1]]
    const isDivByTen = values[s[i]] / 10 === values[s[i - 1]]
    const result = values[s[i]] - 2 * values[s[i - 1]]

    if (isDivByFive) {
      num += result
    } else if (isDivByTen) {
      num += result
    } else {
      num += values[s[i]]
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
