
 // js practise of array



// const arr1 = ["Cecilie", "Lone"];
// const arr2 = ["Emil", "Tobias", "Linus"];

// const children = arr2.concat(arr1);
// console.log(children)

// const arr3 = ["Cecilie", "Lone"];
// const arr4 = ["Emil", "Tobias", "Linus"];
// const arr5 = ["Robin"];

// const children1 = arr3.concat(arr4, arr5); 
// console.log(children1);

// const arr6 = ["Cecilie", "Lone"];
// const arr7 = [1, 2, 3];

// const arr8 = arr6.concat(arr7); 
// console.log(arr8);

// problem solve 01
let nums1 = [1,2,3];
let nums2 = [2,3,4,5];
let nums3 = [5,6,7];
let assmble = nums1.concat(nums2, nums3);

// let newArray = [];
// for(let i = 0; i < assmble.length; i++){
//     if(!newArray.includes(assmble[i])){
//         newArray.push(assmble[i]);
//     }
// }
// console.log(newArray.sort((a, b)=> a - b));

// problem solve 02
let students1 = ["Rafi", "Nabil", "Sakib"];
let students2 = ["Nabil", "Sadia", "Rafi"];
let students3 = ["Sakib", "Sami", "Jewel"];
let allStudent = students1.concat(students2, students3);
let uniqicArray = [];
for(let i = 0; i < allStudent.length; i++){
    if(!uniqicArray.includes(allStudent[i])){
            uniqicArray.push(allStudent[i]);
    }
}
console.log(uniqicArray.sort((a,b)=> a.localeCompare(b)));


