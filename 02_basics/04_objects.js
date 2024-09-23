// singleton or constructor

// const tinderUser = new Object() // singleton object
const tinderUser = {} // none singleton object
// console.log(tinderUser);

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false
// console.log(tinderUser);


const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {5: "a", 6: "b"}

// const obj4 = { obj1, obj2 }
// const obj4 = Object.assign({}, obj1, obj2, obj3)

const obj4 = {...obj1, ...obj2,...obj3}
// console.log(obj4);


const users = [
    {
        id: 1,
        email: "A@gmail.com"
    },
    {
        id: 2,
        email: "M@gmail.com"
    },
    {
        id: 3,
        email: "R@gmail.com"
    },
]

// console.log(users[1].email);
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "js in hindi",
    price: "1000",
    courseInstructor: "Rajat Panchariya"
}

// course.courseInstructor // ye wala follow nahi karenge output ke liye

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
// console.log(instructor);


// this is all a small about jyson we will get now about this in future

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

// [
//     {},
//     {},
//     {}
// ]