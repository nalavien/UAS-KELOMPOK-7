// [READ] Tampilkan Semua Pesanan, Ringkasan Pendapatan & Detail ID
const readPesanan = async (): Promise<void> => {
    console.log("\n=== DAFTAR SELURUH PESANAN ===");
    if (daftarPesanan.length === 0) {
        console.log("[INFO] Belum ada data pesanan yang tersimpan.\n");
        return;
    }

    // Format data untuk ditampilkan dalam tabel ringkas
    const tabelData = daftarPesanan.map((p) => ({
        ID: p.id,
        Pelanggan: p.pelanggan,
        Menu: ${p.menu} (${p.menu === "Hot" ? "Lv." + p.level : p.topping}),
        Porsi: p.porsi,
        Metode: p.metode,
        Kasir: Kasir ${p.kasir},
        Total: formatRupiah(p.total),
        Status: p.selesai ? "Selesai" : "Proses"
    }));

    console.table(tabelData);

    // Total pendapatan dan jumlah pesanan untuk Pemilik Restoran
    const totalPendapatan = daftarPesanan.reduce((sum, p) => sum + p.total, 0);
    console.log(Jumlah Pesanan   : ${daftarPesanan.length} pesanan);
    console.log(Total Pendapatan : ${formatRupiah(totalPendapatan)}\n);

    const lihatDetail = await tanya("Masukkan ID pesanan untuk lihat detail (atau tekan Enter untuk kembali): ");
    if (lihatDetail !== "") {
        const idCari = Number(lihatDetail);
        const ditemukan = daftarPesanan.find((p) => p.id === idCari);
        if (ditemukan) {
            tampilkanDetailPesanan(ditemukan);
        } else {
            console.log([!] Pesanan dengan ID #${lihatDetail} tidak ditemukan.\n);
        }
    }
};
