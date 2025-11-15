

// let arr = [
//     {},
//     123,
//     "",
//     [],
//     Boolean,
//     null, 
//     function sayhi(){},

// ]
// arr.pop(arr.at(-1))
// arr.push(["хуй",123, function(){}])
// arr.at(-1).pop(function sayhi(){})
// console.log(arr)


// let fruits = []; // создаём массив

// fruits[99999] = 5; // создаём свойство с индексом, намного превышающим длину массива

// fruits.age = 25;
// fruits.name = "ухуй"
// console.log(fruits)


// let fruits23 = [];
// fruits23[100] = 100; 

// function makeFullBreaks() {
//   for (let i = 0; i <= fruits23.length - 1; i++) {
//     if (fruits23[i] === undefined) {
//       fruits23[i] = i; 
//     }
//   }
// }

// makeFullBreaks();
// console.log(fruits23);

// makeFullBreaks()
// console.log(fruits23)


// let arr2 = [
//     {},
//     123,
//     "",
//     [],
//     Boolean,
//     null, 
//     function sayhi(){},

// ]

// arr2.push("word")
// console.log(arr2)
// arr2.shift()
// console.log(arr2)


// const arrr = ["Джаз", "Бар"]

// arrr.push("Рок н рол")
// arrr[1] = "Классика"
// console.log(arrr.shift(arrr[0]))

// arrr.unshift("Рэп", "{Eq")
// console.log(arrr)

let nums = []
function sumInput() {
    
    while(true){
        let asking = prompt("Введи значение")
        
        if(asking === null || asking.trim() === "" || isNaN(asking)){
            alert("Пошел нахуй")
            break
        } 

        let makenum = +asking
        nums.push(makenum);
        let confrim = confirm(`"Хочешь продолжить вводить?" ТЫ ввел ${makenum}`)

        if(!confrim){
            alert(`Ваши значения ${nums}`)
            break
        }
    }

}

sumInput()