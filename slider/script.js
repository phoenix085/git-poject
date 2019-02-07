function init() {
    var slider = document.querySelector('.slider');
    slider.addEventListener('click', changeBigPicture);
}

var bigImage = document.createElement('img');

function changeBigPicture(event) {
    var appDiv = document.querySelector('.show-full-img');
    var isFullImgExist = document.querySelector('.show-full-img img');

    var smallImg = event.target.src;
    var srcArr = smallImg.split('/');
    var smallImgName = srcArr[srcArr.length -1];
    var bigImgScr = 'img/big/' + smallImgName;
    
    bigImage.src = bigImgScr;
    appDiv.appendChild(bigImage);
}

window.onload = init;