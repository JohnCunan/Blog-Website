//MODAL IMAGE
var modal = document.getElementById("banner-modal");
var modalImg = document.getElementById("banner2");

function openImgModal() {
    modal.style.display = "block";
    modalImg.src = "../img/banner2.png";
}

function closeImgModal() {
    modal.style.display = "none";
}
