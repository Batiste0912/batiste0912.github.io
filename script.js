function toggleMenu() {
    var burger = document.getElementById("burger");
    burger.classList.toggle("cross");
    var nav = document.getElementsByTagName("nav")[0];
    nav.classList.toggle("open");
}