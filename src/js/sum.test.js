const sum = require('./sum.js')

describe('sum function',()=>{
    it('shoul throw error if the arguments is not number ',()=>{
        expect(()=>sum('a','b')).toThrow()
        expect(()=>sum('1',2)).toThrow()
        expect(()=>sum(3,'2')).toThrow()
    })
    it('should return the sum of two number', ()=>{
        expect(sum(1,3)).toBe(4);
        expect(sum(2,3)).toBe(5);
        expect(sum(5,3)).toBe(8);
    })
})