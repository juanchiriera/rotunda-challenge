import { Lion } from "../src/model/Lion.js";
import { assert } from "chai";

describe('Lion', () => {
    it('should speak with a roar', () => {
        const lion = new Lion();
        const result = lion.speak('I\'m a lion');
        console.log(result);
        assert.strictEqual(result, 'I\'m roar a roar lion roar');
    });
});
