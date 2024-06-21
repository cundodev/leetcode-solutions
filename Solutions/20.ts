// 20. Valid Parentheses
function isValid(s: string): boolean {
  const matchBrackets = {
    '(': ')',
    '{': '}',
    '[': ']',
  }
  const stack: string[] = []

  for (let bracket of s) {
    if (matchBrackets[bracket]) {
      stack.push(bracket)
    } else if (stack.length === 0 || matchBrackets[stack.pop()!] !== bracket) {
      return false
    }
  }
  return stack.length === 0
}

isValid('()') //true
isValid('()[]{}') //true
isValid('{(]}') //false
