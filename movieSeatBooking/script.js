/**
 * TODO: the movie localstorage when reloaded is coming wrong, needs to be fixed 
 */  

/**
 * *const a let from the DOM
 */
const container = document.querySelector( '.container' );
const seats = document.querySelectorAll( '.row .seat:not(.occupied )' );
const count = document.getElementById( 'count' );
const total = document.getElementById( 'total' );
const movieSelect = document.getElementById( 'movie' );

/**
 * *Populating the UI at the beggining 
 */
populateUI();

let ticketPrice = +movieSelect.value; //changin it for number with +

/**
 * *Save selected movie index and price
 */
function setMovieData( movieIndex, moviePrice ) {
    //sending the movie name and the price to the local storage
    //example
    //movie: the hole 
    //price: &10
    localStorage.setItem( 'selectedMovieIndex', movieIndex );
    localStorage.setItem( 'selectedMoviePrice', moviePrice );
}

/**
 * *updating the total and counting it 
*/
function updateSelectedCount() {
    const selectedSeats = document.querySelectorAll( '.row .seat.selected' );

    const seatsIndex = [ ...selectedSeats ].map( ( seat ) => [ ...seats ].indexOf( seat ) );

    //sending the seats index as an array to the local storage
    //example [0,8,5,6,15]
    localStorage.setItem( 'selectedSeats', JSON.stringify( seatsIndex ) );

    const selectedSeatsCount = selectedSeats.length;

    count.innerText = selectedSeatsCount;
    total.innerText = selectedSeatsCount * ticketPrice;
}

/**
 * *get data from the localstorage and papulate the UI
 */
function populateUI() {
    //getting back the date from the localstorage
    const selectedSeats = JSON.parse( localStorage.getItem( 'selectedSeats' ) );

    //here we loop every indice in array and give to it a class select 
    if ( selectedSeats !== null && selectedSeats.length > 0 ) {
        seats.forEach( ( seat, index ) => {
            if ( selectedSeats.indexOf( index ) > -1 ) {
                seat.classList.add( 'selected' );
            }
        } );
    }

    //here we get the movie name and price to populate the UI
    const selectedMovieIndex = localStorage.getItem( 'selectedMovieIndex' );
    if ( selectedMovieIndex !== null ) {
        movieSelect.selectedIndex = selectedMovieIndex;
    }
}

/** 
* *events listeners
* *movie select event 
*/
movieSelect.addEventListener( 'change', e => {
    ticketPrice = +e.target.value;

    setMovieData( e.target.selectedIndex, e.target.value );

    updateSelectedCount();
} );

/**
 * *seat event click
 */
container.addEventListener( 'click', e => {
    if ( e.target.classList.contains( 'seat' ) && !e.target.classList.contains( 'occupied' ) ) {
        e.target.classList.toggle( 'selected' );

        updateSelectedCount();
    }
} );

/**
 * *inicial count and total set
 */
updateSelectedCount();