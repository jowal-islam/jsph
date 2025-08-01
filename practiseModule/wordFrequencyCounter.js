
let sentence = "ami bangla bhalobashi bangla amar basha bangla";
let words = sentence.split(' ');
 let frequency = {};
 for(let i = 0; i < words.length; i++){
    // let word = words[i];
    if(frequency[words[i]]){
        frequency[words[i]] += 1; 
    }else{
        frequency[words[i]] = 1;
    }
 }
 console.log(frequency);