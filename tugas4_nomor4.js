const findClosestNumb = (data, num) => {
    let cek;
    let nilai;
    let closest = Math.max(...data);
    for (let i = 0; i < data.length; i++) {
        cek = Math.abs(num - data[i]);
        if (closest > cek && cek != 0) {
            closest = cek;
            nilai = data[i];
        }
    }
    console.log(nilai + " is closest to " + num + " in given array");
};

findClosestNumb([1, 2, 3, 4, 5, 6, 7, 8, 9, 15], 6);
