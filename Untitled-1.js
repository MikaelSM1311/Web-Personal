// Menampilkan pesan sambutan saat halaman dimuat
window.onload = function() {
    alert("Selamat datang di halaman biodata Mikael Samuel Manurung!");
};

// Menambahkan efek hover pada gambar profil
const profileImg = document.querySelector("img");
profileImg.addEventListener("mouseover", function() {
    profileImg.style.transform = "scale(1.1)";
    profileImg.style.transition = "0.3s";
});

profileImg.addEventListener("mouseout", function() {
    profileImg.style.transform = "scale(1)";
});

// Menambahkan efek klik untuk highlight baris biodata
const rows = document.querySelectorAll("table tr");
rows.forEach(row => {
    row.addEventListener("click", function() {
        // Menghapus highlight dari baris lain
        rows.forEach(r => r.style.backgroundColor = "transparent");
        
        // Menambahkan warna highlight pada baris yang diklik
        row.style.backgroundColor = "#f0f8ff";
    });
});
