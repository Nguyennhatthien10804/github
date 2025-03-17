function User(firstName, lastName,  avatar){
    this.firstName  = firstName;
    this.lastName = lastName;
    this.avatar = avatar;
    this.getName = function(){
        return '${this.firstname} ${this.lastname}';
    }
}
User.prototype.className = 'Ten';
User.prototype.getClassName = function(){
    return thhis.className;
}
var user = new User('Hoang', 'Nguyen', 'Avatar 1');
var user2 =  new User('Thien', 'Nguyen', 'Avatar 2');
console.log(user1.className);
console.log(user2.getClassName());