
// const names = ['ratul', 'saltana', 'mishkatul', ]
// console.log(names.length);
//  let mixed = [42, "hello", true, null];
// for (let i = 0; i < mixed.length; i++){
//     console.log(mixed[i]);
// }
// ......,,,,,,,,,,,,,,,,,,,,,,,,,,,
// let fruits = ['apple', "banana", 'mango',"challange"];
// // console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);
// fruits[0] = 'orange';
// fruits[3] = 'poriborton';
// console.log(fruits.length);
// console.log(fruits);


// let fruits = ['apple', 'banana'];
// fruits.push('mango');
// fruits.pop('apple');
// console.log(fruits);



// let movieList = ['johan wike', 'terminator', 'fall'];
// movieList.push('animal');
// movieList.pop();
// console.log(movieList);

// let colors = ['green', 'blue'];
// colors.unshift('red');
// let colorsRemove = colors.shift();
// console.log(colorsRemove);


// for loop of array
// let fruits = ['apple', 'banana', 'mango'];
// for(let i = 0; i < fruits.length; i++) {
//     let addFruits = fruits[i] + ['red'];
//     console.log(addFruits);
// }
// let fruits = ["apple", "banana", "mango"];

// for (let i = 0; i < 3; i++) {  // এখানে length না নিয়ে ফিক্সড সংখ্যা দিয়েছি
//   console.log(fruits[i]);
//   fruits.push("fruit" + (i + 1));  // নতুন ফ্রুট যোগ হচ্ছে
// }

// console.log(fruits);

let fruits = ["apple", "banana", "mango"];
let newFruits = [];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
  // নতুন ফ্রুট যুক্ত করলাম
  newFruits.push(fruits[i]);
  newFruits.push(fruits[i] + " juice");
}

console.log(newFruits);
