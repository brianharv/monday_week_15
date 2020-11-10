roman = ["I", "II","III","IV","V","VI","VII","VIII","IX","X"]
numbers = [1,2,3,4,5,6,7,8,9,10]

[["I",1],["V", 5],["X",10],["L", 50],["C", 100],["D", 500],["M", 1,000]]

const toRomanNumerals = (num) => {
  const numArray = num.toString().split("").reverse();
  return numArray;

}


Problem #1
Use a closure to create multiple functions for adding a prefix to a name. The prefix could be Doctor, Duchess, Sir, and so on.

It should be possible to create a new prefix function like this:

const prefixSir = addPrefix("Sir");

const addPrefix = (prefix) => {
  return (yourname) =>{
  return `Hello ${prefix}.${yourname}`
  }
}

prefixsir(Natalie) output p= Hello Sir.Natalie


Problem #2
Use a closure to create multiple functions for making various animal noises. For example, it should be possible to do the following:

const lionSound = soundMaker("roar");
const mouseSound = soundMaker("squeak");

const soundMaker = (animalSound) => {
  return (animal) => {
    return `The ${animal} goes ${animalSound}`
  }
}

Problem #3 (Harder)
Use closures to create multiple functions for adding both a prefix and a suffix to a name. For example, it should be possible to do the following:

const misterJunior = nameEnhancer("Mister")("Junior");
const duchessThird = nameEnhancer("Duchess")("The Third");

const nameEnhancer = (prefix) => {
  return (suffix) => {
    return (name) => {
      return `Hello, ${prefix} ${name} ${suffix}!`
    }
  }
}; 


Problem #4 (Harder)
Use closures to create multiple functions to first add to and then multiply a value. It should be possible to do the following:

const addTwoMultiplyByThree = addaMult(2)(3);
const addFiveMultiplyByNine = addaMult(5)(9);

const addaMult = (addnum) =>{
  return (multinum)=>{
    return (inputnum)=>{
      return ((inputnum + addnum) * multinum)
    }
  }
};