import test from "tap"
import sum from "./sum.js"

test('a function', async (assert) =>{
    assert.equal(sum(1,3),3)
})