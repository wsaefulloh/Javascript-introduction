const cekPalindrom = (kata) =>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{

            let validasi = kata.toLowerCase();
            let text = validasi.split("");
            let check = "";
            let length = text.length - 1;
            for (i = length; i >= 0; i--) {
                check = check + text[i];
            }

            if (check == validasi) {
                resolve (kata);
            } else {
                reject (new Error('Kata ' + kata + ' bukan palindrom'));
            }
        },100)
    })
}

cekPalindrom('kata')
.then((kata) => {console.log("Kata " + kata + " adalah palindrom")})
.catch((Error) => {console.log(Error)})

/*let data = [{
    id: 1,
    name: 'Ervin Howell',
    email: 'shanna@melissa.tv'
},{
    id:2,
    name: 'Clementine Bauch',
    email: 'nathan@yesenia.net'
},{
    id:3,
    name: 'Patricia Lebsack',
    email: 'julianne.conner@kory.org'
}]

const cekData = (id) =>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if (id === 1) {
                resolve (id);
            } else if (id === 2) {
                resolve (id)
            } else if (id === 3) {
                resolve (id)
            } else {
                reject (new Error('id tidak ditemukan'));
            }
        }, 100)
    })
}

cekData(1)
.then((id) => {console.log(data[id-1])})
.catch((Error) => {console.log(Error)})*/