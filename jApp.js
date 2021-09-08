/* Just defined my variables*/
const states = 50;
var sum = 5 + 4;


/* Create a function*/

function sayHello(){
    alert('hello World');
}
sayHello();
 
function checkAge(name, age){ 
if(age < 21){
    alert("Sorry " + name + ", you aren't old enough to view this page!")
    }
}
checkAge('Charles', 21);
    checkAge('Abby', 27);
    checkAge('James', 18);
    checkAge('John', 17);

var vegetables = ['Broccoli', 'Squash', 'Zuchini', 'Corn', 'Cabbage', 'Greens', 'Green Beans', 'Carrots'];
vegetables.forEach(v => console.log(v));

var pet = { 
    name: 'Oreo',
     breed: ['Border Collie', 'Austrailian Shepard'] 
    };
    console.log(pet.name);
    console.log(pet.breed);

let checkAgeArray = [{name:'Quinton', age:29} , {name:'Brandon', age:28} , {name:'Kourtney',age:21}, {name:'Sierra', age:18}, {name:'Whitney', age:16}]; 
for(var c =0; c < checkAgeArray.length; c++) {
checkAge(checkAgeArray[c].name, checkAgeArray[c].age);
}

var getLength = function(word) {
if(word.length %2 == 0 ){
console.log('The World is nice and even');
} 
else {
console.log('The world is an odd place');
}
}
getLength('Hello World');