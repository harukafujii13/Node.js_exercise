const mySum = require("./task1.js")
const myArr = [1,2,3,4,5,6,7,8,9,10]
const result = mySum(...myArr)
console.log(result)


const mySecondArr = (arr) => {
  return arr.map((num)=>{
    return num * 2
  })
}

const myArr2 = mySecondArr(myArr)
console.log(myArr2)

const aboveavg = (arr) => {
  const avg = mySum(...arr) / myArr2.length
  return arr.filter((num)=> {
    return num > avg
  })
}

console.log(aboveavg(myArr2))

setTimeout(()=> {
  console.log("Goodbye")
},3000)

const Employee = {
  name: "Taylor",
  email:"abcdef@gnail.com",
  department:"marketing",
  startDate:"10/10/2020",
}

console.log(Employee)


const {name, email} = Employee
const Person = {name, email}
console.log(Person)




// const avg = mySecondArr / mySecondArr.length

// const aboveavg = mySecondArr.filter(function(num){
//   if(num > avg){
//     console.log(num)
//   }
// })

// console.log(aboveavg)


