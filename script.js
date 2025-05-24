function smoothScroll() {
    document.querySelector(".pods").scrollIntoView({ behavior: "smooth" });
}

function showDetails(flavor) {
    document.getElementById('pod-description').innerText = flavor + " - Smooth & Bold Espresso Experience";
}

document.addEventListener("DOMContentLoaded", function() {
    console.log("Welcome to The Velvet Shot!");
});