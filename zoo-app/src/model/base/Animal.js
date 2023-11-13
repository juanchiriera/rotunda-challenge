/**
 * Base class for animals.
 * @class
 * @classdesc Represents any animal.
 * @constructor
 */
export class Animal {
  /**
     * Create an animal with a specific sound.
     * @param {string} sound - The sound the animal makes.
     */
  constructor (sound) {
    if (typeof sound !== 'string') {
      throw new Error('Invalid sound. Please provide a valid sound as a string.')
    }
    this.sound = sound
  }

  /**
     * Make the animal speak by adding its sound to the input string.
     * @param {string} input - The input text to speak.
     * @returns {string} The modified text with the animal's sound.
     */
  speak (input) {
    if (typeof input !== 'string') {
      throw new Error('Invalid input. Please provide a valid input as a string.')
    }

    try {
      const animalSound = this.sound
      return input.split(' ').map(word => `${word} ${animalSound}`).join(' ')
    } catch (error) {
      // Handle specific error related to the speak method if needed.
      throw new Error(`Failed to make the animal speak: ${error.message}`)
    }
  }
}
