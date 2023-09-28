const request = require("./request.js")

describe('a sync function', ()=>{
    it('reject async',async ()=>{
        await expect(request('http://error.com'))
        .rejects.toThrow('Network error!')
    })
    it('resolves async',async ()=>{
        await expect(request('http://success.com'))
        .resolves.toEqual({"message":"success"})
    })
})