import { Animal } from './base/Animal.js'

/**
 * Lion class representing a lion animal.
 * @class
 * @classdesc Represents a lion, extends the Animal class.
 * @constructor
 */
export class Lion extends Animal {
  constructor () {
    // The sound of a lion is "roar".
    super('roar')
  }
}
