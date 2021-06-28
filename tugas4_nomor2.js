let reserveWord = (word) => {
  let text = word.split(" ");
  let check = "";
  for (i = ((text.length) - 1); i >= 0; i--) {
    check = check + text[i] + " ";
  }
  console.log(check)
};

reserveWord('Saya suka Javascript')