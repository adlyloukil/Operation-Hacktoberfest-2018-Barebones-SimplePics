"use strict";

const modal = document.getElementById("myModal");

//const modalDiv = document.getElementById
const img = document.getElementsByClassName("img-fluid");
const modalImg = document.getElementById("img01");

let i;
let imagesLength = img.length;

for (i = 0; i < imagesLength; i++) {
  img[i].onclick = function() {
    if (this.classList.contains("header-img"))
      return false;
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
