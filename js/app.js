// Initialize Swiper 
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    // RESPONSIVE BREAKPOINTS

    breakpoints: {
        // when windows width is > = 600px

        600: {
            slidesPerView: 2,
        },
        // when windows width is > = 1024px

        1024: {
            slidesPerView: 3,
        }

    }
});


/*
function toggleVideo(){
    const trailer = document.querySelector('.trailer');
    const video = document.querySelector('video' );    
    trailer.classList.toggle('active')
    video.currentTime=0;
    video.pause();
}
*/

function toggleVideo() {
    const trailer = document.querySelector('.trailer');
    const iframe = document.querySelector('iframe');
    trailer.classList.toggle('active')
    iframe.currentTime = 0;
    iframe.pause();
}



const closePop = document.querySelector('.close__popup')

closePop.addEventListener('click', () => {
    trailer.style.display='none';
})


/* ASIDE */
const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const themeToggler = document.querySelector(".theme-toggler");

// show sidebar
menuBtn.addEventListener('click', () => {
    sideMenu.style.display = 'block';
})

//close sidebar
closeBtn.addEventListener('click', () =>{
    sideMenu.style.display = 'none';
})