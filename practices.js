
//practices 1:
const mult =(x, y, z) => x * y *z;
console.log(mult(2, 3, 4));

//practices-2:
const text = `
I am web developer.
I love to code.
I love to eat biriyani.`

console.log(text);

//practices 3:
const add = (x=2, y=0) => x + y;
console.log(add(5 ,5));

//practices problem 4:
/*const friend = ('aaaa', 'bbbb', 'ccc', 'dddd', 'eee') =>{
    if(friend.length % 2 == 0){
    }

}*/


//practice problem 5:

//const square = (x, y) => x*x + y*y;
//console.log(square(2, 3));

const square = (x = 0, y=0) =>{
    const s1 = x * x;
    const s2 = y * y;
    const add = s1 + s2;
    return add;
}
console.log(square(3 , 2));

//practices problem 6:

const num1 = [2, 3, 4];
const num2 = [5, 6, 7];
const number = [...num1, ...num2]
const max = Math.max(...number);
//const number =[...num2];
//num2.push(5);
console.log(number);
console.log(max);

// outer solutions: distruction kore kicu property ber kore ana
const details = {
    fristName : 'jabbar',
    lastName : 'Ali',
    age : 35,
    district : 'Noakhali'
}
const {fristName, age, ...search} = details;
console.log(details);
console.log(search);

// template String:
const a = 56;
const numbers = [ 56, 7, 8];
const person = {
    name : 'Montu Mia' 
}
const message = `Hi, ${person.name}, has a ${a} access to ${numbers[2]}`
console.log(message)