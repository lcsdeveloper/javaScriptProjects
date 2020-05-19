const name = document.getElementById('name');
const email =document.getElementById('email');
const roomType =document.getElementById('room-type');
const numberGuest =document.getElementById('number-guest');
const arrivalData = document.getElementById('arrival');
const departureData = document.getElementById('departure');
const formDetails = document.getElementById('form-details');


formDetails.addEventListener('submit', e =>{
    e.preventDefault();

    const data = [name.value.trim(), email.value,roomType.value,numberGuest.value,arrivalData.value,departureData.value];
    console.log(data);
}
)