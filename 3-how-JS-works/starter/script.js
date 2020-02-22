///////////////////////////////////////
// Lecture: Hoisting
calculAge(1996);

function calculAge(year) {
  console.log(2020 - year);
}



const retirement = (year) => {
  console.log(65 - (2020 - year ));
}

retirement(1956)



///////////////////////////////////////
// Lecture: Scoping


// First scoping example

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}
*/



// Example to show the differece between execution stack and scope chain


var a = 'Hello!';
first();

function() {
    var b = 'Hi!';
    second();
    function() {
        var c = 'Hey!';
        third()
    }
    function() {
    var d = 'John';
    }
    console.log(a + b + c + d);
}






///////////////////////////////////////
// Lecture: The this keyword









