function getPin(){
    const pin = gereatePin();
    const pinString = pin + '';
    if(pinString.length === 4){
        return pin;
    }
    else{
        return getPin;
    }
}
function gereatePin(){
    const random = Math.round(Math.random()*10000);
return random; 
}
document.getElementById('generate-pin').addEventListener('click',function(){
    const pin = getPin();
    console.log(pin);
// display pin

const displayPinField = document.getElementById('display-pin')
displayPinField.value = pin;
})
document.getElementById('calculate').addEventListener('click',function(event){
const number = event.target.innerText;
const typedNumbersField = document.getElementById('typed-numbers');
const previousTypedNumber = typedNumbersField.value;
if(isNaN(number)){
    if(number === 'C'){
        typedNumbersField.value = "";
      }
      else if(number === '<' ){
const digits = previousTypedNumber.split('');
digits.pop();
const remainingDigits = digits.join('');
typedNumbersField.value = remainingDigits;
      }
}
else{
    const newTypedNumber = previousTypedNumber + number;
    typedNumbersField.value = newTypedNumber;
}
})
document.getElementById('verify-pin').addEventListener('click',function(){
const displayPinField = document.getElementById('display-pin');
const currentPin = displayPinField.value;

const typedNumbersField =document.getElementById('typed-numbers');
const typedNumber = typedNumbersField.value;

const pinSucessMessage = document.getElementById('pin-sucess');
const pinFailurMessage = document.getElementById('pin-failur');

if(typedNumber === currentPin){

pinSucessMessage.style.display = 'block';
pinFailurMessage.style.display = 'none'
}
else{
       
        pinFailurMessage.style.display = 'block'; 
        pinSucessMessage.style.display = 'none';  }   
})