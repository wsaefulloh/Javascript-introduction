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
        },100)
    })
}

cekHariKerja('sabtu')
.then((cek) => {console.log(cek)})
//keterangan
.catch((Error) => {console.log(Error)}
//keterangan
)