// menampilkan ouput menggunakan for dan if else

jmlAngkot = 10;
angkotBeroperasi = 6;
noAngkot = 1;

console.log("logic 1 : if & for");
if (noAngkot <= angkotBeroperasi) {
  for (noAngkot = 1; noAngkot <= angkotBeroperasi; noAngkot++) {
    console.log("Angkot no. " + noAngkot + " Beroperasi dengan baik");
  }
} else noAngkot > angkotBeroperasi;
{
  for (noAngkot > angkotBeroperasi; noAngkot <= jmlAngkot; noAngkot++) {
    console.log("Angkot no. " + noAngkot + " sedang tidak beroperasi");
  }
}

console.log("\n Logic 2 : for & if");
for (noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++) {
  if (noAngkot <= 6) {
    console.log("Angkot no. " + noAngkot + " Beroperasi dengan baik");
  } else {
    console.log("Angkot no. " + noAngkot + " sedang tidak beroperasi");
  }
}
