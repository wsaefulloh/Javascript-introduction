let BahasaIndonesia
let BahasaInggris
let Matematika
let IlmuPengetahuanAlam
let rata_rata
let grade

let ulang1 = 'y';
while (ulang1 == 'y') {
    BahasaIndonesia = prompt('Masukkan Nilai Bahasa Indonesia : ')
    if (Number(BahasaIndonesia) <= 100){
        BahasaIndonesia = Number(BahasaIndonesia)
        ulang1 = 'n'
    }
    else{
        alert('Maaf, mohon masukkan nilai dengan format angka')
        ulang1 = 'y'
    }
}

while (ulang1 == 'n') {
    BahasaInggris = prompt('Masukkan Nilai Bahasa Inggris : ')
    if (Number(BahasaInggris) <= 100){
        BahasaInggris = Number(BahasaInggris)
        ulang1 = 'y'
    }
    else{
        alert('Maaf, mohon masukkan nilai dengan format angka')
        ulang1 = 'n'
    }
}

while (ulang1 == 'y') {
    Matematika = prompt('Masukkan Nilai Matematika : ')
    if (Number(Matematika) <= 100){
        Matematika = Number(Matematika)
        ulang1 = 'n'
    }
    else{
        alert('Maaf, mohon masukkan nilai dengan format angka')
        ulang1 = 'y'
    }
}

while (ulang1 == 'n') {
    IlmuPengetahuanAlam = prompt('Masukkan Nilai IPA : ')
    if (Number(IlmuPengetahuanAlam) <= 100){
        IlmuPengetahuanAlam = Number(IlmuPengetahuanAlam)
        ulang1 = 'y'
    }
    else{
        alert('Maaf, mohon masukkan nilai dengan format angka')
        ulang1 = 'n'
    }
}

rata_rata = (BahasaInggris+BahasaIndonesia+Matematika+IlmuPengetahuanAlam)/4;
if (rata_rata <= 100 && rata_rata >= 90){
    grade = 'A'
}
else if (rata_rata <= 89 && rata_rata >= 80){
    grade = 'B'
}
else if (rata_rata <= 79 && rata_rata >= 70){
    grade = 'C'
}
else if (rata_rata <= 69 && rata_rata >= 60){
    grade = 'D'
}
else {
    grade = 'E'
}

alert('Rata-rata Nilai ' + rata_rata + ' dengan grade ' + grade)