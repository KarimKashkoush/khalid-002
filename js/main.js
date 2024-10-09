// End Header 
const button = document.getElementById('nav-icon');
const navbar = document.getElementById('navbar');
const headerSearch = document.getElementById('headerSearch');


button.onclick = (event) => {
    button.classList.toggle('open')
    navbar.classList.toggle('open');
    event.stopPropagation(); // منع إغلاق القائمة عند الضغط على الزر
};

document.addEventListener('click', (event) => {
    if (!navbar.contains(event.target) && !button.contains(event.target)) {
        navbar.classList.remove('open');
        button.classList.remove('open')
    }
});


window.onscroll = function () {
    changeBackgroundColor();
};

function changeBackgroundColor() {
    if (document.documentElement.scrollTop > 150) {
        headerSearch.style.display = "block"
    } else {
        headerSearch.style.display = "none"
    }
}
// End Header 


var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

});

var swiper2 = new Swiper(".mySwiper2", {
    slidesPerView: 5,
    spaceBetween: 30,
    loop: true,
    centeredSlides: true,

    speed: 800,

    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        786: {
            slidesPerView: 3,
        },
        991: {
            slidesPerView: 4,
        },
        1200: {
            slidesPerView: 5,
        },
    },
});

