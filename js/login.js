document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah pengiriman form default
    
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    
    // Debugging: Cek apakah event listener berfungsi
    console.log("Tombol Login Berfungsi!");

    // Validasi username dan password
    if (username === "233510001" && password === "230105") {
        alert("Login berhasil! Anda akan diarahkan ke halaman utama."); // Pop-up jika login berhasil
        window.location.href = "index.html"; // Arahkan ke halaman index.html
    } else {
        alert("Username atau password salah!"); // Pop-up notifikasi error
    }
});
