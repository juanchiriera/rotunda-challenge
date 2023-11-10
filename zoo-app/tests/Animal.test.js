// tests/Animal.test.js
import { Animal } from "../src/model/base/Animal.js";
import { assert } from "chai";

describe('Animal', () => {
    it('should speak with the correct sound', () => {
        const animal = new Animal('sound');
        const result = animal.speak('Hello');
        console.log(result);
        assert.strictEqual(result, 'Hello sound');
    });
});
