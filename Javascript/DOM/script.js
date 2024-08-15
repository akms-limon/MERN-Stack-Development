// single selectors

//1. getElementById

// const test = document.getElementById('limon');
// console.log(test); 

// const allh1 = document.getElementsByTagName('h1');
// console.log(allh1);


// button events

//1. Mouse down:

const mLeave = document.querySelector('.mLeave');
const mOver = document.querySelector('.mOver');
const mEnter = document.querySelector('.mEnter');
const mUp = document.querySelector('.mUp');
const mMove = document.querySelector('.mMove');
const mClick = document.querySelector('.mClick');
const mDoubleclick = document.querySelector('.mDoubleclick');
const mWheel = document.querySelector('.mWheel');
const mDown = document.querySelector('.mDown');
const msg = document.querySelector('.msg');

mLeave.addEventListener('mouseleave', function(event){
    msg.innerHTML = 'Mouse Leave'; // when the mouse is left the button
});

mUp.addEventListener('mouseup', (event)=>{ // fist parametere is the event and the second parametere is the call back function what to do in that event time
    msg.innerHTML = "Mouse Up"; // after clicking the mouse when you release the mouse button then the event is happen.
});

mEnter.addEventListener('mouseenter', (event)=>{
    console.log(event);
    if (event.type == "mouseenter") {
        console.log('YAAAAH!!!!!!!!! it is mouse enter event');
    }
    msg.innerHTML = "Entered the mouse";
})

mMove.addEventListener('mousemove', event => {
    msg.innerHTML = 'You are moving the mouse';
});




// Keyboard events

const h1 = document.querySelector('h2');

document.body.addEventListener('keydown', event => {
    h1.innerHTML = `you are entering the key ${event.key}`;
});


// Handle Forms

const pName = document.querySelector('.pName');
const pPrice = document.querySelector('.pPrice');
const pDesc = document.querySelector('.pDesc');
const pQty = document.querySelector('.pQty');
const category = document.querySelector('.category');
const mgsforform = document.querySelector('.mgsforform');
const form = document.querySelector('form');

//event types
//1. onChange
//2. onSubmit
//3. onReset
//4. onFocus
//5. onBlur

//onchange
pName.onchange = function(event) {
    console.log("Onchange has been occured");
};

//onsubmit
form.onsubmit = function(event) {
    // prevent the default behaviour of the form for submit button
    event.preventDefault();
    console.log('form submited');
    
    // gets the value from the input fields
    const name = pName.value;
    const price = pPrice.value;
    const description = pDesc.value;
    const qty = pQty.value;
    const cat = category.value;

    form.onreset = function(event) {
        event.preventDefault();
        console.log("from has been reset");
    
        pName.value = "";
        pDesc.value = "";
        pPrice.value = "";
        pQty.value = "";
        category.value = "";
    }

    console.log({name, price, description, qty, cat});
}

//onfocus

pName.onfocus = function(){
    mgsforform.innerHTML = 'You are typing';
}

pName.onblur = function() {
    mgsforform.innerHTML = 'You are stoped typing';
}