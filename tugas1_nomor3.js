let printSegitiga

let ulang1 = 'y';
while (ulang1 == 'y') {
    printSegitiga = prompt('Masukkan Nilai Segitiga : ')
    if (Number(printSegitiga) > 0){
        printSegitiga = Number(printSegitiga)
        let s = '';
        for (let i = printSegitiga ; i > 0 ; i--){
            for (let j = 1 ; j <= i ; j++){
                s = s + j;
            }
            s = s + '\n'
        }
        alert(s);
    }
    else{
        alert('Maaf, mohon masukkan nilai dengan format angka')
    }
}
