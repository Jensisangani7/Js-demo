// const tinderUser = new Object()

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email : "abc@gmail.com",
    fullName: {
        userFullName: {
            firstName: "Jensi",
            lastName: "Sangani"
        }
    }
}

// console.log(regularUser.fullName.userFullName.firstName);

// how to marge two objects
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
// const obj3 = {obj1, obj2} 
// const obj3 = Object.assign({}, obj1, obj2)
const obj3 = {...obj1, ...obj2}
// console.log(obj3);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course = {
    coursename: "Js",
    price: "999",
    courseInstructor: "abc"
}
// course.courseInstructor


const {courseInstructor: instructor} = course
// console.log(courseInstructor);
console.log(instructor);

// .....json format....

// 

[
    {},
    {},
    {}
]