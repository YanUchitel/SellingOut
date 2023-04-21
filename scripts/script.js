function onmouse() {
    document.getElementById('img').src = "../images/AC-Leaf.svg";
}

function outmouse() {
    document.getElementById('img').src = "../images/triforce.svg";
}

function chpage(path) {
    document.getElementById('main-content').setAttribute("w3-include-html", path);
    w3IncludeHTML();
}
var i = 0;
var img = ['images/DS0.jpg', 'images/DS1.png', 'images/DS2.webp'];
function chimg(n) {
    console.log(n);
    i = i + n;
    if (i == 3){
        i = 0;
    }
    document.getElementById('product-img').src = img[i];
}