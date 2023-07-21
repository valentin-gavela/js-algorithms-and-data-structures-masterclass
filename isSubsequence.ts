/**
 * Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.
 */

export function isSubsequence(str1: string, str2: string) {
  let j = 0;

  for (let i = 0; i < str2.length; i++) {
    const char1 = str1[j];
    const char2 = str2[i];

    if (char1 === char2) {
      j++;
    }
  }

  if (j === str1.length) {
    return true;
  }

  return false;
}
