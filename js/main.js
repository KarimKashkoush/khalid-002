// End Header 
const button = document.getElementById('nav-icon');
const navbar = document.getElementById('navbar');
const headerSearch = document.getElementById('headerSearch');
const blur = document.getElementById('blur');
const year = new Date().getFullYear()
const yearNow = document.getElementById('yearNow')


yearNow.textContent = year;

button.onclick = (event) => {
    button.classList.toggle('open');
    navbar.classList.toggle('open');
    blur.classList.toggle('blur');
    
    // Toggle scroll lock
    document.body.classList.toggle('scroll-lock');
    
    event.stopPropagation();
};


document.addEventListener('click', (event) => {
    if (!navbar.contains(event.target) && !button.contains(event.target)) {
        navbar.classList.remove('open');
        button.classList.remove('open')
        blur.classList.remove('blur')
        document.body.classList.remove('scroll-lock');
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
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }

});


var swiper2 = new Swiper(".mySwiper2", {
    slidesPerView: 3,
    centeredSlides: true,
    spaceBetween: 30,
    grabCursor: true,
    freeMode: true,
    loop: true,

        breakpoints: {
        0: {
            slidesPerView: 1,
        },
        500: {
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
        1400: {
            slidesPerView: 6,
        },
    }
});

