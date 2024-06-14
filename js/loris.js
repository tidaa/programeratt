const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

const initSlider = () => {
  const imageList = document.querySelector(".slider-wrapper .image-list");
  const slideButtons = document.querySelectorAll(".slider-wrapper .slide-button");
  // const sliderScrollbar = document.querySelector(".container .slider-scrollbar ");
  // const scrollbarThumb = sliderScrollbar.querySelector(".scrollbar-thumb")
  const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;

  // })


slideButtons.forEach(button => {
    button.addEventListener("click", () => {
      const director = button.id === "prev-slide" ? -1 : 1;
      const scrollAmount = imageList.clientWidth * director;
      imageList.scrollBy({ left: scrollAmount, behavior: "smooth"});
    });
  });

const handleSlideButtons = () => {
  slideButtons[0].style.display = imageList.scrollLeft <= 0 ? "none" : "block";
  slideButtons[1].style.display = imageList.scrollLeft >= maxScrollLeft? "none" : "block"
}

// const updateScrollThumbPosition = () => {
//  const scrollPosition = imageList.scrollLeft;
//  const thumbPosition = (scrollPosition / maxScrollLeft) * (sliderScrollbar.clientWidth - scrollbar-thumb.offsetWidth);
//  scrollbarThumb.style.left = '$(thumbPosition)px';
// }

    imageList.addEventListener("scroll", () => {
         handleSlideButtons();
    });
}

window.addEventListener("load", initSlider);

ScrollReveal().reveal(".header__image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".header__content h2", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".order__card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".event__content", {
  duration: 1000,
});

let speech = new SpeechSynthesisUtterance();




document.querySelector("button").addEventListener("click", () =>{
  speech.text = document.querySelector("textarea").value;
  window.speechSynthesis.speak(speech);
});




function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds}`;
    document.getElementById('clock').textContent = timeString;
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initial call to update clock immediately
updateClock();