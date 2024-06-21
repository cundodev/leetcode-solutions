// 14. Longest Common Prefix
function longestCommonPrefix(strs: string[]): string {
  let prefix = strs[0]
  if (strs.length === 1) return strs[0]
  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.slice(0, prefix.length - 1)
    }
  }
  return prefix
}

function longestCommonPrefix2(strs: string[]): string {
  let prefix = strs[0]
  if (strs.length === 1) return strs[0]
  for (let i = 1; i < strs.length; i++) {
    while (!strs[i].startsWith(prefix)) {
      prefix = prefix.slice(0, prefix.length - 1)
    }
  }
  return prefix
}

longestCommonPrefix(['flower', 'flow', 'flight']) //"fl"
longestCommonPrefix(['dog', 'racecar', 'car']) // ""
longestCommonPrefix(['']) //""
