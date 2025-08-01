
let sentence = "ami bangladesher manush ke onek bhalobashi";
let words = sentence.split(" ");
let longest = "";
let index = -1;
for(let i = 0; i < words.length; i++){
    if(words[i].length > longest.length){
        longest = words[i];
        index = i;
    }
}
let result = longest
console.log(`${result} ache index number: ${index}`);