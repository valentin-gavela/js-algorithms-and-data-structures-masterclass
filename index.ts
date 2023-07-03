import { countUniqueValues } from './countUniqueValues';
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
