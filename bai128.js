Array.prototype.every2 = function(callback){
    var output = true;
    for(var index in this){
        if(this.hasOwnProperty(index)){
            if(!callback(this[index], index, this)){
                output = false;
                break;
                
            }
            return output;
        }
    }
    return false;
}
var courses = [
    {
        Name :  'javascript',
        coin : 250,
        isFinish: true,
        },
    {
        Name :  'html, css',
        coin : 350,
        isFinish: true,
        },
    {  
        Name :  'java',
        coin : 450,
        isFinish: true,
        },
        {   
        Name :  'python',
        coin : 550,
        isFinish: true,
     },
        {
        Name :  'Reeactjs',
        coin : 650,
        isFinish: true,
     }
]; 
varresult = courses.every2(function(course){
    return course.coin > 500;
});
console.log(result);