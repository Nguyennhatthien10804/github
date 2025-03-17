var getCanVoteMessage = (age) => age > 18 ?"Bạn có thể bỏ phiếu" : "Bạn chưa được bỏ phiếu"

console.log(getCanVoteMessage(18)) 
console.log(getCanVoteMessage(15)) 