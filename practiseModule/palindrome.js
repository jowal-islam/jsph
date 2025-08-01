
const word = 'madam';
const reversed = word.split('').reverse().join("");
//   console.log(reversed);
if(word === reversed){
    console.log('palindrome');
} else{
    console.log('not palindrome');
}