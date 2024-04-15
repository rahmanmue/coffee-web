// Toggle class active menu
const navbarNav = document.querySelector(".navbar-nav");
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Toggle class active search
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");

document.querySelector("#search-button").onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};

const shoppingCart = document.querySelector(".shopping-cart");
const shoppingcartButton = document.querySelector("#shopping-cart");

shoppingcartButton.onclick = (e) => {
  shoppingCart.classList.toggle("active");
};

// klik dluar sidebar untuk menghilangkan sidebar
const hamburgerMenu = document.querySelector("#hamburger-menu");
const searchButton = document.querySelector("#search-button");

document.addEventListener("click", function (e) {
  if (!hamburgerMenu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }

  if (!searchButton.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }

  if (
    !shoppingcartButton.contains(e.target) &&
    !shoppingCart.contains(e.target)
  ) {
    shoppingCart.classList.remove("active");
  }
  e.preventDefault();
});

// modal
const itemDetailButton = document.querySelectorAll(".item-detail-button");
const itemDetailModal = document.querySelector("#item-detail-modal");

itemDetailButton.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModal.style.display = "flex";
    e.preventDefault();
  };
});

document.querySelector(".modal .close-icon").onclick = (e) => {
  itemDetailModal.style.display = "none";
  e.preventDefault();
};

// klik diluar modal

window.onclick = (e) => {
  if (e.target === itemDetailModal) {
    itemDetailModal.style.display = "none";
    e.preventDefault();
  }
};
