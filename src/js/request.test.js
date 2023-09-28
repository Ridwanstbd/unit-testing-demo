import test from "tap"
import request from "./request.js"
test('a async function',async (assert) => {
    assert.rejects( () => request('http://error.com'), new Error('Network error!'))
} )
test('a async funstion', async (assert) => {
    assert.resolves( () => request('http://success.com'), {message : 'Success'})
})