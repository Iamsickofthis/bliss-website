document.addEventListener('DOMContentLoaded', function() {
  const searchBtn = document.getElementById('search-btn');
  const cartBtn = document.getElementById('cart-btn');
  const loginBtn = document.getElementById('login-btn');

  const searchForm = document.querySelector('.search-form');
  const shoppingCart = document.querySelector('.shopping-cart');
  const loginForm = document.querySelector('.login-form');

  const menu = document.querySelector('.menu');
  const menuOverlay = document.querySelector('.menu-overlay');
  const menuIcon = document.getElementById('menu-icon');

  searchBtn.addEventListener('click', function() {
    searchForm.classList.toggle('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
  });

  cartBtn.addEventListener('click', function() {
    shoppingCart.classList.toggle('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
  });

  loginBtn.addEventListener('click', function() {
    loginForm.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
  });

  menuIcon.addEventListener('click', function() {
    menu.classList.toggle('active');
    menuOverlay.classList.toggle('active');
  });

  menuOverlay.addEventListener('click', function() {
    menu.classList.remove('active');
    menuOverlay.classList.remove('active');
  });
});

var swiper = new Swiper(".product-slider", {
  loop:true,
  spaceBetween: 20,

  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  
  breakpoints: {
    0: {
      slidesPerView: 1,
     
    },
    768: {
      slidesPerView: 2,
      
    },
    1020: {
      slidesPerView: 3,
     
    },
  },
});


var swiper = new Swiper(".review-slider", {
  loop:true,
  spaceBetween: 20,

  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },

  breakpoints: {
    0: {
      slidesPerView: 1,

    },
    768: {
      slidesPerView: 2,

    },
    1020: {
      slidesPerView: 3,

    },
  },
});
