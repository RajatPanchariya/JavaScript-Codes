const myArr = [0,1,2,3,4,5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1,2,3,4,6,5,8)

// console.log(myArr.length,myHeors.length,myArr2.length);

// myArr.push(6,7)
// myArr.pop()
// console.log(myArr);
// console.log(myArr2);


// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()

// console.log(myArr);
// console.log( newArr);


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log("slice",myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
console.log("splice",myn2);
console.log("C ", myArr);
