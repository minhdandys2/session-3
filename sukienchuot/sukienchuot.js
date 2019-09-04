let imgObj = null;
imgObj = document.getElementById("myImage");

function init() {
    imgObj = document.getElementById("myImage");
    imgObj.style.position= "relative";
    imgObj.style.left= "0px";
}

function remoRight() {
    imgObj.style.left = parseInt(imgObj.style.left) + 10 + "px";
    
}
window.onload = init;
function remoLeft() {
    imgObj.style.left = parseInt(imgObj.style.left) - 10 + "px"

}