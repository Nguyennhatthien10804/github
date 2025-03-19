Array.prototype.some2 = function(callback){
    for(var index in this){
        if(this.hasOwnProperty(index)){
            if(callback(this[index], index, this)){
                return true;
            }
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
        coin : 0,
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
varresult = courses.some2(function(course){
    return course.isFinish;
});
console.log(result);