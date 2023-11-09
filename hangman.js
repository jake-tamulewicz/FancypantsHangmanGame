/* Movies */
let movies = [
	'The Shawshank Redemption',
	'School of Rock',
	'Forrest Gump',
	'Remember the Titans',
	'Saving Private Ryan',
	'The Dark Knight',
	'The Godfather',
	'Pulp Fiction',
	'Inception',
	'Fight Club',
	'Goodfellas',
	'Interstellar',
	'Life Is Beautiful',
	'American History X',
	'Toy Story',
	'Back to the Future',
	'Raiders of the Lost Ark',
	'Rear Window',
	'Django Unchained',
	'Once Upon a Time in the West',
	'The Shining',
	'Inglourious Basterds',
	'Good Will Hunting',
	'Reservoir Dogs',
	'For a Few Dollars More',
	'To Kill a Mockingbird',
	'Citizen Kane',
	'The Sound of Music',
	'Inside Out',
	'Up',
	'The Wolf of Wall Street',
	'V for Vendetta',
	'Batman Begins',
	'A Beautiful Mind',
	'Nacho Libre',
	'Napoleon Dynamite',
	'Indiana Jones and the Last Crusade',
	'Die Hard',
	'The Hangover',
	'The Shack',
	'The Great Escape',
	'A Quiet Place',
	'Billy Madison',
	'Happy Gilmore',
	'Tommy Boy',
	'The Bridge on the River Kwai',
	'Gone with the Wind',
	'Logan',
	'Hacksaw Ridge',
	'Gone Girl',
	'Guardians of the Galaxy',
	'Gran Torino',
	'Shutter Island',
	'How to Train Your Dragon',
	'Hotel Rwanda',
	'Finding Nemo',
	'The Sixth Sense',
	'The Truman Show',
	'Fargo',
	'Jurassic Park',
	'Dead Poets Society',
	'Stand And Deliver',
	'Stand by Me',
	'The Sandlot',
	'Rocky',
	'Pale Rider',
	'Groundhog Day',
	'The Room',
	'Mean Girls',
	'The Boondock Saints',
	'Black Hawk Down',
	'Dunkirk',
	'Lone Survivor',
	'Letters from Iwo Jima',
	'Flags of Our Fathers',
	'Apocalypse Now',
	'Full Metal Jacket',
	'The Notebook',
	'Pride and Prejudice',
	'Pearl Harbor',
	'The Dirty Dozen',
	'We Were Soldiers',
	'A Walk to Remember',
	'Silver Linings Playbook',
	'The Holiday',
	'Hitch',
	'Pretty Woman',
	'Clueless',
	'Sleepless in Seattle',
	'The Wedding Singer',
	'Sweet Home Alabama',
	'What Women Want',
	'Jerry Maguire',
	'Hidden Figures',
	'The Social Network',
	'Lincoln',
	'The Green Mile',
	'Titanic',
	'Cast Away',
	'Big',
	'Sully',
	'Captain Phillips',
	'Catch Me If You Can',
	'The Polar Express',
	'How the Grinch Stole Christmas',
	'Yes Man',
	'The Cable Guy',
	'Dumb and Dumber',
	'Liar Liar',
	'The Mask',
	'Bruce Almighty',
	'Black Panther',
	'Captain Marvel',
	'Venom',
	'Deadpool',
	'The Avengers',
	'Iron Man',
	'Thor',
	'The Incredibles',
	'Robin Hood',
	'Bee Movie',
	'Aladdin',
	'The Wizard of Oz',
	'It',
	'Bohemian Rhapsody',
	'The Hateful Eight',
	'Top Gun',
	'Suicide Squad',
	'Zombieland',
	'Jackie Brown',
	'The English Patient',
	'No Country for Old Men',
	'Reign Over Me',
	'Gladiator',
	'Chariots of Fire',
	'Slumdog Millionaire',
	'Lawrence of Arabia',
	'Patton',
	'Green Book',
	'Psycho',
	'Vertigo',
	'Taken',
	'Cold Pursuit',
	'The Grey',
	'Gangs of New York',
	'The Lego Movie',
	'War Room',
	'Silence',
	'Fireproof',
	'The Passion of the Christ',
	'Facing the Giants',
	'The Prince of Egypt',
	'Joshua',
	'Get Out',
	'Seven',
	'The Sixth Sense',
	'The Prestige',
	'Jaws',
	'Basic Instinct',
	'Unbreakable',
	'Glass',
	'Split',
	'Scream',
	'The Fugitive',
	'The Conjuring',
	'Sinister',
	'Insidious',
	'The Blair Witch Project',
	'The Grudge',
	'Blazing Saddles',
	'Superbad',
	'Hot Fuzz',
	'Tropic Thunder',
	'Old School',
	'Office Space',
	'Caddyshack',
	'Stripes',
	'Animal House',
	'The Jerk',
	'Raising Arizona',
	'Paid in Full'
];


// Game Images
const hangmanImages = [
    "img0.png",
    "img1.png",
    "img2.png",
    "img3.png",
    "img4.png",
    "img5.png",
    "img6.png",
    "img7.png",
    "img8.png",
    "img9.png",
];

function getHangmanImageSrc(incorrectGuesses) {
    return hangmanImages[Math.min(incorrectGuesses, hangmanImages.length - 1)];
}

// Game Function
function Game() {
    let word = movies[Math.floor(Math.random() * movies.length)].toUpperCase();
    let guessedLetters = [];
    let maskedWord = word.replace(/[^ ]/g, "_");
    let incorrectGuesses = 0;
    let possibleGuesses = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let won = false;
    let lost = false;
    const maxGuesses = 7;

    function guessWord(guessedWord) {
        guessedWord = guessedWord.toUpperCase();
        if (guessedWord === word) {
            guessAllLetters();
        } else {
            handleIncorrectGuess();
        }
    }

    function guessAllLetters() {
        for (let i = 0; i < word.length; i++) {
            guess(word.charAt(i));
        }
    }

    function guess(letter) {
        letter = letter.toUpperCase();
        if (!guessedLetters.includes(letter)) {
            guessedLetters.push(letter);
            possibleGuesses = possibleGuesses.replace(letter, "");
            if (word.includes(letter)) {
                for (let i = 0; i < word.length; i++) {
                    if (word.charAt(i) === letter) {
                        maskedWord = replace(maskedWord, i, letter);
                    }
                }
                won = maskedWord === word;
            } else {
                handleIncorrectGuess();
            }
        }
    }

    function handleIncorrectGuess() {
        incorrectGuesses++;
        lost = incorrectGuesses >= maxGuesses;
        if (lost) {
            guessAllLetters();
        }
    }

    return {
        getWord: () => word,
        getMaskedWord: () => maskedWord,
        guess: guess,
        getPossibleGuesses: () => [...possibleGuesses],
        getIncorrectGuesses: () => incorrectGuesses,
        guessWord: guessWord,
        isWon: () => won,
        isLost: () => lost,
    };
}

function replace(value, index, replacement) {
    return value.substr(0, index) + replacement + value.substr(index + replacement.length);
}

function listenForInput(game) {
    document.addEventListener('keydown', (event) => {
        let letter = String.fromCharCode(event.keyCode);
        if (event.keyCode >= 65 && event.keyCode <= 90 && !game.isWon() && !game.isLost()) {
            game.guess(letter);
            render(game);
        }
    });

    document.body.addEventListener('click', (event) => {
        if (event.target.classList.contains('guess') && !game.isWon() && !game.isLost()) {
            game.guess(event.target.textContent);
            render(game);
        }
    });
}

function render(game) {
    document.getElementById("word").innerHTML = game.getMaskedWord();
    document.getElementById("guesses").innerHTML = game.getPossibleGuesses().map(guess =>
        `<span class='guess'>${guess}</span>`
    ).join('');

    document.getElementById("hangmanImage").src = getHangmanImageSrc(game.getIncorrectGuesses());

    let guessBox = document.getElementById('guessBox');
    if (game.isWon()) {
        guessBox.value = "You Won!";
        guessBox.classList = "win";
    } else if (game.isLost()) {
        guessBox.value = "You Lost!";
        guessBox.classList = "loss";
    } else {
        guessBox.value = "";
        guessBox.classList = "";
    }
}

function newGame() {
    window.location.reload();
}

// Initialize the game
let game = new Game();
render(game);
listenForInput(game);