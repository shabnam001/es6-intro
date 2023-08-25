const student = {
    name: 'Shamanta',
    age: 24,
    id: 10024,
    class: 'six',
    phone: '01777544677'
}
console.log(student);
console.log(student.id);
const age = student.age;
console.log(age);
const {phone, name: Name} = student;
console.log(phone);
console.log(Name);
