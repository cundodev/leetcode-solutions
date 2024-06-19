// 9. Palindrome Number

function isPalindrome(x: number): boolean {
  return String(x).split('').reverse().join('') === String(x)
}

isPalindrome(121) //true
isPalindrome(-121) //false
isPalindrome(10) //false
