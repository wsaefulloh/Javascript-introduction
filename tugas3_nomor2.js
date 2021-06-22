const getmonth = (callback)=>{
    setTimeout(()=>{
        let error = false;
        let month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'Desember']
        if (!error){
            callback(null, month)
        }else{
            callback(new Error('Sorry Data Not Found', []))
        }
    }, 100)
}

getmonth((a,b) => {
    if (a==null) {
        let newArr = b.map((some)=>{
            console.log(some)
        })        
    } else{
        console.log(a)
    }
})