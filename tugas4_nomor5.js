const divideAndSort = ((num) => {
    let newString = num.toString()
    let newArray = newString.split('0')
    let fixArray = []
    for (let i = 0; i < newArray.length; i++) {
        let newSortArr = newArray[i].split('')
        let cek = newSortArr.sort()
        fixArray.push(cek)
    }
    let fixSort = []
    for (let i = 0; i < fixArray.length; i++) {
        let Sort = fixArray[i].join('')
        fixSort.push(Sort)
    }
    console.log(fixSort.join(''))
})

divideAndSort(5956560159466056)