document.getElementById("yesBtn").addEventListener("click", function() {
    document.getElementById("page1").classList.add("hidden");
    document.getElementById("page2").classList.remove("hidden");
    document.getElementById("music").src += "&autoplay=1";
});

document.getElementById("noBtn").addEventListener("click", function() {
    document.getElementById("noMessage").classList.remove("hidden");
});
document.getElementById("yesBtn").addEventListener("click", function() {
    for (let i = 0; i < 50; i++) {
        createHeart();
    }
});

function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 2 + 3 + "s";
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}
const valentineDate = new Date("2025-02-14T00:00:00");

function updateTimer() {
    const now = new Date();
    const diff = valentineDate - now;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById("timer").innerHTML = 
        `${days} روز ${hours} ساعت ${minutes} دقیقه ${seconds} ثانیه تا ولنتاین!`;
}

setInterval(updateTimer, 1000);
updateTimer();
