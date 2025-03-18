
var courses = [
    {
        id : 1,
        Name :  'javascript',
        coin : 250.
        },
    {
        id : 2,
        Name :  'html, css',
        coin : 0.
        },
    {   
        id : 3,
        Name :  'java',
        coin : 350.
        },
        {   
        id : 3,
        Name :  'python',
        coin : 350.
     },
        {
        id : 3,
        Name :  'Reeactjs',
        coin : 350.
     }
]; 
var i= 0;

var totalCoin = courses.reduce(function(total, course){
    i++
    return total + course.coin;
},o);
console.log(totalCoin);