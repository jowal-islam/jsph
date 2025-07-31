
let sentence = 'ami bangla gan valobashi, bangla language amr gorbo, bangla amr pran';
let word = sentence.split(" ");
let count = 0;

// for (let char of word){
//     if(char == "bangla"){
//         count++;
//     }
// }
// console.log(count);

for (let i = 0; i < word.length; i++){
    if(word[i] === 'bangla'){
        count ++;
    }
   
}
console.log(count);