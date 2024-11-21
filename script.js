document.getElementById('registration-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Mencegah form submit default

    // Ambil data dari form
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const topic = document.getElementById('topic').value;

    // Tampilkan data yang diinputkan 
    alert(`Terima kasih, ${name}!\nEmail Anda: ${email}\nTopik yang dipilih: ${topic}`);
});

// Event Listener untuk Kontak Email
document.addEventListener("DOMContentLoaded", function () {
    const emailLink = document.querySelector("footer a[href^='mailto']");
    emailLink.addEventListener("click", function (e) {
        e.preventDefault();
        alert("Anda akan mengirim email ke: sakdiyahh845@gmail.com");
        window.location.href = emailLink.href; // Membuka aplikasi email
    });
});

// Event Listener untuk Tautan Instagram
const instagramLink = document.querySelector("footer a[href*='instagram.com']");
instagramLink.addEventListener("click", function (e) {
    e.preventDefault();
    const confirmation = confirm(
        "Anda akan diarahkan ke akun Instagram kami. Lanjutkan?"
    );
    if (confirmation) {
        window.open(instagramLink.href, "https://www.instagram.com/vvvysmn/"); // Membuka Instagram di tab baru
    }
});

// Event Listener untuk Nomor Telepon (opsional)
const phoneText = "Telp: +62 822-4587-0175";
const footer = document.querySelector("footer");
footer.addEventListener("click", function () {
    alert(`Informasi Kontak:\n${phoneText}`);
});
