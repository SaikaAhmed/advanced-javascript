const numbers = [3, 4, 5, 6];
// const output = [];

// for(let i = 0; i < numbers.length; i++){
//     const element = numbers[i];
//     const result = element * element;
//     output.push(result);
// }
// function square (element){
//     return element * element;
// }
//  const result = numbers.map(function(element){
//     // console.log(element);
//     return element * element;
// })
// const result = numbers.map(x => x * x); // arrow using 
// const bigNum = numbers.filter(x => x >5);
// console.log(bigNum);

const bigNum = numbers.find(x => x < 5);
console.log(bigNum);

//  console.log(result);