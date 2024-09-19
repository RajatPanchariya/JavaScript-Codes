let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());

// let myCreatedDate = new Date(2004,10,5)
// let myCreatedDate = new Date(2004,10,5,1,15)
// let myCreatedDate = new Date("2004-11-5")
let myCreatedDate = new Date("11-05-2004")   //indian format
// console.log(myCreatedDate.toDateString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

// let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

const newDate = new Date();
const formattedWeekday = newDate.toLocaleString('default', { 
    weekday: "long", 
    month: "long",
});
console.log(formattedWeekday);

