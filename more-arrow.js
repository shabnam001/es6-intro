const difference = (x, y) => x - y;
const multipy = (x, y, z) => x* y * z;

console.log(difference(10, 2));
console.log(multipy(2, 3, 2));

//single perameter
const getAge = (person) => person.age;
const student = {name: 'Shanta', age:33};
console.log(getAge(student));

const getFourth = number => number[3];
const fourth = getFourth([1 , 2 ,3, 4, 7, 8, 9]);
console.log(fourth);

//no perameter
const getPi = () => Math.PI;
console.log(getPi());

const doMath =(x, y, z) => {
    const add = x + y + z;
    const mult = x * y * z;
    const result = add + mult;
    return result;
}
console.log(doMath(2, 3, 5));


