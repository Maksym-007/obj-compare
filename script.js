

const createUser = (name, age, city, language, sex) => {
    return {
        name,
        age,
        city,
        language,
        sex,
    };
};


const getKeys = (obj1, obj2) => {
    let equivalentKeys = [];
    Object.keys(obj1).forEach(key => {
        if (obj1[key] !== obj2[key]) {
            equivalentKeys.push(key);
        }
    });
    return equivalentKeys.length;
};

const student_1 = createUser('Ivan', 20, 'Odessa', 'C++', 'male');
const student_2 = createUser('Kate', 22, 'Odessa', 'Java', 'female');

console.log(student_1, student_2);
alert(getKeys(student_1, student_2));

////////////////////////////////////////////////////////////////////////////////////////////

// const school={
//     '1stClass':{
//         A:{
//             people:25,
//         },
//         B:{
//             people:30,
//         },
//         C:{
//             people:28,
//         },
//     },
//     '2ndClass':{
//         A:{
//             people:38,
//         },
//         B:{
//             people:40,
//         },
//     },
// };



// const depth = (obj, currentDepth = 0) => {
// 	const innerDepth = (obj, counter) => {
//   	currentDepth = Math.max(currentDepth,  counter);
//     for(let key in obj) {
//     	const el = obj[key];
//     	if(el !== null && typeof el === "object") {
//       	innerDepth(el, counter+1);
//       }
//     }
//   }
  
//   innerDepth(obj, currentDepth+1);
//   return currentDepth;
// }


// console.log(depth(school));





