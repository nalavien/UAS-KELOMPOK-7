import * as readlineSync from "readline-sync";

// MENU UTAMA APLIKASI KASIR AYAM GOSIP

// Variabel untuk mengontrol perulangan program
let berjalan: boolean = true;
// Variabel untuk menyimpan jumlah menu yang tersedia
const jumlahMenu: number = 6;
// Fungsi untuk menampilkan menu utama
function tampilkanMenu(): void {
    // Menampilkan judul aplikasi
    console.log("\n======================================");
    console.log("       APLIKASI KASIR AYAM GOSIP");
    console.log("======================================");
    // Menampilkan pilihan fitur aplikasi
    console.log("1. Tambah Pesanan");
    console.log("2. Lihat Pesanan");
    console.log("3. Ubah Pesanan");
    console.log("4. Hapus Pesanan");
    console.log("5. Cari Pesanan");
    console.log("6. Keluar");
    // Menampilkan garis penutup menu
    console.log("======================================");
}
// Fungsi untuk memvalidasi pilihan menu
function validasiPilihan(pilihan: number): boolean {
    // Memeriksa apakah pilihan berada dalam rentang menu
    if (
        Number.isInteger(pilihan) &&
        pilihan >= 1 &&
        pilihan <= jumlahMenu
    ) {
        return true;
    } else {
        return false;
    }
}
// Fungsi untuk menjalankan menu berdasarkan pilihan
function prosesMenu(pilihan: number): void {
    // Menentukan fitur yang dijalankan berdasarkan pilihan
    switch (pilihan) {
        // Pilihan pertama untuk menambahkan pesanan
        case 1:
            console.log("\nAnda memilih menu Create.");
            console.log("Fitur tambah pesanan dipilih.");
            break;
        // Pilihan kedua untuk menampilkan pesanan
        case 2:
            console.log("\nAnda memilih menu Read.");
            console.log("Fitur lihat pesanan dipilih.");
            break;
        // Pilihan ketiga untuk mengubah pesanan
        case 3:
            console.log("\nAnda memilih menu Update.");
            console.log("Fitur ubah pesanan dipilih.");
            break;
        // Pilihan keempat untuk menghapus pesanan
        case 4:
            console.log("\nAnda memilih menu Delete.");
            console.log("Fitur hapus pesanan dipilih.");
            break;
        // Pilihan kelima untuk mencari pesanan
        case 5:
            console.log("\nAnda memilih menu Search.");
            console.log("Fitur cari pesanan dipilih.");
            break;
        // Pilihan keenam untuk keluar dari program
        case 6:
            console.log("\nTerima kasih telah menggunakan");
            console.log("Aplikasi Kasir Ayam Gosip!");
            // Menghentikan perulangan menu
            berjalan = false;
            break;
        // Menangani pilihan yang tidak tersedia
        default:
            console.log("\n[!] Pilihan menu tidak tersedia.");
            break;
    }
}

// PROGRAM UTAMA
// Perulangan menu selama program masih berjalan
while (berjalan) {
    // Menampilkan menu utama
    tampilkanMenu();
    // Meminta input pilihan dari pengguna
    const input: string = readlineSync.question(
        "Masukkan pilihan menu (1-6): "
    );
    // Mengubah input teks menjadi angka
    const pilihan: number = Number(input);
    // Memeriksa apakah input kosong atau bukan angka
    if (input.trim() === "" || !validasiPilihan(pilihan)) {
        // Menampilkan pesan kesalahan
        console.log("\n[!] Input tidak valid!");
        console.log("Silakan masukkan angka 1 sampai 6.");
    } else {
        // Menjalankan fitur sesuai pilihan pengguna
        prosesMenu(pilihan);
    }
}