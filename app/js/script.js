// Toggle menu
const nav = document.querySelector(".header__nav");
const navToggler = document.querySelector(".header__btn");

navToggler.addEventListener("click", () => {
  nav.classList.toggle("active");
  
  let itemsClicked = nav.querySelectorAll("li > a");
  for (let item of itemsClicked) {
    item.addEventListener('click' , ()=> {
      nav.classList.remove('active')
    })
  }

  if (nav.classList.contains("active")) {
    trapFocus(nav);
  } 
});


// Change background image when resizing with observer
const header = document.querySelector(".header");
const observer = new ResizeObserver((entries) => {
  headerElement = entries[0];
  const isBigger = headerElement.contentRect.width >= 600;
  const bgImageDesktop =
    "url(./images/desktop/image-header.jpg) center /cover no-repeat";
  headerElement.target.style.background = isBigger ? bgImageDesktop : "";
});
observer.observe(header);

// Change images when resizing
function displayWindowSize() {
  var w = document.documentElement.clientWidth;

  if (w > 768) {
    document.querySelector("[data-image1]").src =
      "./images/desktop/image-transform.jpg";
    document.querySelector("[data-image2]").src =
      "./images/desktop/image-stand-out.jpg";
    document.querySelector("[data-image3]").src =
      "./images/desktop/image-gallery-milkbottles.jpg";
    document.querySelector("[data-image4]").src =
      "./images/desktop/image-gallery-orange.jpg";
    document.querySelector("[data-image5]").src =
      "./images/desktop/image-gallery-cone.jpg";
    document.querySelector("[data-image6]").src =
      "./images/desktop/image-gallery-sugar-cubes.jpg";
  } else {
    document.querySelector("[data-image1]").src =
      "./images/mobile/image-transform.jpg";
    document.querySelector("[data-image2]").src =
      "./images/mobile/image-stand-out.jpg";
    document.querySelector("[data-image3]").src =
      "./images/mobile/image-gallery-milkbottles.jpg";
    document.querySelector("[data-image4]").src =
      "./images/mobile/image-gallery-orange.jpg";
    document.querySelector("[data-image5]").src =
      "./images/mobile/image-gallery-cone.jpg";
    document.querySelector("[data-image6]").src =
      "./images/mobile/image-gallery-sugar-cubes.jpg";
  }
}

window.addEventListener("resize", displayWindowSize);
displayWindowSize();

let focusableEls = document.querySelectorAll("[data-focus]");
let firstFocusableEl = focusableEls[1];
let lastFocusableEl = focusableEls[focusableEls.length - 1];

//When mobile menu is opened, trap focus inside menu when tabbing
function trapFocus(element) {
  element.addEventListener("keydown", function (e) {
    const isTabPressed = (e) => e.key === "Tab" || e.keyCode === 9;

    if (!isTabPressed) {
      return;
    }

    if (e.shiftKey) {
      /* shift + tab */ if (document.activeElement === firstFocusableEl) {
        lastFocusableEl.focus();
        e.preventDefault();
      }
    } /* tab */ else {
      if (document.activeElement === lastFocusableEl) {
        firstFocusableEl.focus();
        e.preventDefault();
      }
    }
  });
}
