
function getRandNumbers(min, max, length) {
    let array = [];
    for(let i=0; i<length; i++) {
        array.push(Math.floor(Math.random() * (max-min+1) + min));
    }
    return array;
}