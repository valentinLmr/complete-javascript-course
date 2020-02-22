// function constructor

// let john = {
//   name: 'john',
//   yearOfBirth: 1996,
//   job: 'developer'
// };

// let Person = function(name, yearOfBirth, job) {
//   this.name = name;
//   this.yearOfBirth = yearOfBirth;
//   this.job = job;
// }

// Person.prototype.calcAge = function() {
//   this.age = 2018 - this.yearOfBirth;
// }
// Person.prototype.lastName = function(){ this.lastName = 'smith';}

// const john = new Person('john', 1996, 'developer');
// const jane = new Person('jane', 1997, 'designer');
// const marc = new Person('marc', 1998, 'student');

// console.log(john)
// john.calcAge();
// jane.calcAge();
// marc.calcAge();
// console.log(john.lastName);
// console.log(jane);
// console.log(marc);


// const personProto = {
//   calculateAge: function(){
//     console.log(2018 - this.yearOfBirth);
//   }
// }

// var john = Object.create(personProto, {
//   name: { value: 'jane'}
//   yearOfBirth: { value: '1997'}
//   job: { value: 'designer'}
// });


// const years = [1990, 1965, 1996, 2004, 2000];

// const arrayCalc = (arr, fn) => {
//   let arrRes = [];
//   for ( i = 0; i < arr.length; i++){
//     arrRes.push(fn(arr[i]));
//   }
//   return arrRes;
// }

// const calcAge = (element) => {
//   return 2016 - element ;
// }

// const isFullAge = (element) => {
//   return element > 18;
// }


// const ages = arrayCalc(years, calcAge);
// const fullAge = arrayCalc(ages, isFullAge)

// console.log(ages);
// console.log(fullAge);


// function interviewQuestion(job) {
//   return function(name){
//     if(job === 'designer') {
//       console.log('hello' + name)
//     }else if(job === 'teacher'){
//       'hello' + name
//     }else{
//       'hello' + name
//     }
//   }
// }

// var teacherQuestion = interviewQuestion('teacher')('john');
// var teacherQuestion = interviewQuestion('designer');
// var teacherQuestion = interviewQuestion('other');



const years = [1990, 1965, 1996, 2004, 2000];

const arrayCalc = (arr, fn) => {
  let arrRes = [];
  for ( i = 0; i < arr.length; i++){
    arrRes.push(fn(arr[i]));
  }
  return arrRes;
}

const calcAge = (element) => {
  return 2016 - element ;
}

const isFullAge = (limit, element) => {
  return element > limit;
}


const ages = arrayCalc(years, calcAge);
const fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));

console.log(ages);
console.log(fullJapan);

