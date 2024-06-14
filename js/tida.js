document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('[data-navbar]');
    const navCloseBtn = document.querySelector('[data-nav-close-btn]');
    const navLinks = document.querySelectorAll('.navbar-link');

    document.querySelector('.logo').addEventListener('click', (e) => {
        e.preventDefault(); // Prevent the default anchor click behavior
        navbar.classList.toggle('open');
    });

    navCloseBtn.addEventListener('click', () => {
        navbar.classList.remove('open');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navbar.classList.remove('open');
        });
    });
});
const slider = document.querySelector(".slider"),
firstImg = slider.querySelectorAll("img")[0],
arrowIcons = document.querySelectorAll(".wrapper i");
let isDragStart = false, isDragging = false, prevPageX, prevScrollLeft, positionDiff;
const showHideIcons = () => {
    // showing and hiding prev/next icon according to carousel scroll left value
    let scrollWidth = slider.scrollWidth - slider.clientWidth; // getting max scrollable width
    arrowIcons[0].style.display = slider.scrollLeft == 0 ? "none" : "block";
    arrowIcons[1].style.display = slider.scrollLeft == scrollWidth ? "none" : "block";
}
arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        let firstImgWidth = firstImg.clientWidth + 14; // getting first img width & adding 14 margin value
        // if clicked icon is left, reduce width value from the carousel scroll left else add to it
        slider.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
        setTimeout(() => showHideIcons(), 60); // calling showHideIcons after 60ms
    });
});
const autoSlide = () => {
    // if there is no image left to scroll then return from here
    if(slider.scrollLeft - (slider.scrollWidth - slider.clientWidth) > -1 || slider.scrollLeft <= 0) return;
    positionDiff = Math.abs(positionDiff); // making positionDiff value to positive
    let firstImgWidth = firstImg.clientWidth + 14;
    // getting difference value that needs to add or reduce from carousel left to take middle img center
    let valDifference = firstImgWidth - positionDiff;
    if(slider.scrollLeft > prevScrollLeft) { // if user is scrolling to the right
        return slider.scrollLeft += positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
    }
    // if user is scrolling to the left
    slider.scrollLeft -= positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
}
const dragStart = (e) => {
    // updatating global variables value on mouse down event
    isDragStart = true;
    prevPageX = e.pageX || e.touches[0].pageX;
    prevScrollLeft = slider.scrollLeft;
}
const dragging = (e) => {
    // scrolling images/carousel to left according to mouse pointer
    if(!isDragStart) return;
    e.preventDefault();
    isDragging = true;
    slider.classList.add("dragging");
    positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
    slider.scrollLeft = prevScrollLeft - positionDiff;
    showHideIcons();
}
const dragStop = () => {
    isDragStart = false;
    slider.classList.remove("dragging");
    if(!isDragging) return;
    isDragging = false;
    autoSlide();
}
slider.addEventListener("mousedown", dragStart);
slider.addEventListener("touchstart", dragStart);
document.addEventListener("mousemove", dragging);
slider.addEventListener("touchmove", dragging);
document.addEventListener("mouseup", dragStop);
slider.addEventListener("touchend", dragStop);