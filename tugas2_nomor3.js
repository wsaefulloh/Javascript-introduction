function pembanding(a, b) {
    return a-b
}

function SeleksiNilai(nilaiAwal, nilaiAkhir, dataArray) {
  if (nilaiAwal > nilaiAkhir) {
    console.log("Nilai akhir harus lebih besar dari nilai awal");
  } else if (dataArray.length < 5) {
    console.log("Jumlah angka dalam dataArray harus lebih dari 5");
  } else {
    let sorted = dataArray.sort(pembanding);
    let dataOutput = [];
    for (let i = 0; i < sorted.length; i++) {
      if (sorted[i] > nilaiAwal && sorted[i] < nilaiAkhir) {
        dataOutput.push(sorted[i]);
      }
    }
    console.log(dataOutput)
  }
}

SeleksiNilai(5,20,[4,25,2,14,17,30,8])