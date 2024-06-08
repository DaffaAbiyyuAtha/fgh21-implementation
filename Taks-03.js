function FazzFood(harga, voucher, jarak, pajak) {
  console.log("harga : " + harga);
  let diskon = 0;
  if (voucher === "FAZZFOOD50") {
    if (harga >= 50000) {
      diskon = harga * 0.5;
      if (diskon > 50000) {
        diskon = 50000;
      }
    }
  }
  if (voucher === "DITRAKTIR60") {
    if (harga > 25000) {
      diskon = harga * 0.6;
      if (diskon > 25000) {
        diskon = 30000;
      }
    }
  }
  console.log("potongan : " + diskon);

  let tarif = 5000;
  if (jarak > 2) {
    tarif = tarif + (jarak - 2) * 3000;
  }
  console.log("Biaya Antar : " + tarif);
  let biayaPajak = 0;
  if (pajak) {
    biayaPajak = harga * 0.05;
  }
  console.log("Pajak : " + biayaPajak);

  let subtotal = harga - diskon + tarif + biayaPajak;
  console.log("subtotal : " + subtotal);
}
FazzFood(75000, "FAZZFOOD50", 5, true);

// 'FAZZFOOD50' = harga > 50000, diskon 50%, maks 50000
// 'DITRAKTIR60' = harga > 25000, diskon 60%, maks 30000
// jarak = 2km : 5, 1++ : +3
// pajak = 5% berisi bolean
