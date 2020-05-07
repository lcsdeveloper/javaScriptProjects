//getting the DOM elements 
const main = document.getElementById( 'main' );
const addUserBtn = document.getElementById( 'add-user' );
const doubleMoneyBtn = document.getElementById( 'double-money' );
const showMillionairesBtn = document.getElementById( 'show-miollionaries' );
const sortRichestBtn = document.getElementById( 'sort-richest' );
const calcWealthBtn = document.getElementById( 'calc-wealth' );


let data = [];

getRandomUser();

// fetch random user and add money
async function getRandomUser() {
    //accesing the api
    const res = await fetch( 'https://randomuser.me/api' );

    //grabing the data and putting into a const DATA
    const data = await res.json();

    //grabbing the data results part
    const user = data.results[ 0 ];

    //creating a new user with only name and surname from the DATA>RESULTS>USER,
    //than creating a random number up a million
    const newUser = {
        name: `${user.name.first} ${user.name.last}`,
        money: Math.floor( Math.random() * 1000000 )
    };
    
    addData(newUser);

    //a small test :)
    // const user = data.results[ 0 ];
    // const email = user.email;
    // console.log( email );
}

//add new obj to data arr
function addData(obj){
    data.push(obj);
}