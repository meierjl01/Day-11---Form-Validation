// console.log('hi');

document.querySelector('.submit');
var input1 = document.querySelector('.first-name');
var input2 = document.querySelector('.last-name');
var input3 = document.querySelector('.email');
var input4 = document.querySelector('.country');
var input5 = document.querySelector('.bio');
var input6 = document.querySelector('.phone');
var input7 = document.querySelector('.affiliations');
var input8 = document.querySelector('.occupation');
var input9 = document.querySelector('.cat-name');
var input10 = document.querySelector('.fave-gadget');
var input11 = document.querySelector('.talent');
var input12 = document.querySelector('.fave-drink');
var input13 = document.querySelector('.power');
var input14 = document.querySelector('.weapon');
var input15 = document.querySelector('.comments');


var submit = document.querySelector('.submit');
submit.addEventListener('click', function() {
    console.log(1);
    if (input1.value === ""){
      alert('Not a valid entry');
    }
    else if (input2.value === ""){
      alert('Not a valid entry');
    }
    else if (input3.value === ""){
      alert('Not a valid entry');
    }
    else if (input4.value === ""){
      alert('Not a valid entry');
    }
    else if (input5.value === ""){
      alert('Not a valid entry');
    }
    else if (input6.value === ""){
      alert('Not a valid entry');
    }
    else if (input7.value === ""){
      alert('Not a valid entry');
    }
    else if (input8.value === ""){
      alert('Not a valid entry');
    }
    else if (input9.value === ""){
      alert('Not a valid entry');
    }
    else if (input10.value === ""){
      alert('Not a valid entry');
    }
    else if (input11.value === ""){
      alert('Not a valid entry');
    }
    else if (input12.value === ""){
      alert('Not a valid entry');
    }
    else if (input13.value === ""){
      alert('Not a valid entry');
    }
    else if (input14.value === ""){
      alert('Not a valid entry');
    }
    else if (input15.value === ""){
      alert('Not a valid entry');
    }

var completed = { };
completed.firstName =  input1.value;
completed.lastName = input2.value;
completed.email = input3.value;
completed.country = input4.value;
completed.biography = input5.value;
completed.number = input6.value;
completed.affiliations = input7.value;
completed.occupation = input8.value;
completed.catname = input9.value;
completed.gadget = input10.value;
completed.talent = input11.value;
completed.drink = input12.value;
completed.power = input13.value;
completed.weapon = input14.value;
completed.comments = input15.value;

console.log(completed);

});
