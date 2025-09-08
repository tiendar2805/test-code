// Array
var language = [
    'java',
    'PHP',
    'Ruby'
];
var language2 = language.slice();
language2.push('Dark')

console.log(language);
console.log(language2);

//Object
const myInfo = {
    name: 'Dat',
    age: 20,
    address: 'HN'
};
const myInfo2 = {...myInfo};
 myInfo2.address = 'ND';

console.log(myInfo);
console.log(myInfo2);
