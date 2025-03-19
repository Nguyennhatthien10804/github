Array.prototype.myMap = function (ab) {

    var testMap = [];
    
    for (var i = 0; i < this.length; ++i) {
    
    var testMap2 = ab(this[i], i)
    
    testMap.push(testMap2)
    
    }
    
    return (testMap)
    
    }