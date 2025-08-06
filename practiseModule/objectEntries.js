
const person = {
   
    age : 2,
    country: 1,
    bangla: 4,
};
let sort = Object.entries(person).sort((a, b)=> b[1]-a[1]);
sort.forEach(([word , count])=> {
    console.log(`${word}: ${count}`)
})

