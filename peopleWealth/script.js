//getting the DOM elements 
const main = document.getElementById( 'main' );
const addUserBtn = document.getElementById( 'add-user' );
const doubleMoneyBtn = document.getElementById( 'double-money' );
const showMillionairesBtn = document.getElementById( 'show-miollionaries' );
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
function doubleMoney(){
    data = data.map(person => {
        return {...person, money: person.money *2};
    });
    updateDOM();
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

doubleMoneyBtn.addEventListener( 'click',doubleMoney );