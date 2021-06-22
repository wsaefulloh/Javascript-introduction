const name = [
  "Abigail", "Alexandra", "Alison", "Amanda", "Angela", "Bella", "Carol", "Caroline", "Carolyn", "Deirdre", "Diana", "Elizabeth", "Ella", "Faith", "Olivia", "Penelope",
];

function callback(some) {
  console.log(some);
}

function searchName(kata, jumlah, CallbackFn) {
  let cek = new RegExp(kata.toLowerCase());
  let katasesuai = [];
  let banyak;
  let hasil;
  for (let i = 0; i < name.length; i++) {
    hasil = cek.test(name[i].toLowerCase());
    if (hasil == true) {
      banyak = katasesuai.push(name[i]);
    }
  }

  if (banyak >= jumlah) {
    katasesuai = katasesuai.slice(0, jumlah);
  }

  CallbackFn(katasesuai);
}

searchName("an", 3, callback);
