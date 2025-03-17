function Student(firstName, lastName){
    this.firstName  = firstName;
    this.lastName = lastName; 
    
}
Student.prototype.getFullName = function(){
    return`${this.firstName} ${this.lastName}`
}


var student = new Student('Thien', 'Nguyen');

console.log(student.firstName);  
console.log(student.lastName);  
console.log(student.getFullName()); 