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
