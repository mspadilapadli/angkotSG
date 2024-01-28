// menampilkan ouput menggunakan for dan if else

jmlAngkot = 10;
angkotBeroperasi = 6;
noAngkot = 1;
angkotLembur = 8;

// tampilkan angkot 8 sedang lembur
console.log("\n Logic 2 : for & if");
for (noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++) {
  if (noAngkot <= 6) {
    console.log("Angkot no. " + noAngkot + " Beroperasi dengan baik");
  } else if (noAngkot == angkotLembur) {
    console.log("Angkot no. " + noAngkot + " sedang Lembur");
  } else {
    console.log("Angkot no. " + noAngkot + " sedang tidak beroperasi");
  }
}
