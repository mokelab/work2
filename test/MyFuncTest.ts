import { describe, it } from "mocha";
import { assert } from "chai";

import { moke } from '../src/MyFunc';

describe('demo', () => {
    it('case1', () => {
        const b = moke(10);
        assert.equal(b, 10); // bは10であるべき
    });
})