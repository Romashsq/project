//splice
const array = ['я','сосу','большой','хуй']

let cuted = array.splice(0,4, 'I', 'am', 'fucking', 'pussy')
console.log(array)
console.log(cuted)

//slice

let arrSlice = [1,2,3,4,5,6,7,8,9,0]

arrSlice.slice(2,5)
console.log(arrSlice.slice(2, 5))

//concat

let arr = [1, 2];

// создать массив из: arr и [3,4]
let newArr = ( arr.concat([3, 4]) ); // 1,2,3,4
console.log(newArr)

// создать массив из: arr и [3,4] и [5,6]
let newArr2 = ( arr.concat([3, 4], [5,6]) ); // 1,2,3,4
console.log(newArr2)

let newArr3 = ( newArr2.concat([7, 8]) ); // 1,2,3,4
console.log(newArr3)
let arr4 = [1, 2];

let arrayLike = {
  0: "что-то",
  1: "ещё",
  [Symbol.isConcatSpreadable]: true,
  length: 2
};

console.log( arr4.concat(arrayLike) );

let users1 = [
  { name: "Рома", age: 17 },
  { name: "Анна", age: 18 }
];

let users2 = [
  { name: "Игорь", age: 20 },
  { name: "Лена", age: 19 }
];

// concat создаёт новый массив, объединяя два массива
let allUsers = users1.concat(users2);
console.log(allUsers)

const penis = ["Бильбо", "Гэндальф", "Назгул"]

penis.forEach((item, index, array) => {
  console.log(`У ${item} индекс ${index} в ${array}`);
});