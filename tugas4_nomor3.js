const name = [
    'Abigail', 'Alexandra', 'Fatih',
    'Amanda', 'Angela', 'Bella',
    'Carol', 'Caroline', 'fatih',
    'Deirdre', 'Diana', 'Elizabeth',
    'Ella', 'Faith', 'Olivia', 'Penelope',
    'Diani', 'fatih', 'carol' , 'fatih', 'Faith'
]

const findRepeatName = ((data) => {
    if (data != null) {
        let cek = -1
        let freq = []
        for (let i = 0; i < data.length; i++) {
            for (let j = 0; j < data.length; j++) {
                if (data[i].toLowerCase() == data[j].toLowerCase()) {
                    cek = cek + 1
                } else {
                    cek = cek + 0
                }
            }
            freq.push(cek)
            cek = -1
        }
        console.log(data)
        console.log(freq)

        let sorted = freq.sort((a,b)=>{return a-b})

        console.log(sorted)
        console.log(sorted[sorted.length - 1])

        for (let i = 0; i < sorted.length; i++) {
            if (freq[i] == sorted[sorted.length - 1]) {
                console.log(data[i])
                break
            }
        }

    } else {
        console.log('Data tidak boleh kosong')
    }
})

findRepeatName(name)