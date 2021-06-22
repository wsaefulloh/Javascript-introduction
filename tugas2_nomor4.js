function runTimer(durasi) {
    let timer = (durasi*60)+60
    let menit
    let detik
    let a = setInterval(function () {
        menit = Math.floor(timer / 60);
        detik = Math.floor(timer % 60);
        if (menit < 10) {
            menit = "0" + menit;
        }
        if (detik < 10) {
            detik = "0" + detik;
        }
        console.clear()
        console.log (menit + ":" + detik);
        timer = timer-1
        
        if (detik == "00" && menit == '00') {
            clearInterval(a)
        }

    }, 1000);
}

runTimer(0.1)