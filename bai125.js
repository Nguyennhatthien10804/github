Array.prototype.myFilter = function(cb) {
    var output = []
 for (var index in this){
     if (this.hasOwnProperty(index)){
         var result = cb(this[index], index, this)
         if (result === true){
             output.push(this[index])
         }
     }
 }
 return output
}