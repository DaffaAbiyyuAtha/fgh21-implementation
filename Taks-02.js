function reverseWords(kalimat) {
  let splitKalimat = kalimat.split(" ");
  let reverseKalimat = splitKalimat.reverse();
  let joinKalimat = reverseKalimat.join(" ");
  return joinKalimat;
}
console.log(reverseWords("Saya Belajar Javascript"));
