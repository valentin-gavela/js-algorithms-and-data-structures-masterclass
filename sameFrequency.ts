/**Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits. */

export function sameFrequency(num1: number, num2: number) {
  let num1string = num1.toString();
  let num2string = num2.toString();

  if (num1string.length !== num2string.length) {
    return false;
  }

  const obj = {};
  for (let i = 0; i < num1string.length; i++) {
    obj[num1string[i]] = obj[num1string[i]] ? Number(num1string[i]) + 1 : 1;
  }
  console.log(obj);

  for (let i = 0; i < num2string.length; i++) {
    if (!obj[num2string[i]]) {
      return false;
    } else {
      obj[num2string] = obj[num2string] - 1;
    }
  }

  return true;
}
