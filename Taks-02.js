// function reverseWords(kalimat) {
//   let splitKalimat = kalimat.split(" ");
//   let reverseKalimat = splitKalimat.reverse();
//   let joinKalimat = reverseKalimat.join(" ");
//   return joinKalimat;
// }
// console.log(reverseWords("Saya Belajar Javascript"));

function reverseWords(kalimat) {
  let panjangKalimat = kalimat.length;
  let result = "";
  let akhirkalimat = panjangKalimat;

  for (let i = panjangKalimat - 1; i >= 0; i--) {
    if (kalimat[i] === " " || i === 0) {
      let awalKalimat = "";
      if (i === 0) {
        awalKalimat = i;
      } else {
        awalKalimat = i + 1;
      }

      for (let j = awalKalimat; j < akhirkalimat; j++) {
        result = result + kalimat[j];
      }
      if (i > 0) {
        result = result + " ";
      }
      akhirkalimat = i;
    }
  }
  return result;
}

console.log(reverseWords("Saya Belajar Javascript"));
