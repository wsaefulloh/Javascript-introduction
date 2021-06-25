const cekHariKerja = (day) =>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const dataDay = ['senin', 'selasa', 'rabu', 'kamis', 'jumat']
            let cek = dataDay.find((item)=>{
                return item === day
            })
            if(cek){
                resolve(cek)
            } else{
                reject(new Error('Hari ini bukan hari kerja'))
            }
        },1000)
    })
}

// cekHariKerja('kamis')
//     .then((cek) => {console.log(cek)})
//     //Menangkap resolve (fullfill) jika promise terpenuhi
//     .catch((error) => {console.log('dari then',error)})
//     //Menangkap reject (reject) jika promise tidak terpenuhi

const coba = ( async (day) => {
    try {
        //blok kode yang dieksekusi untuk melakukan checking apakah terdapat error dalam blok kode ini
        let result = await cekHariKerja(day)
        console.log('Hari ' + day + ' adalah hari kerja')
        } catch (error) {
        //blok kode yang ditampilkan jika terjadi error pada blok try
            console.log('dari try',error)
        }
})

coba('kamis')