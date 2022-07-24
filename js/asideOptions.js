const previous = document.getElementById("previous");
const next = document.getElementById("next");
const newsf = document.getElementById("newsf");
const news = document.getElementById("newss");

next.addEventListener('click', function changeNext() {
    newsf.style.display = "none";
    newss.style.display = "block";
    next.classList.add("aside_btn_active");
    previous.classList.remove("aside_btn_active");
});

previous.addEventListener('click', function changePrevious() {
    newsf.style.display = "block";
    newss.style.display = "none";
    previous.classList.add("aside_btn_active");
    next.classList.remove("aside_btn_active");
});