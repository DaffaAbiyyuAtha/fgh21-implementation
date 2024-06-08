function isPalindrom(kata) {
  let splitKata = kata.split("");
  let reverseKata = splitKata.reverse();
  let joinKata = reverseKata.join("");

  if (joinKata == kata) {
    return "Palindrom";
  }
  if (joinKata != kata) {
    return "Bukan Palindrom";
  }
}
console.log(isPalindrom("malam"));
