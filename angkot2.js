jmlAngkot = 10;
jmlAngkotBeroperasi = 8;
noAngkot = 1;

// angkot beropeasi menggunakan while
while (noAngkot <= jmlAngkotBeroperasi) {
  console.log("Angkot no. " + noAngkot + " beroperasi dengan baik");
  noAngkot++;
}
// angkot yang sedang tidak beroperasi menggunakan for
for (noAngkot > jmlAngkotBeroperasi; noAngkot <= 10; noAngkot++) {
  console.log("Angkot no. " + noAngkot + " sedang tidak beroperasi");
}
