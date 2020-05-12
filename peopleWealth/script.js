//getting the DOM elements 
const main = document.getElementById( 'main' );
const addUserBtn = document.getElementById( 'add-user' );
const doubleMoneyBtn = document.getElementById( 'double-money' );
const showMillionairesBtn = document.getElementById( 'show-millionaires' );
const sortRichestBtn = document.getElementById( 'sort-richest' );
const calcWealthBtn = document.getElementById( 'calc-wealth' );


let data = [];

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

    addData( newUser );

    //a small test :)
    // const user = data.results[ 0 ];
    // const email = user.email;
    // console.log( email );
}

//double everyone money
function doubleMoney() {
    data = data.map( person => {
        return {
            ...person,
            money: person.money * 2
        };
    } );
    updateDOM();
}

//sort users by the richest
function sortByRichest() {

    data.sort( ( person, personB ) => personB.money - person.money );

    updateDOM();
}

//displaying only the millionaries
function showMillionaries() {

    data = data.filter( person => person.money > 1000000 );

    updateDOM();
}

//calculating the wealth of the users
function calcWealth() {
    const totalWealth = data.reduce( ( accumulator, person ) => ( accumulator += person.money ),0 );
    const totalWealthElement = document.createElement( 'div' );
    totalWealthElement.innerHTML = `<h3><span>Total Wealth:</span> ${ formatMoney( totalWealth ) }</h3>`;
    main.appendChild( totalWealthElement );
}

//add new obj to data arr
function addData( obj ) {
    data.push( obj );

    updateDOM();
}

//update DOM
function updateDOM( providedData = data ) {
    //cleaning main div
    main.innerHTML = '<h2><span>Person</span> Wealth</h2>';

    providedData.forEach( person => {
        const element = document.createElement( 'div' );
        element.classList.add( 'person' );
        element.innerHTML = `<span>${person.name}</span> ${formatMoney(person.money) }`;
        main.appendChild( element );
    } );
}

//format number as money
function formatMoney( number ) {
    return '€ ' + number.toFixed( 2 ).replace( /\d(?=(\d{3})+\.)/g, '$&,' );
}

//event listeners
addUserBtn.addEventListener( 'click', getRandomUser );
doubleMoneyBtn.addEventListener( 'click', doubleMoney );
sortRichestBtn.addEventListener( 'click', sortByRichest );
showMillionairesBtn.addEventListener( 'click', showMillionaries );
calcWealthBtn.addEventListener( 'click', calcWealth );