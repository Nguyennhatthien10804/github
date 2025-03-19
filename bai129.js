Array.prototype.myEvery = function(cb) {
    for (var index in this){
    if (this.hasOwnProperty(index)) {
        let result = cb(this[index], index, this)
        if (!result) {
            return false
        }
    }
}
return true
}
