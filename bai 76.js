function Animal(name,leg,speed){
    this.name = name;
    this.leg = leg;
    this.speed = speed;
    this.inf = function getinf(){
        return `${this.name} ${this.leg} ${this.speed}`
    }
}
var parrot = new Animal('Cat',4,5);
console.log(parrot.inf())