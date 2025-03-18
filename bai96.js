var orders = [
    {
        name: 'Khóa học HTML - CSS Pro',
        price: 3000000
    },
    {
        name: 'Khóa học Javascript Pro',
        price: 2500000
    },
    {
        name: 'Khóa học React Pro',
        price: 3200000
    }
]

function getTotal(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++)
    {
        sum += arr[i].price
    }
    return sum;
}

getTotal(orders) 