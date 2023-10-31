const fruits = ['apple', 'mango', 'orange', 'pineapple']
// return boolean to check whether all fruits start with 
// vowel characters [a, e,i, o, u]

console.log(`array.every(fruits) : ${array.every(fruits)}`)

//? แบบของเพื่อนชาย

console.log(fruits.every(fruit => {
  console.log(fruit[0]);
  return ['a','e','i','o','u'].includes(fruit[0].toLowerCase())
}));

console.log(fruits.every(fruit => ['a','e','i','o','u'].includes(fruit[fruit.length-1].toLowerCase())));

// const fruits = ['apple', 'mango', 'orange', 'pineapple']

//? แบบของมิ้ง
const isStartWithVowel = fruits.every((fruit) => {

  for (vowel of ['a', 'e', 'i', 'o', 'u']) {
    if (fruit.toLowerCase().startsWith(vowel)) {
      return true
  }
}
  return false
})


console.log(isStartWithVowel)
