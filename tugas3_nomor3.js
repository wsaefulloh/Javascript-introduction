const checkPass = (a,b)=>{
    let arrnumber = '0123456789'.split('')
    let string = 'abcdefghijklmnopqrstuvwxyz'
    let arrstring = string.split('')
    let arrupstring = string.toUpperCase().split('')
    let arrspecial = '!@#$%^&*'.split('')
    let newPass = a
    let num 
    let str
    let upstr
    let spc
    let rand
    if (b=='low') {
        while (newPass.length <= 8) {
            num = Math.floor(Math.random() * 9)
            str = Math.floor(Math.random() * 25)
            rand = (arrnumber[num] + arrstring[str]).split('')
            newPass = newPass + rand[Math.floor(Math.random() * 2)]
        }

    } else if (b=='good') {
        while (newPass.length <= 8) {
            num = Math.floor(Math.random() * 9)
            str = Math.floor(Math.random() * 25)
            upstr = Math.floor(Math.random() * 25)
            rand = (arrupstring[upstr] + arrnumber[num] + arrstring[str]).split('')
            newPass = newPass + rand[Math.floor(Math.random() * 3)]
        }

    } else if (b=='strong') {
        while (newPass.length <= 8) {
            num = Math.floor(Math.random() * 9)
            str = Math.floor(Math.random() * 25)
            upstr = Math.floor(Math.random() * 25)
            spc = Math.floor(Math.random() * 6)
            rand = (arrspecial[spc] + arrupstring[upstr] + arrnumber[num] + arrstring[str]).split('')
            newPass = newPass + rand[Math.floor(Math.random() * 4)]
        }
    }
    console.log(newPass.slice(0,8))
}

checkPass('abcd','low')