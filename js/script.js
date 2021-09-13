let prev = document.getElementById("prev");
let next = document.getElementById("next");
let thumbnail = document.getElementsByClassName("thumbnail");
let hero = document.getElementById("hero");

let backgroundImg = new Array(
    "image/img1.jpg",
    "image/img2.jpg",
    "image/img3.jpg",
    "image/img4.jpg",
    "image/img5.jpg",
);
let i = 0;
next.onclick = function () {

    if (i < 4) {
        hero.style.backgroundImage = 'url("' + backgroundImg[i + 1] + '")';
        thumbnail[i + 1].classList.add("active");
        thumbnail[i].classList.remove("active");
        i++;
    }
 
}

prev.onclick = function () {

    if (i > 0) {
        hero.style.backgroundImage = 'url("' + backgroundImg[i - 1] + '")';
        thumbnail[i - 1].classList.add("active");
        thumbnail[i].classList.remove("active");
        i--;
    }

}