// End Head



window.onload = () => {
    setTimeout(() => {
        const loading = document.getElementById('loading');
        loading.style.display = 'none';
    }, 1000);
};


// End Header 
var swiper2 = new Swiper(".mySwiper2", {
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

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,

    breakpoints: {
        0: {
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

// Forms Register
function toSignup() {
    let forms = document.forms;
    for (let i = 0; i < forms.length; i++) {
        forms[i].style.right = '0'
    }
}

function toSignin() {
    let forms = document.forms;
    for (let i = 0; i < forms.length; i++) {
        forms[i].style.right = 'calc(-100% - 30px)'
    }
}

function forgetPassword() {
    let forms = document.forms;
    for (let i = 0; i < forms.length; i++) {
        forms[i].style.right = 'calc(-200% - 60px)'
    }
}
