/**Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits. */

function sameFrequency(num1: number, num2: number) {
  if (num1.toString().length !== num2.toString.length) {
    return false;
  }
}

sameFrequency(182, 281); // true
sameFrequency(34, 14); // false
sameFrequency(3589578, 5879385); // true
sameFrequency(22, 222); // false
