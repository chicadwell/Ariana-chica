document.getElementById("yesBtn").addEventListener("click", function() {
    document.getElementById("page1").classList.add("hidden");
    document.getElementById("page2").classList.remove("hidden");
    document.getElementById("music").src += "&autoplay=1";
});

document.getElementById("noBtn").addEventListener("click", function() {
    document.getElementById("noMessage").classList.remove("hidden");
});
