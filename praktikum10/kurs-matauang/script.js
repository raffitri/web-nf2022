function convert() {
    let inAwal = document.getElementById("nilaiAwal").value;
    let kurs = document.getElementById("selectKurs").value;
    let hasil;

    if (kurs == "USD") { 
        hasil = inAwal * 9915;
    } else if (kurs == "SGD") {
        hasil = inAwal * 13472;
    } else if (kurs == "Ringgit") {
        hasil = inAwal * 874;
    } else if (kurs == "Yen") {
        hasil = inAwaL * 120;
    } else if (kurs == "EURO") {
        hasil = inAwal * 15888;
    } else if (kurs == "Riyal") {
        hasil = inAwal * 3592;
    } else {
        hasil = 0;
    }

document.getElementById("nilaiRupiah").value = String("Rp. " + hasil);
}