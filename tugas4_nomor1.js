let cekPalindrom = (kata) => {
    let validasi = kata.toLowerCase()
    let text = validasi.split('');
    let check = "";
    for (i = ((text.length) - 1); i >= 0; i--) {
        check = check + text[i];
    }
    
    if (check == validasi) {
        console.log("Kata " + kata + " adalah palindrom");
    } else {
        console.log("Kata " + kata + " bukan palindrom");
    }
};

cekPalindrom('malam')