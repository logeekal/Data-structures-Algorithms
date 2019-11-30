export const getRandomNumberArray = (length) => {
    let result = [];
    for(let counter = 0; counter< length; counter++){
        let newRandomNumber = Math.ceil(Math.random() * 1000);
        result.push(newRandomNumber);
    }
    // console.log(result)
    return result;
}