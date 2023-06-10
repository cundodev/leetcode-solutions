export const firstPalindrome = (words) => {
  const palindromic = words.find(
    (word) => word === [...word].reverse().join("")
  );
  return palindromic || "";
};
