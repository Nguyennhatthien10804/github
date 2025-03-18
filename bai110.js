function getTotalGold(arr){

    return arr.reduce(function(acu,cur){
    
    return acu + cur.gold
    
    },0)
    
    }