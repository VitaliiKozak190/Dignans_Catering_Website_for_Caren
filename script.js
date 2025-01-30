
// // script for mobile menu

// const hamMenu = document.querySelector(".ham-menu");
// const offScreenMenu = document.querySelector(".off-screen-menu");

// hamMenu.addEventListener("click", () => {
//   hamMenu.classList.toggle("active");
//   offScreenMenu.classList.toggle("active");
// });

document.addEventListener("DOMContentLoaded", function () {
  const hamMenu = document.querySelector(".ham-menu");
  const offScreenMenu = document.querySelector(".off-screen-menu");

  if (hamMenu && offScreenMenu) {
    hamMenu.addEventListener("click", () => {
      hamMenu.classList.toggle("active");
      offScreenMenu.classList.toggle("active");
    });
  }
});



// --Hero Section --

const burgerMenu = document.querySelector(".burger-menu");
const navItems = document.querySelector(".nav-items");

burgerMenu.addEventListener("click", () => {
  navItems.classList.toggle("active");
});

// --about-section--
document.querySelector(".order-btn").addEventListener("click", () => {
  alert("Order button clicked!");
});

document.querySelector(".learn-btn").addEventListener("click", () => {
  alert("Learn More button clicked!");
});

// -- services-section --
document.querySelectorAll(".service-card").forEach((card) => {
  card.addEventListener("mouseover", () => {
    card.style.transform = "scale(1.05)";
    card.style.boxShadow = "0 4px 15px rgba(0, 0, 0, 0.2)";
  });
  card.addEventListener("mouseout", () => {
    card.style.transform = "scale(1)";
    card.style.boxShadow = "0 2px 8px rgba(0, 0, 0, 0.1)";
  });
});

// ---special-offers---
document.querySelector(".btn-order").addEventListener("click", () => {
  alert("Order button clicked!");
});

document.querySelector(".btn-contact").addEventListener("click", () => {
  alert("Contact button clicked!");
});
// script for mobile menu

const hamMenu = document.querySelector(".ham-menu");
const offScreenMenu = document.querySelector(".off-screen-menu");

hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
});

// Script for Special Offer Photo Gallery

const imgContent = document.querySelectorAll(".img-content-hover");

function showImgContent(e) {
  for (var i = 0; i < imgContent.length; i++) {
    x = e.pageX;
    y = e.pageY;
    imgContent[i].style.transform = `translate3d(${x}px, ${y}px, 0)`;
  }
}

document.addEventListener("mousemove", showImgContent);

// Script the Print Menu button

function printMenu() {
  const menuContent = document.getElementById("menu").innerHTML;
  const originalContent = document.body.innerHTML;

  // Replace the page content with menu content for printing
  document.body.innerHTML = menuContent;
  window.print();

  // Restore the original page content after printing
  document.body.innerHTML = originalContent;
}