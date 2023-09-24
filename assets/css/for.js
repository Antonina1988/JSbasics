
//JS.Array
//0) Створити числовий масив та проініціалізувати його (*випадковими числами).
let numbers = [1, 3, 6, 7, 9, 10];
console.log(numbers);
//1)Видалити останній і початковий елемент з масиву, додати елемент до початку і кінця.
numbers =  numbers.slice(1, 5);
console.log(numbers);
numbers[5] = 50;
console.log(numbers);
numbers.unshift(50);
console.log(numbers);
//2 Вивести розмір масиву



//3 Зробити копію масиву
numbersCopy1 = [...numbers];
console.log(numbers);
//4 Вивести елементи з парними індексами
let evenElements = [];
for (let i = 0; i < numbers.length; i+=2) {
    evenElements.push(numbers[i]);
}
console.log(evenElements);
//5 Вивести лише парні елементи (парні числа діляться на 2 без залишку)
let evenNumbers =[];
for (let i = 0; i < numbers.length; i++) {
   if (numbers[i] % 2===0){
 evenNumbers.push(numbers[i]);
   }
}
console.log(evenNumbers);
//6 Вивести індекси нульових елементів (елемент дорівнює нулю).
evenNumbers =[];
for (let i = 0; i < numbers.length; i++) {
   if (numbers[i] ===0){
    evenNumbers.push(numbers[i]);
   }
}
console.log(evenNumbers);


// Методи перебору масивів (forEach, filter, map, findIndex, *some, *every).
//8 Отримати новий масив із заданого, який міститиме лише ненульові числа (-1, 5, 0, 9, -10 => -1, 5, 9, -10). // filter
