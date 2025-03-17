function User(firstName, lastName,  avatar){
    this.firstName  = firstName;
    this.lastName = lastName;
    this.avatar = avatar;
    this.getName = function(){
        return '${this.firstname} ${this.lastname}';
    }
}
var athor = new User('Hoa', 'Nguyen', 'Avatar');
var user =  new User('Thien', 'Nguyen', 'Avatar');
athor.tiltle = 'Admin';
user.content = 'Hello';
console.log(athor);
console.log(user);