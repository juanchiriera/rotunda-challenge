import readlineSync from 'readline-sync';

import { Lion } from './src/model/Lion.js';
import { Tiger } from './src/model/Tiger.js';

// Choose animal based on the user's input
function chooseAnimal() {
    console.log("Wellcome to the Zoo! Please choose an animal to make it speak:");
    const choices = ['Lion', 'Tiger'];
    const index = readlineSync.keyInSelect(choices, 'Select your option:');

    switch (choices[index]) {
        case 'Lion':
            return new Lion();
        case 'Tiger':
            return new Tiger();
        default:
            return null;
    }
}

// Get the chosen animal
const chosenAnimal = chooseAnimal();

if (chosenAnimal) {
    // Get user input for the animal to speak
    var userInput = readlineSync.question('Now let\'s make the animal speak, type \'exit\' to quit: \n> ');

    // Make the chosen animal speak 
    while (userInput != 'exit') {
        const result = chosenAnimal.speak(userInput);
        console.log(result);
        userInput = readlineSync.question('> ');
    }
    console.log(chosenAnimal.speak('Greetings!'));
} else {
    console.log('Greetings!');
}
