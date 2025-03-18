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
var totalCoin = 0;
for (var course of courses){
    totalCoin += course.coin;
}
console.log(totalCoin); 