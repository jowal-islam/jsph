
let sentence = "ami bangla bangla amar bangla bhalobashi amar amar bangla";
let words = sentence.split(" ");
let frequency = {};
for (let i = 0; i < words.length; i++){
    let word = words[i];
    if(frequency[word]){
        frequency[word] = frequency[word] + 1;
    }
    else{
        frequency[word] = 1;
    }
}
let maxCount = 0;
let maxWord = "";
for(let word in frequency){
    if(frequency[word] > maxCount){
        maxCount = frequency[word];
        maxWord = word;
    }
}
console.log(`most frequent word: ${maxWord} (${maxCount} times)`)