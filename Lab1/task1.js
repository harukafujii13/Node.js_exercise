const mySum = (...args) => {
  let sum = 0;
  for(let i = 0; i < args.length; i++){
    sum += args[i]
  }

  return sum;
}



// console.log(mySum(1,2,3));
module.exports = mySum



