Array.prototype.mySome = function(cb) {
    for (let i in this) {
        if (this.hasOwnProperty(i)) {
            if (cb(this[i], i, this)) {
                return true
            }
        }
    }
    return false
}