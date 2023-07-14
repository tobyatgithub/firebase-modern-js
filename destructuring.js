

const dog = {
    name: 'fido',
    age: 4,
    bark() {
        console.log('woof');
    }
}

// // method 1
// const name = dog.name;
// const age = dog.age;

// // method 2
// const { name, age } = dog;
// console.log(name);
// console.log(age);

// method 2.5
const { name: fullname, age} = dog; // here we change name to fullname
console.log(fullname);
console.log(age);


const arr = ['foo', 'bar', 'baz'];
const [a,,c] = arr; // position matters
console.log(a);
console.log(c);