import { countUniqueValues } from './countUniqueValues';
import { isSubsequence } from './isSubsequence';
import { maxSubarraySum } from './masSubarraySum';
import { sameFrequency } from './sameFrequency';
import { sumZero, sumZeroWithPointers } from './sumZero';
import { validAnagram } from './validAnagram';

console.log('validAnagram');
console.log(validAnagram('aca', 'aac'));
console.log(validAnagram('eepp', 'pepe'));
console.log(validAnagram('acas', 'aac'));

console.log('sumZero');
console.log(sumZero([-10, -3, -1, -1, -1, 1, 2, 3, 4, 10]));
console.log(sumZero([-3, -1, -1, -1, 1, 2, 3, 4]));
console.log(sumZero([-1, -1, -1, 2, 3, 4]));

console.log('sumZeroWithPointers');
console.log(sumZeroWithPointers([-10, -3, -1, -1, -1, 1, 2, 3, 4, 10]));
console.log(sumZeroWithPointers([-3, -1, -1, -1, 1, 2, 3, 4]));
console.log(sumZeroWithPointers([-1, -1, -1, 2, 3, 4]));

console.log('countUniqueValues');
console.log(countUniqueValues([1, 1, 1, 1, 1, 2])); // 2)
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); // 7)
console.log(countUniqueValues([])); // 0)
console.log(countUniqueValues([-2, -1, -1, 0, 1])); // 4)

console.log('sameFrequency');
console.log(sameFrequency(182, 281)); // true
console.log(sameFrequency(34, 14)); // false
console.log(sameFrequency(3589578, 5879385)); // true
console.log(sameFrequency(22, 222)); //false

console.log('isSubsequence');
console.log(isSubsequence('hello', 'hello world')); // true
console.log(isSubsequence('sing', 'sting')); // true
console.log(isSubsequence('abc', 'abracadabra')); // true
console.log(isSubsequence('abc', 'acb')); // false (order

console.log('maxSubarraySum');
console.log(maxSubarraySum([100, 200, 300, 400], 2)); // 700
console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)); // 39
console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2)); // 5
console.log(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2)); // 5
console.log(maxSubarraySum([2, 3], 3)); // null
