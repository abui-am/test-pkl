/**
 * Menghilangkan nilai dari Array.
 * @arrayBuah @Array campuran buah dan hewan
 * @arrayHewan @Array dari hewan
 *
 * @return sebuah @Array
 */
function hapusArray(arrayBuah, arrayHewan) {
  const arrayBuahBaru = []; //membuat Array baru

  //tempat coding disini

  arrayBuahBaru.push(
    arrayBuah.filter(
      function (e) {
        return this.indexOf(e) < 0;
      }
      , arrayHewan)
  );

  return arrayBuahBaru;
}
