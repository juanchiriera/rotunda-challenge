import { Animal } from './base/Animal.js';

/**
 * Lion class representing a lion animal. It will roar between words.import readlineSync from 'readline-sync'; // Adding readline-sync for user input

// Importing animal classes
import { Lion } from './src/animals/Lion';
import { Tiger } from './src/animals/Tiger';

// Function to choose an animal based on user input
function chooseAnimal() {
  const choices = ['Lion', 'Tiger'];
  const index = readlineSync.keyInSelect(choices, 'Choose an animal:');
  
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
  const userInput = readlineSync.question('Enter something for the animal to speak: ');

  // Make the chosen animal speak
  const result = chosenAnimal.speak(userInput);
  console.log(result);
} else {
  console.log('Invalid choice. Exiting.');
}

 */
export class Lion extends Animal {
    constructor() {
        super("roar");
    }
}