const arrToObj = (arr) => {
    return arr.reduce((obj, [key, value]) => {
        obj[key] = value
        return obj
    }, {})
}
 
var arr = [
    ['name', 'Sơn Đặng'],
    ['age', 18],
];
console.log(arrToObj(arr)); 