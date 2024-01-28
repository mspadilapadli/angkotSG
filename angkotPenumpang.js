var penumpang = [];

var tambahPenumpang = function (namaPenumpang, penumpang) {
  // Jika angkot kosong, maka langsung mmasukkan saja penumpang tersebut ke dalam angkot.
  if (penumpang.length == 0) {
    penumpang.push(namaPenumpang);
    // return penumpang;

    // jika penumpang angkot ada isinya, makanya cek tempat duduk yang kosong di dalam angkotnya dan penumpang baru akan duduk di kursi yang kosong.
  } else {
    let i = 0;
    while (i < penumpang.length) {
      // mengisi kursi kosong
      if (penumpang[i] == undefined) {
        penumpang[i] = namaPenumpang;
        return penumpang;
      }
      // handle nama penumpang sama

      if (namaPenumpang == penumpang[i]) {
        console.log(`\n${namaPenumpang} ini sudah naik angkot dari tadi`);
        return penumpang;
      }
      // jika kursi penuh, maka akan di arahkan ke kursi terakir
      if (i == penumpang.length - 1) {
        penumpang.push(namaPenumpang);
        return penumpang;
      }

      i++;
    }
  }
};

var turunPenumpang = function (namaPenumpang, penumpang) {
  if (penumpang.length == 0) {
    return "Angkot Kosong";
  }
  let i = 0;
  while (i < penumpang.length) {
    if (namaPenumpang === penumpang[i]) {
      penumpang[i] = undefined;
      return penumpang;
    } else if (i == penumpang.length - 1) {
      console.log(`${namaPenumpang} tersebut tidak ada di dalam angkot`);
      return penumpang;
    }
    i++;
  
};
} 
console.log();

console.log(tambahPenumpang("MHD", penumpang));
console.log(tambahPenumpang("Sokhibul", penumpang));
console.log(tambahPenumpang("Padila", penumpang));
console.log(tambahPenumpang("Padli", penumpang));
console.log(tambahPenumpang("MHD", penumpang));
console.log(tambahPenumpang("Padli", penumpang));

console.log(turunPenumpang("Padila", penumpang));

console.log(tambahPenumpang("Cibs", penumpang));

console.log(turunPenumpang("Padilaaa", penumpang));

// console.log(penumpang);
