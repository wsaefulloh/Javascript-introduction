const findClosestNumb = ((data,num) => {
    let selisih = []
    let closest = data[data.length - 1]
    for (let i = 0; i < data.length; i++) {
        let cek = Math.abs(num - data[i])
        if (closest > cek) {
            closest = data[i]
        }
    }
    console.log(closest + ' is closest to ' + num + ' in given array')
})

findClosestNumb([1, 2, 3, 4, 5, 6, 7, 8, 9], 12)