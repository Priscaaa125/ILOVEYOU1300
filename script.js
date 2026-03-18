const heartElement = document.getElementById('heart-text');
const footerElement = document.getElementById('footer-text');
const startHint = document.getElementById('start-hint'); // Bisa dihapus dari HTML jika mau
const audio = document.getElementById('myAudio');

const textPattern = "I LOVE YOU ";
const footerString = "from: SOMEONE";

const totalHeartChars = 2800; 
const typingSpeedHeart = 1;   
const typingSpeedFooter = 100;

let heartIndex = 0;
let footerIndex = 0;

function typeHeart() {
    if (heartIndex < totalHeartChars) {
        heartElement.innerHTML += textPattern[heartIndex % textPattern.length];
        heartIndex++;
        setTimeout(typeHeart, typingSpeedHeart);
    } else {
        typeFooter();
    }
}

function typeFooter() {
    if (footerIndex < footerString.length) {
        footerElement.innerHTML += footerString.charAt(footerIndex);
        footerIndex++;
        setTimeout(typeFooter, typingSpeedFooter);
    }
}

// Fungsi utama untuk menjalankan semuanya
window.onload = () => {
    // 1. Mulai animasi teks langsung
    typeHeart();

    // 2. Coba putar audio secara otomatis
    audio.volume = 0.5; // Set volume ke 50% agar tidak terlalu mengejutkan
    const playPromise = audio.play();

    if (playPromise !== undefined) {
        playPromise.catch(error => {
            // Jika browser memblokir, musik akan terhenti sampai user berinteraksi
            console.log("Autoplay diblokir oleh browser. Musik akan berputar saat user menyentuh layar.");
            
            // Sebagai cadangan, tetap putar musik saat klik pertama kali
            document.body.addEventListener('click', () => {
                audio.play();
            }, { once: true });
        });
    }
};
