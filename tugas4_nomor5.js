const divideAndSort = (data) => {
  if (typeof(data) == 'number') {
    let newString = data.toString();
    let newArray = newString.split("0");
    let fixArray = [];
    for (let i = 0; i < newArray.length; i++) {
      let newSortArr = newArray[i].split("");
      let cek = newSortArr.sort();
      fixArray.push(cek);
    }
    let fixSort = [];
    for (let i = 0; i < fixArray.length; i++) {
      let Sort = fixArray[i].join("");
      fixSort.push(Sort);
    }
    let fix = fixSort.join("")
    fix = parseInt(fix)
    console.log(fix)
  } else {
    console.log("data yang dimasukkan harus berupa number");
  }
};

divideAndSort(5956560159466056);