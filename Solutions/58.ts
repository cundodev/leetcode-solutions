// 58. Length of Last Word

function lengthOfLastWord(s: string): number {
  return s.trim().split(' ').at(-1)?.length || 0
}

lengthOfLastWord('Hello World') //"World" -> 5
lengthOfLastWord('   fly me   to   the moon  ') //"moon" -> 4
