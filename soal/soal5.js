/**
 * mencari nilai terbasar
 * @angka1 14
 * @angka2 59
 * @angka3 52
 * @angka4 4
 * @angka5 38
 *
 * @return sebuah @String
 */
function nilaiTerbesar(angka1, angka2, angka3, angka4, angka5) {
  let besar = 0;
  //tempat coding disini
  if (angka1 > angka2) {
    besar = angka1;
  }
  else {
    if (angka2 > angka3) {
      besar = angka2;
    }
    else {
      if (angka3 > angka4) {
        besar = angka3;
      }
      else {
        if (angka4 > angka5) {
          besar = angka4;
        }
        else {
          besar = angka5;
        }
      }
    }
  }

  return 'Nilai terbesar adalah: ' + besar;
}
