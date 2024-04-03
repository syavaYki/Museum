var e,n,i;new Swiper(".swiper",{// Optional parameters
direction:"horizontal",// centeredSlides: true,
spaceBetween:20,slidesPerView:"auto",effect:"slide",// If we need pagination
pagination:{el:".swiper-pagination",clickable:!0},// Navigation arrows
navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}),e=document.querySelector(".page__menu-icon-img"),n=document.querySelector(".menu__close-link"),i=document.querySelectorAll(".menu__nav-list .menu__nav-list-item"),null==e||e.addEventListener("click",function(){e.classList.toggle("page__menu-icon-img--hide-show")}),null==n||n.addEventListener("click",function(){e.classList.toggle("page__menu-icon-img--hide-show")}),null==i||i.forEach(function(n){null==n||n.addEventListener("click",function(){e.classList.toggle("page__menu-icon-img--hide-show")})});//# sourceMappingURL=index.e1fd4404.js.map

//# sourceMappingURL=index.e1fd4404.js.map
