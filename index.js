/* problem 1 */
const people = [
    { name: "Alice", age: 28, gender: "female" },
    { name: "Bob", age: 34, gender: "male" },
    { name: "Charlie", age: 22, gender: "male" },
    { name: "Diana", age: 30, gender: "female" },
    { name: "Eve", age: 25, gender: "female" },
    { name: "Frank", age: 40, gender: "male" }
  ];
  
  function getMaleNames(people) {
    return people
      .filter(person => person.gender === "male")
      .map(person => person.name);
  }
  
  const maleNames = getMaleNames(people);
  console.log(maleNames); // Output: [ 'Bob', 'Charlie', 'Frank' ]


  /* problem 2 */

  const books = [
    { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
    { title: "1984", author: "George Orwell", year: 1949 },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
    { title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951 },
    { title: "Moby Dick", author: "Herman Melville", year: 1851 }
  ];
  
  function getBookTitles(books) {
    return books.map(book => book.title);
  }
  
  const bookTitles = getBookTitles(books);
  console.log(bookTitles); 
  // Output: [ 'To Kill a Mockingbird', '1984', 'The Great Gatsby', 'The Catcher in the Rye', 'Moby Dick' ]


  //problem 3


const square = (num) => num * num;
const double = (num) => num * 2;
const addFive = (num) => num + 5;
const composeFunctions = (num) => addFive(double(square(num)));
const result = composeFunctions(3);
console.log(result); // Output: 23


//problem-4

const cars = [
  { make: "Toyota", model: "Camry", year: 2019 },
  { make: "Honda", model: "Civic", year: 2016 },
  { make: "Ford", model: "Mustang", year: 2020 },
  { make: "Chevrolet", model: "Impala", year: 2018 },
  { make: "Tesla", model: "Model S", year: 2021 }
];

function sortCarsByYear(cars) {
  return cars.sort((a, b) => a.year - b.year);
}

const sortedCars = sortCarsByYear(cars);
console.log(sortedCars);


// problem 5

const peoples = [
  { name: "Alice", age: 28 },
  { name: "Bob", age: 34 },
  { name: "Charlie", age: 22 },
  { name: "Diana", age: 30 }
];

function updatePersonAge(people, name, newAge) {
  const person = peoples.find(person => person.name === name);
  if (person) {
    person.age = newAge;
  }
  return people;
}

const updatedPeople = updatePersonAge(peoples, "Charlie", 25);
console.log(updatedPeople); 

/* 
[
  { name: "Alice", age: 28 },
  { name: "Bob", age: 34 },
  { name: "Charlie", age: 25 }, ***
  { name: "Diana", age: 30 }
];

*/


  