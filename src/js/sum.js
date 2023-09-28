function sum(a,b){
    if (typeof a !== 'number' || typeof b !== 'number'){
        throw new Error('inputs must be number!')
    }
    return a+b
}
module.exports = sum