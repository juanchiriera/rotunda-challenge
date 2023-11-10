import { Tiger } from '../src/model/Tiger.js';
import { assert } from "chai";

describe('Tiger', () => {
    it('should speak with a grrr', () => {
        const tiger = new Tiger();
        const result = tiger.speak('Lions suck');
        console.log(result);
        assert.strictEqual(result, 'Lions grrr suck grrr');
    });
});
