// Using a frequency counter in str2FrequencyCount to reduce complexity.
// Performance is: O(n)
export function validAnagram(str1: string, str2: string) {
  if (str1.length !== str2.length) return false;

  const str2FrequencyCount = {};

  for (let char of str2) {
    const item = str2FrequencyCount[char];

    str2FrequencyCount[char] = item ? item + 1 : 1;
  }

  for (let char of str1) {
    const item = str2FrequencyCount[char];

    if (item) {
      str2FrequencyCount[char] = item - 1;
    } else {
      return false;
    }
  }

  return true;
}

console.log(validAnagram('aca', 'aac'));
console.log(validAnagram('eepp', 'pepe'));
console.log(validAnagram('acas', 'aac'));
