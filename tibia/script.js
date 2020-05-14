const formExperience = document.getElementById( 'form-experience' );
const level = document.getElementById( 'level' );
const experience = document.getElementById( 'experience' );
const newLevel = document.getElementById( 'new-level' );
const newExperience = document.getElementById( 'new-experience' );
const levelsTable = [ {
        level: 50,
        experience: 1847300
    },
    {
        level: 51,
        experience: 1965000
    },
    {
        level: 52,
        experience: 2087600
    },
    {
        level: 53,
        experience: 2215200
    },
    {
        level: 54,
        experience: 2347900
    },
    {
        level: 55,
        experience: 2485800
    },
    {
        level: 56,
        experience: 2629000
    },
    {
        level: 57,
        experience: 2777600
    },
    {
        level: 58,
        experience: 2931700
    },
    {
        level: 59,
        experience: 3091400
    },
    {
        level: 60,
        experience: 3256800
    },
];

function cheakLevel( level, newLevel ) {

    levelsTable.map( obj => {
        if ( obj.level == level )
            experience.value = obj.experience;

        if ( obj.level == newLevel )
            newExperience.value = obj.experience;

    } );
}

function cheakInput() {

    if ( level.value && newLevel.value != null ) {
        if ( level.value >= 50 && level.value <= 60 && newLevel.value >= 50 && newLevel.value <= 60 ) {
            cheakLevel( level.value, newLevel.value );
            const getSmall = formExperience.querySelectorAll( 'small' );
            getSmall.forEach( element => {
                element.className = '';
            } );
        } else {
            const getSmall = formExperience.querySelectorAll( 'small' );
            getSmall.forEach( element => {
                element.innerText = 'Cheack Numbers';
                element.className = 'error';
            } );
        }
    } else {
        const getSmall = formExperience.querySelectorAll( 'small' );
        getSmall.forEach( element => {
            element.innerText = 'Enter a Number';
            element.className = 'error';
        } );
    }

}

formExperience.addEventListener( 'submit', function ( e ) {
    e.preventDefault();
    cheakInput( level.value.trim(), newLevel.value.trim() );
} );