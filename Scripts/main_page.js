//BACK TO TOP BUTTON
topButton = document.getElementById("back-To-Top-Btn");

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (window.pageYOffset > 300) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }
}

function topFunction() {
    window.scrollTo(0, 0)
}