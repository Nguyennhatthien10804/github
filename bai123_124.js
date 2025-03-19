
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
Array.prototype.filter2 = function(callback){
    var output = [];
    for(var i = 0; i < this.length; i++){
        if(callback(this[i], i, this)){
            output.push(this[i]);
        }
    }
    return output;
}