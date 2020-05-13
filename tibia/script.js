const formExperience = document.getElementById( 'form-experience' );
const level = document.getElementById( 'level' );
const experience = document.getElementById( 'experience' );
const newLevel = document.getElementById( 'new-level' );
const newExperience = document.getElementById( 'new-experience' );
const levelsTable = [ {
        level: 50,
        experience: 1.847300
    },
    {
        level: 51,
        experience: 1.965000
    },
    {
        level: 52,
        experience: 2.087600
    },
    {
        level: 53,
        experience: 2.215200
    },
    {
        level: 54,
        experience: 2.347900
    },
    {
        level: 55,
        experience: 2.485800
    },
    {
        level: 56,
        experience: 2.629000
    },
    {
        level: 57,
        experience: 2.777600
    },
    {
        level: 58,
        experience: 2.931700
    },
    {
        level: 59,
        experience: 3.091400
    },
    {
        level: 60,
        experience: 3.256800
    },
];

function cheakLevel( level, newLevel ) {

    if ( level >= 50 && level <= 60 && newLevel >= 50 && newLevel <= 60 ) {
        levelsTable.map( obj => {
            if ( obj.level == level )
                experience.value = obj.experience;

            if ( obj.level == newLevel )
                newExperience.value = obj.experience;

        } );
    }
}

formExperience.addEventListener( 'submit', function ( e ) {
    e.preventDefault();

    if ( level.value && newLevel.value != null )
        cheakLevel( level.value, newLevel.value );
    else
        alert( "you have to insert the level and new level numbers" );
} );