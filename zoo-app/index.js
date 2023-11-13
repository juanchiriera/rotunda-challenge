import readlineSync from 'readline-sync'

import { Lion } from './src/model/Lion.js'
import { Tiger } from './src/model/Tiger.js'

/**
 * Function to choose an animal based on user input.
 * @returns {Animal} An instance of the chosen animal class.
 */
function chooseAnimal () {
  // Greetings message for the console.
  console.log('Wellcome to the Zoo! Please choose an animal to make it speak:')
  // Choices for the user to pick an animal.
  const choices = ['Lion', 'Tiger']
  // Request the user to choose an animal. 0 will exit the program.
  const index = readlineSync.keyInSelect(choices, 'Select your option:')

  // Return an instance of the chosen animal class.
  switch (choices[index]) {
    case 'Lion':
      return new Lion()
    case 'Tiger':
      return new Tiger()
    default:
      return null
  }
}

// Get the chosen animal
const chosenAnimal = chooseAnimal()

if (chosenAnimal) {
  // Request user input for the animal, 'exit' will end the program.
  let userInput = readlineSync.question('Now let\'s make the animal speak, type \'exit\' to quit: \n> ')

  // Make the chosen animal speak and request a new input to the user.
  while (userInput !== 'exit') {
    const result = chosenAnimal.speak(userInput)
    console.log(result)
    userInput = readlineSync.question('> ')
  }
  // Log a greetings message by the chosen animal and exit.
  console.log(chosenAnimal.speak('Greetings!'))
} else {
  console.log('Greetings!')
}
