// // let marks = [2, 4, 5, 7]
// //     // console.log(marks.length);
// //     // console.log(marks[3] = 3)
// //     // console.log(marks)
// //     ;


// // let heroes = ['iron-man', 'super-man', 'ant-man']

// // for (let i = 0; i < heroes.length; i++) {
// //     console.log(heroes[i]);

// // }
// // for (let hero of heroes) {
// //     console.log(hero.toUpperCase())
// //     console.log(hero.toLowerCase());

// // }


// // let heroes = ['iron-man', 'super-man', 'ant-man']
// // console.log(heroes);

// let marks = [45, 67, 45, 67, 65]
// let sum = 0;
// for (let mark of marks) {
//     // console.log(mark);
//     sum = sum + mark;

// }
// let avg = sum / marks.length;
// // console.log(avg);

// //qs. For a given array with prices of 5 item -> [250,645,300,900,50] All items have an offer of 10% OFF on them. Change the array to store final price after applying offer.
// let items = [250, 645, 300, 900, 50];
// // let i = 0;
// // for (const val of items) {
// //     let offer = val / 10;
// //     items[i] = items[i] - offer;
// // console.log(`Before amount ${val} then value after offer = ${items[i]}`);
// // }


// //using for loop
// for (let i = 0; i < items.length; i++) {
//     const offer = items[i] / 10;
//     items[i] -= offer



// }
// console.log(items);

// let foodItems = ['potato', 'rice', 'meat']   

// console.log(foodItems.toString());

let arr = [3, 4, 5, 6, 7]
arr.splice(2, 2, 101, 102)
console.log(arr);
