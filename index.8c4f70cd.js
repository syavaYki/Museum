new Swiper(".swiper",{// Optional parameters
direction:"horizontal",// centeredSlides: true,
spaceBetween:20,slidesPerView:"auto",effect:"slide",// If we need pagination
pagination:{el:".swiper-pagination",clickable:!0},// Navigation arrows
navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}});/* #region hide menu icon on click */const e=document.querySelector(".page__menu-icon-img"),i=document.querySelector(".menu__close-link"),n=document.querySelectorAll(".menu__nav-list .menu__nav-list-item");e?.addEventListener("click",()=>{e.classList.toggle("page__menu-icon-img--hide-show")}),i?.addEventListener("click",()=>{e.classList.toggle("page__menu-icon-img--hide-show")}),n?.forEach(i=>{i?.addEventListener("click",()=>{e.classList.toggle("page__menu-icon-img--hide-show")})});/* #end hide menu icon on click *///# sourceMappingURL=index.8c4f70cd.js.map

//# sourceMappingURL=index.8c4f70cd.js.map
