"use strict";

// Scroll user to top of page when banner is clicked
const banner = document.getElementsByClassName("header-img")[0];

banner.onclick = function() {
  window.scrollTo(0, 0);
}

const modal = document.getElementById("myModal");
const img = document.getElementsByClassName("img-fluid");
const modalImg = document.getElementById("img01");

let i;
let imagesLength = img.length;

for (i = 0; i < imagesLength; i++) {
  img[i].onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
    document.querySelector("body").style.overflow = "hidden";
  };
}

const span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  modal.style.display = "none";
  document.querySelector("body").style.overflow = "auto";
};

modal.ondblclick = function() {
  modal.style.display = "none";
  document.querySelector("body").style.overflow = "auto";
};
