// menampilkan ouput menggunakan for dan if else

jmlAngkot = 10;
angkotBeroperasi = 6;
noAngkot = 1;
angkotLembur = 8;

// tampilkan angkot 8,10, dan 5 sedang lembur
console.log("\n Logic 2 : for & if");
for (noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++) {
  //   if (noAngkot <= 4 || noAngkot === 6) {                 --->logic 1
  // if (noAngkot <= 6 && noAngkot !== 5) {                   --->logic 2
  if (noAngkot <= 6 && noAngkot !== 5) {
    console.log("Angkot no. " + noAngkot + " Beroperasi dengan baik");
  } else if (noAngkot === 8 || noAngkot === 10 || noAngkot === 5) {
    console.log("Angkot no. " + noAngkot + " sedang Lembur");
  } else {
    console.log("Angkot no. " + noAngkot + " sedang tidak beroperasi");
  }
}
