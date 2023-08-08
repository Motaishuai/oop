// Object Literal
// const book1 = {
//     tittle: 'Book One',
//     author: 'Jhon Doe',
//     year: '2013',
//     getSummary: function() {
//         return `${this.tittle} was written by ${this.author} in ${this.year}`;

//     }
// };

// const book2 = {
//     tittle: 'Book two',
//     author: 'Jane Doe',
//     year: '2016',
//     getSummary: function() {
//         return `${this.tittle} was written by ${this.author} in ${this.year}`;

//     }
// };    

// console.log(book2.getSummary());

//Constructor 
// function Book(tittle, author, year) {
//     this.tittle = tittle;
//     this.author = author;
//     this.year = year;

//     // this.getSummary = function () {
//     //     return `${this.tittle} was written by ${this.author} in ${this.year}`;  
//     // }
//     // getSummary 
//     Book.prototype.getSummary = function () {
//         return `${this.tittle} was written by ${this.author} in ${this.year}`;
//     };
//     //getAge
//     Book.prototype.getAge = function () {
//         const years = new Date().getFullYear() - this.year;
//         return `${this.tittle} is ${years} years old`;
//     };
//     //Revise / Change Year
//     Book.prototype.revise = function (newYear) {
//         this.year = newYear;
//         this.revised = true;
//     }
// }

// // Instatiate an Object 
// const book1 = new Book('Book One', 'Jhon Doe', '2013');
// const book2 = new Book('Book Two', 'Jane Doe', '2016');
// console.log(book2);
// book2.revise('2023');
// console.log(book2);


//Inheritence

//Constructor 
// function Book(tittle, author, year) {
//     this.tittle = tittle;
//     this.author = author;
//     this.year = year;
// };

// // getSummary 
// Book.prototype.getSummary = function () {
//     return `${this.tittle} was written by ${this.author} in ${this.year}`;
// };

// // Magazine Constructor 
// function Magazine(tittle, author, year, month) {
// Book.call(this, tittle, author, year);

// this.month = month;
// }

// // Inherit prototype 
// Magazine.prototype = Object.create(Book.prototype);

// // Instantiate Magazine Object
// const mag1 = new Magazine('Mag One', 'Jhon Doe', '2018', 'Jan');

// //Use Magazine Constructor
// Magazine.prototype.constructor = Magazine;
// console.log(mag1);

//Object of Protos
// const bookProtos = {
//     getSummary: function () {
//         return `${this.tittle} was written by ${this.author} in ${this.year}`;   
//     },
//     getAge: function(){
//         const years = new Date().getFullYear() - this.year;
//         return `${this.tittle} is ${years} years old`;
//     }
// };

// //Creat Object
// const book1 = Object.create(bookProtos);
// book1.tittle = 'Book One';
// book1.author = 'John Doe';
// book1.year = '2013';

// console.log(book1);

//ES6

// class Book {
//     constructor(tittle, author, year) {
//         this.tittle = tittle;
//         this.author = author;
//         this.year = year;
//     }
//   getSummary(){
//     return `${this.tittle} was written by ${this.author} in ${this.year}`;
//   }

//   getAge(){
//     const years = new Date().getFullYear() - this.year;
//     return `${this.tittle} is ${years} years old`; 
//   }

//   revise(newYear){
//     this.year = newYear;
//     this.revised = true;
//   }

//   static topBookStore(){
//     return 'Barnes & Noble';
//   }

// }

// //Instantiate Object
// const book1 = new Book('Book One', 'John Doe', '2013');

// // console.log(book1);
// // book1.revise('2023');
// // console.log(book1);
// console.log(Book.topBookStore());

class Book {
    constructor(tittle, author, year) {
        this.tittle = tittle;
        this.author = author;
        this.year = year;
    }
  getSummary(){
    return `${this.tittle} was written by ${this.author} in ${this.year}`;
  }
}

//Magazine subclass
class Magazine extends Book{
constructor(tittle, author, year, month){
    super(tittle, author, year)
    this.month = month;
}
}

//Instantiate Magazine
const mag1 = new Magazine('Mag One', 'Jhon Doe', '2018', 'Jan');

console.log(mag1);