//js умови , цикли
//1)
const number = prompt("What number?");
if(number === 10)  {
    console.log("Вірно");
}  else {
    console.log("Невірно");
}

  //2) 

const test = true;
if (test) {
        console.log('true');
} else {
        console.log('false');
}

//js. functions
//0)
   function isWorkingAgePerson(number) {
    if (number>= 16 && number<=65)  {
        return true; 
    } else  {
    return false
}
   }
   let age = isWorkingAgePerson(20);
   console.log('isWorkingAgePerson :>> ', isWorkingAgePerson);
   

//2)
function checkMultiplicity (first , second ) {
    return (first % second)
}
console.log(checkMultiplicity(25, 5))// true
console.log(checkMultiplicity(15, 3))// true
console.log(checkMultiplicity(15, 5))// true
console.log(checkMultiplicity(15, 4))/ false





//js.object
//1)
let customer = {
    firstName: 'Vasia',
    lastName: 'Ivanov',
    email: 'IvanovVasia@gmai.com',
    password: '1234567890',
    numberTelephone: '+380638949123',
    adress: {
        city: Odesa,
        strit: Odeska,
        number: 23,   
}
}
console.log(customer);
customer.numberTelephone ='+380638900000';
customer.isMale[male]= true,
customer.isMale[female]= false,
delete customer. adress;
let customer = {...customer1};
console.log('custome :>> ', custome);
console.log(custome===custome1);

//2)
const cat = {
    name: 'Murka',
    color: 'black',
    isMale: false,
    isFurnitureDemage: true,
}
for (const key in cat) {
    console.log(key, cat [key]);
}
//3
function book (author, name,  yearOfPublication, city, price ) {
    this.author = author;
    this.name = name;
    this.yearOfPublication= yearOfPublication;
    this.city = city;
    this.price = price;
}
const book1 = newBook ('HellElrod', 'magicMorning','2021', 'USA', '60' );
console.log('book1 :>> ', book1);









   