
// let sentence = "Bangla, bangla amar Bangla? Basha; amar: Ami. bangla language";
// let senLength = sentence.length;
// console.log(senLength);
// let country = "bangladesh";
// console.log(country.slice(1,4))
// let first = "bangla";
// let last = "desh";
// console.log(first + last);
// let tex = "amr soner bangla ami tumk valo vashi";
// console.log(tex.includes("bangla"));
// let text = "ami dhaka te thaki";
// let newText = text.replace("dhaka", "chittagong");
// console.log(newText)


// let countery = "Bangladesh";
// console.log(countery.toLowerCase())

// let text = " Hello world ";
// let trim = text.trim();
// console.log(trim);
// console.log(trim.length);

// string to array convert
// 


// let sentence = "ami bangla gan valovachi , bangla amr native language , banla amr gorbo";
// let words = sentence.split(" ");
// let bigWord = "";
// for (let word of words){
//    if(bigWord.length < word.length){
//      bigWord = word;
//    }
// }
// console.log(bigWord);

// let text = 'level';
// let palin = text.split('');
// let reverse = palin.reverse().join("");
//  if(text === reverse){
//     console.log('palindreome')
//  } else {
//     console.log('not palindreome')
//  }
// let name = "levele";
// let reverse = name.split("").reverse().join("");
// if(reverse === name){
//    console.log('right');
// }else{
//    console.log('rong');
// }

// let num1 = 30;
// let num2 = 20;
// if(num1 > num2){
//    console.log(num1,'big')
//    console.log(num1, "small")
// }else {
//    console.log(num2,'big')
//    console.log(num2, "small")
// }


// let numer = 20;
// for(let i = 1; i <= numer; i++){
//    if(i % 2 === 1){
//       console.log(i, "odd");
//    }
// }

// const prompt = require('prompt-sync')();  // লাইব্রেরি ইমপোর্ট

// let input = prompt("Enter a number: ");
// input = Number(input);  // ইনপুট string হয়, তাই number বানানো লাগবে

// for(let i = 1; i <= 10; i++){
//    result = input * i;
//     console.log(`${input} * ${i} = ${result}`)
//    // console.log(input + " * " + i + " = " + result);
// }


// let numers = 5442;
// let sum = 0;
// let wordNumbers = numers.toString().split("");
// for(let i = 0; i < wordNumbers.length; i++){
//    sum = sum + Number(wordNumbers[i]);
// }
// console.log(sum);


// let number = 50;
// for(let i = 1; i <= number; i++){
//    if(i % 3 === 0){
//       console.log(i, ": Fizz");
//    }else if(i % 5 === 0){
//       console.log(i, ": Buzz")
//    }else if(i % 3 === 0 && i % 5 === 0){
//       console.log(i, "FizzBuzz")
//    }else{
//       console.log(i);
//    }
// }


let friends = ['nabil', 'kamil', 'jamil', 'sabil']
console.log(friends.sort());
  
