/**Write a fn called sumZero wich accepts a sorted array of integers. The function should find the first pair where the sum is 0.
 * Return an array that includes both values that sum to zero or undefined if pair does not exist.
 */

export function sumZero(arr: number[]) {
  // store in a lookoup obj
  // loop the arr
  // find the pair in the lookup obj
  const objNums = {};

  for (let num of arr) {
    objNums[num] = null;
  }

  for (let num of arr) {
    const counterPart = num * -1;

    if (Object.hasOwn(objNums, counterPart)) {
      return [Number(num), counterPart];
    }
  }

  return undefined;
}

export function sumZeroWithPointers(arr: number[]) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const a = arr[left];
    const b = arr[right];
    const sum = a + b;

    if (sum === 0) return [a, b];

    if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }

  return undefined;
}
