const fetch = require('node-fetch');

let data2

let data1 = {
    id : 4,
    email: 'astrowarden@moba.ml',
    first_name: 'Yve',
    last_name: 'astrowarden',
    avatar: 'https://reqres.in'
}

let data3 = {
    id: 4,
    emaal: 'eve.holt@reqres.in',
    first_aname: 'Eve',
    last_name: 'Holt',
    avatar: 'https://reqres.in/img/faces/4-image.jpg'
}

const objectCompare = ((data1,data2)=>{
    let cek = 0
    let keys1 = Object.keys(data1)
    let value1 = Object.values(data1)
    let keys2 = Object.keys(data2)
    let value2 = Object.values(data2)
    let panjang1 = keys1.length
    let panjang2 = keys2.length
    if (panjang1 == panjang2) {
        for (let i = 0; i < panjang1; i++) {
            if (keys1[i] === keys2[i] && value1[i] === value2[i]) {
                cek = cek + 1
            }else{
                cek = cek + 0
            }
        }
        if (cek == panjang1) {
            console.log(true)
        } else {
            console.log(false)
        }
    } else{
        console.log(false)
    }
})

fetch('https://reqres.in/api/users/4')
.then(async (response) => {
    let datanew = await response.json()
    data2 = datanew.data
    objectCompare(data3,data2)
    console.log(data1)
    console.log(data2)
    console.log(data3)
})