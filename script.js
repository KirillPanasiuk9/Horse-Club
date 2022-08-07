


// MENU
let menuButton = document.getElementsByClassName("menuButton");
let mobileMenu = document.getElementsByClassName("mobileMenu");
let closeMenu = document.getElementsByClassName("closeMenu");

menuButton[0].onclick = function () {
    if (window.screen.width < 400) {
        mobileMenu[0].style.width = "100%"
    } else {
        mobileMenu[0].style.width = "45%"
    }

    mobileMenu[0].style.borderRight = "#008139 5px solid"
}

closeMenu[0].onclick = function () {
    mobileMenu[0].style.width = "0%"
    mobileMenu[0].style.borderRight = "none"
}



// SLIDER FOR GALLERY
let listElems = document.getElementsByClassName("photogallery")[0];
let elemWidth = getComputedStyle(document.getElementsByClassName("firstImage")[0]).width.slice(0,3)
let galleryPosition = 0;
let progressPoint = document.getElementsByClassName("slider_progress_point")[0];
let progressPointPosition = 0;
let shiftRight = document.getElementsByClassName("next")[0];
let shiftLeft = document.getElementsByClassName("prev")[0];

shiftRight.onclick = () => {

    if(window.screen.width < 691 && window.screen.width > 401) {
        if(galleryPosition > -elemWidth*5) {
            galleryPosition -= window.screen.width;
            listElems.style.marginLeft = galleryPosition -50 + "px"
            // progressPointPosition += screen.width/(elemWidth*7)
            progressPointPosition += 0.4
            progressPoint.style.marginLeft = progressPointPosition * 100 + "%"
        } else {console.log("stop")}
    }

    else if (screen.width < 401 ) {
        if(galleryPosition > -elemWidth*7) {
            galleryPosition -= window.screen.width;
            listElems.style.marginLeft = galleryPosition -20 + "px"
            // progressPointPosition += screen.width/(elemWidth*7)
            progressPointPosition += 0.2
            progressPoint.style.marginLeft = progressPointPosition * 100 + "%"
        } else {console.log("stop")}
    }

    else {
        if(galleryPosition > -elemWidth*14) {
            galleryPosition -= window.screen.width;
            listElems.style.marginLeft = galleryPosition + "px"
            progressPointPosition += screen.width/(elemWidth*20)
            progressPoint.style.marginLeft = progressPointPosition * 100 + "%"
        } else {console.log("stop")}
    }


}

shiftLeft.onclick = () => {

    if(window.screen.width < 691 && window.screen.width > 401) {
        if (galleryPosition == 0) {
            progressPointPosition = 0
            progressPoint.style.marginLeft = progressPointPosition + "%"
        } else {
            // progressPointPosition -= screen.width/(elemWidth*7)
            progressPointPosition -= 0.25
            progressPoint.style.marginLeft = progressPointPosition * 100 + "%"
        }
    }

    else if (screen.width < 401 ) {
        if (galleryPosition == 0) {
            progressPointPosition = 0
            progressPoint.style.marginLeft = progressPointPosition + "%"
        } else {
            // progressPointPosition -= screen.width/(elemWidth*7)
            progressPointPosition -= 0.1
            progressPoint.style.marginLeft = progressPointPosition * 100 + "%"
        }
    }

    galleryPosition += window.screen.width;
    galleryPosition = Math.min(galleryPosition, 0);
    listElems.style.marginLeft = galleryPosition + "px"

    if (galleryPosition == 0) {
        progressPointPosition = 0
        progressPoint.style.marginLeft = progressPointPosition + "%"
    } else {
        progressPointPosition -= screen.width/(elemWidth*20)
        progressPoint.style.marginLeft = progressPointPosition * 100 + "%"
    }

}



//ZOOM
let area = document.getElementsByClassName("photogallery")[0];
let currentElem = null;

area.onmouseover = function(event) {
    if (currentElem) return;
    let target = event.target.closest('img');
    if (!target) return;
    currentElem = target;
    target.style.opacity = 0.7;
};

area.onmouseout = function(event) {
    let target = event.target.closest('img');
    target.style.opacity = '';
    currentElem = null;
};



// SLIDER FOR HORSES
let horsesElems = document.getElementsByClassName("ourHorses_element");
let horsesListElems = document.getElementsByClassName("ourHorses_blocks")[0];
let horsesElemWidth = +(getComputedStyle(document.getElementsByClassName("ourHorses_element")[0]).width.slice(0,3));
let horsesCount = 12;
let horsesShiftCount = 3;
let horsesPosition = 0;
let horsesProgressPoint = document.getElementsByClassName("ourHorses_slider_progress_point")[0];
let horsesProgressPointPosition = 0;
let horsesShiftRight = document.getElementsByClassName("ourHorses_next")[0];
let horsesShiftLeft = document.getElementsByClassName("ourHorses_prev")[0];

horsesShiftRight.onclick = () => {
    if(screen.width <= 1175 && screen.width > 400) {
        horsesShiftCount = 2
    }
    if(screen.width <= 400) {
        horsesShiftCount = 1
    }

    horsesPosition -= (horsesElemWidth + 30) * horsesShiftCount
    horsesPosition = Math.max(horsesPosition, (-horsesElemWidth - 30) * (horsesCount - horsesShiftCount));
    horsesListElems.style.marginLeft = horsesPosition + "px"
    if(horsesProgressPointPosition < 0.7) {
        horsesProgressPointPosition += ((horsesElemWidth + 30) * horsesShiftCount)/((horsesElemWidth + 30) * horsesCount)
        horsesProgressPoint.style.marginLeft = horsesProgressPointPosition*100 + "%"
    } else (("stop"))
}

horsesShiftLeft.onclick = () => {
    if(screen.width <= 1175 && screen.width > 400) {
        horsesShiftCount = 2
    }
    if(screen.width <= 400) {
        horsesShiftCount = 1
    }

    horsesPosition += (horsesElemWidth + 30) * horsesShiftCount
    horsesPosition = Math.min(horsesPosition, 0)
    horsesListElems.style.marginLeft = horsesPosition + "px"
    if(horsesPosition == 0) {
        horsesProgressPointPosition = 0;
        horsesProgressPoint.style.marginLeft = "0%"
    } else {
        horsesProgressPointPosition -= ((horsesElemWidth + 30) * horsesShiftCount)/((horsesElemWidth + 30) * horsesCount)
        horsesProgressPoint.style.marginLeft = horsesProgressPointPosition*100 + "%"
    }
}



// SLIDER FOR REVIEWS
let reviewsElems = document.getElementsByClassName("reviews_element");
let reviewsListElems = document.getElementsByClassName("reviews_blocks")[0];
let reviewsElemWidth = +(getComputedStyle(document.getElementsByClassName("reviews_element")[0]).width.slice(0,3));
let reviewsCount = 12;
let reviewsShiftCount = 2;
let reviewsPosition = 0;
let reviewsProgressPoint = document.getElementsByClassName("reviews_slider_progress_point")[0];
let reviewsProgressPointPosition = 0;
let reviewsShiftRight = document.getElementsByClassName("reviews_next")[0];
let reviewsShiftLeft = document.getElementsByClassName("reviews_prev")[0];

reviewsShiftRight.onclick = () => {
    if(screen.width <= 1175) {
        reviewsShiftCount = 1
    }

    reviewsPosition -= (reviewsElemWidth + 30) * reviewsShiftCount
    reviewsPosition = Math.max(reviewsPosition, (-reviewsElemWidth - 30) * (reviewsCount - reviewsShiftCount));
    reviewsListElems.style.marginLeft = reviewsPosition + "px"
    if(reviewsProgressPointPosition < 0.7) {
        reviewsProgressPointPosition += ((reviewsElemWidth + 30) * reviewsShiftCount)/((reviewsElemWidth + 30) * reviewsCount)
        reviewsProgressPoint.style.marginLeft = reviewsProgressPointPosition*100 + "%"
    } else (("stop"))
}

reviewsShiftLeft.onclick = () => {
    if(screen.width <= 1175) {
        reviewsShiftCount = 1
    }

    reviewsPosition += (reviewsElemWidth + 30) * reviewsShiftCount
    reviewsPosition = Math.min(reviewsPosition, 0)
    reviewsListElems.style.marginLeft = reviewsPosition + "px"
    if(reviewsPosition == 0) {
        reviewsProgressPointPosition = 0;
        reviewsProgressPoint.style.marginLeft = "0%"
    } else {
        reviewsProgressPointPosition -= ((reviewsElemWidth + 30) * reviewsShiftCount)/((reviewsElemWidth + 30) * reviewsCount)
        reviewsProgressPoint.style.marginLeft = reviewsProgressPointPosition*100 + "%"
    }
}


if(screen.width > 1175) {
    setInterval(() => opasityOn(horsesElems), 1)
    setInterval(() => opasityOff(horsesElems), 1)
    setInterval(() => opasityOn(reviewsElems), 1)
    setInterval(() => opasityOff(reviewsElems), 1)
}

function opasityOn(elems) {
    Array.from(elems).forEach(((el) => {
        if(el.getBoundingClientRect().x < 50 || el.getBoundingClientRect().x > 1265) {
            el.style.opacity = 0.4;
            el.style.marginTop = "-30px";
        }
    }))
}

function opasityOff(elems) {
    Array.from(elems).forEach(((el) => {
        if(el.getBoundingClientRect().x > 50 && el.getBoundingClientRect().x < 1265) {
            el.style.opacity = "";
            el.style.marginTop = "0px"
        }
    }))
}



