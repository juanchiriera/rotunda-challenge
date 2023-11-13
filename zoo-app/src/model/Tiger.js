import { Animal } from './base/Animal.js'

/**
 * Tiger class representing a tiger animal.
 * @class
 * @classdesc Represents a tiger, extends the Animal class.
 * @constructor
 */
export class Tiger extends Animal {
  constructor () {
    // The sound of a tiger is "grrr".
    super('grrr')
  }
}
