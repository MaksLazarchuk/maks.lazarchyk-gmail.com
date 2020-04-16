const img = document.querySelector("#main-header .container>img")
function parallax(){
    // console.log(window.scrollY)
    img.style.transform = "translateY("+window.scrollY/2+"px)"
}
window.addEventListener("scroll", parallax)
console.log(img)