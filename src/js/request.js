async function request(url){
    if ( url === 'http://error.com' ){
        throw new Error('Network error')
    }
    return {
        message: "success"
    }
}


export default request