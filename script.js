const heartElement = document.getElementById('heart-text');
const footerElement = document.getElementById('footer-text');

const textPattern = "I LOVE YOU ";
const footerString = "by: Prisca";

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
function startExperience() {
    if (!hasStarted) {
        hasStarted = true;
        startHint.style.display = "none"; // Sembunyikan instruksi klik
        
        audio.play().catch(error => {
            console.log("Autoplay dicegah oleh browser, perlu interaksi klik.");
        });

        typeHeart();
    }
}

document.body.addEventListener('click', startExperience);

