// Object dalam Spread Operator

const obj1 = { name: 'MamenHD' };
const obj2 = { lastName: 'Indonesia', Hobi: 'Ngoding' };
const newObj = { ...obj1, ...obj2 };
console.log(newObj); // Output: { name: 'MamenHD', lastName: 'Indonesia', Hobi: 'Ngoding' }
