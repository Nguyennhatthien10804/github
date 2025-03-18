

const sports = [
    {
        name: 'Bóng rổ',
        like: 6
    },
    {
        name: 'Bơi lội',
        like: 5
    },
    {
        name: 'Bóng đá',
        like: 10
    },
]

const getMostFavoriteSport = (arr) => {
    return arr.filter((item) => item.like > 5)
}
      
console.log(getMostFavoriteSport(sports)) 