
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
let text = "ami vadg vahchi bangladesh chittagonghali";
let words = text.split(" ");

let logest = "";
let index = 0;
for (let i = 0; i < words.length; i++){
   if(logest.length < words[i].length){
      logest = words[i];
      index = i;
   }

}
console.log(logest, index);