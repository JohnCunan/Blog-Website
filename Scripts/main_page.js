//BACK TO TOP BUTTON
const topButton = document.getElementById("back-To-Top-Btn");

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

//DARK MODE BUTTON
function changeTheme() {
    document.body.classList.toggle("dark")
}

//POP UP
function showPopUp() {
    var popup = document.getElementById("darkPopUp");
    popup.classList.toggle("show");
}

function hidePopUp() {
    var pophide = document.getElementById("darkPopUp")
    pophide.classList.toggle("hide");
}