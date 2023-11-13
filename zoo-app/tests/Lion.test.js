/* eslint-disable no-undef */
import { Lion } from '../src/model/Lion.js'
import { assert, expect } from 'chai'

describe('Lion', () => {
  it('should speak with a roar', () => {
    const lion = new Lion()
    const result = lion.speak('I\'m a lion')
    console.log(result)
    assert.strictEqual(result, 'I\'m roar a roar lion roar')
  })

  it('should throw an exception when speaking with a null string', () => {
    const lion = new Lion()
    // Use Chai's expect().to.throw() to check if an exception is thrown
    expect(() => lion.speak(null)).to.throw('Invalid input. Please provide a valid input as a string.')
  })
})
