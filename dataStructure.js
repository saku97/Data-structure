function filterEvenNumbers(numbers) {
  const evenNum = numbers.filter(number => number %2 === 0)
  return evenNum
}
const inputNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const results = filterEvenNumbers(inputNumbers)
 //second question

let user = {
    name: "Farid",
    age: 25,
    isStudent: true,
    Email: "12guk@gmail.com",
  address: {
        street: "420 Alandra St",
        city: "Londonium",
        country: "U.S"
    }
}
let userTwo= {
  name: "Darius",
  age: 37,
  isStudent: false,
  Email : "14gul@gmail.com",
  address: {
  street: "460 Alexandra St",
  city: "Londor",
  country: "N/A"
    }
}
 let userThree= {
  name: "Snake",
  age: 31,
  isStudent: false,
  Email : "17gul@gmail.com",
  address: {
  street: "520 Alra St",
  city: "Londom",
  country: "Ireland"
 }}
function filterUsersOver30(users) {
    const usersOver30 = users.filter(user=> user.age>30)
    return usersOver30
}
const users = [user, userTwo, userThree];
const usersover30final = filterUsersOver30(users);
//console.log(usersOver30Array);


// third  question



let FruitStack = []

FruitStack.push("Banana")
FruitStack.push("Apple")
FruitStack.push("Tomato")
function peek(FruitStack){
  let positionLastElement = FruitStack.length-1
  return FruitStack[positionLastElement]
}
//console.log(peek(FruitStack))


// fourth question
let vegeQueue = []
vegeQueue.push('Peas')
vegeQueue.push('Lettuce')
vegeQueue.push('Carrot')
let firstOut = vegeQueue.shift()

function isEmpty(vegeQueue){
  return vegeQueue.length === 0
}
  function size(vegeQueue) {
    return  vegeQueue.length;
  }

//console.log(isEmpty(vegeQueue))
//console.log (size(vegeQueue))

//fifth question
function removeVowels(inString) {
  return inString.replace(/[aeiouAEIOU]/g, '');
}

const originalString = "Data Structure";
const stringWithoutVowels = removeVowels(originalString);

console.log(stringWithoutVowels);

//last question
const array1 = [1, 2, 3, 4];
const array2 = [5, 6, 7, 8];
function orgArray(array1, array2) {
  const twoArrays = [...array1, ...array2];

  const resultArray = Array.from(new Set(twoArrays));

  return resultArray;
}



const result = orgArray(array1, array2);
console.log(result); 