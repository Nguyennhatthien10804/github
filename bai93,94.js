
function getTotal(arr) {
    var length = 0;

while(arr[length] != undefined){

length ++;

}

var total = 0;

for(var i = 0 ; i < length ; i++){

total += arr[i];

}

return total;

}