function divideAndSort(number) {
  let angkaString = String(number);
  let hasil = "";
  let num = [];

  // Fungsi untuk mengurutkan angkaArray karakter secara manual
  function perurutanAngka(angkaArray) {
    for (let i = 0; i < angkaArray.length - 1; i++) {
      for (let j = i + 1; j < angkaArray.length; j++) {
        if (angkaArray[i] > angkaArray[j]) {
          let temp = angkaArray[i];
          angkaArray[i] = angkaArray[j];
          angkaArray[j] = temp;
        }
      }
    }
    return angkaArray;
  }

  // Iterasi setiap karakter dalam string
  for (let i = 0; i < angkaString.length; i++) {
    if (angkaString[i] === "0") {
      if (num.length > 0) {
        num = perurutanAngka(num);
        for (let j = 0; j < num.length; j++) {
          hasil += num[j];
        }
        num = [];
      }
    } else {
      num[num.length] = angkaString[i];
    }
  }

  // Urutkan dan tambahkan num terakhir jika ada
  if (num.length > 0) {
    num = perurutanAngka(num);
    for (let j = 0; j < num.length; j++) {
      hasil += num[j];
    }
  }
  console.log(Number(hasil));
}
divideAndSort(5956560159466056);
