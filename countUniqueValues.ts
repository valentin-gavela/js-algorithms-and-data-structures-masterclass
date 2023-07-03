/** Implement a fn called countUniqueValues, wich accepts a sorted array
 * and counts the unique values in the array. There can be negative values in the array, but it allways be sorted.
 */

export function countUniqueValues(values: number[]) {
  if (values.length === 0) return 0;
  // create a pointer which has the current number
  let i = 0;

  for (let j = 0; j < values.length; j++) {
    // compare two values.
    // if different move i to the next position,
    // and store the value of arr[j] in the arr[i]
    if (values[i] !== values[j]) {
      i++;
      values[i] = values[j];
    }
  }

  return i + 1;
}
