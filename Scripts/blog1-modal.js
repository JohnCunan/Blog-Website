//MODAL IMAGE
var modal = document.getElementById("banner-modal");
var modalImg = document.getElementById("banner1");

function openImgModal() {
    modal.style.display = "block";
    modalImg.src = "../img/banner1.png";
}

function closeImgModal() {
    modal.style.display = "none";
}
