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

//POP OUT
function hidePopUp() {
    var pophide = document.getElementById("darkPopUp")
    pophide.classList.toggle("hide");
}

//GO TO RANDOM BLOG
function goToRandomBlog() {
    var rndInt = Math.floor(Math.random() * 4) + 1

    if (rndInt == 1) {
        window.location.href = "Blog_pages/blog1.html";
    }
    else if (rndInt == 2) {
        window.location.href = "Blog_pages/blog2.html";
    }
    else if (rndInt == 3) {
        window.location.href = "Blog_pages/blog3.html";
    }
    else {
        window.location.href = "Blog_pages/blog4.html";
    }

}

//GO TO BLOG BY CLICKING THE IMAGE BANNER
function goToBlog1() {
    window.location.href = "Blog_pages/blog1.html";
}

function goToBlog2() {
    window.location.href = "Blog_pages/blog2.html";
}

function goToBlog3() {
    window.location.href = "Blog_pages/blog3.html";
}

function goToBlog4() {
    window.location.href = "Blog_pages/blog4.html";
}

//MODAL IMAGE
var modal = document.getElementById("banner-modal");
var modalImg = document.getElementById("aboutBanner");

function openImgModal() {
    modal.style.display = "block";
    modalImg.src = "img/about-us-banner-1.jpg";
}

function closeImgModal() {
    modal.style.display = "none";
}

//PRESS 'D' TO TOGGLE DARK MODE
var dark = false;

function darkKey() {
    document.body.classList.toggle("dark")

    if (dark === false) {
        document.getElementById("darkModeBtn").checked = true;
        dark = true;
    } else {
        document.getElementById("darkModeBtn").checked = false;
        dark = false;
    }

}
