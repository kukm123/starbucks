const serchEL = document.querySelector('.search');
const searchInputEL = document.querySelector('input');

serchEL.addEventListener('click', function () {
    searchInputEL.focus();
});
searchInputEL.addEventListener('focus', function(){
    serchEL.classList.add('fouced');
    searchInputEL.setAttribute('placeholder', '통합검색');
})
searchInputEL.addEventListener('blur', function(){
    serchEL.classList.remove('fouced');
    searchInputEL.setAttribute('placeholder', '');
})




const badgeEL = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

window.addEventListener('scroll', _.throttle(function() {
    console.log('windows.scrollY'); 
    if (window.scrollY > 500){
        gsap.to(badgeEL,0.5,{
            opacity:0, 
            display: 'none'
        });
        // {badgeEL.style.display='none'}

        gsap.to(toTopEl, .2, {
            x:0
        });


    }   else {
        gsap.to(badgeEL, .3, {
            opacity: 1,
            display: 'block'
        });
        // {badgeEL.style.display='block'}

        gsap.to(toTopEl, 0.2, {
            x:100
        });
    }

}, 300));

// _.스로틀(함수, 시간) : 시간마다 함수가 실행되도록?

toTopEl.addEventListener('click', function() {
    gsap.to(window, 1, {
        scrollTo: 0
    });
});




const fadeELs = document.querySelectorAll('.visual .fade-in')
fadeELs.forEach(function(fadeEl, index){
    gsap.to(fadeEl, 1, {
        delay: (index + 0.1),
        opacity: 1
    });

});



new Swiper('.notice-line .swiper', {
    direction: 'vertical',
    autoplay: true,
    loop: true
});

new Swiper('.promotion .swiper', {
    slidesPerView: 3,
    spaceBetween: 10,
    centeredSlides: true,
    autoplay:true,
    loop:true,
    // pagination: {
        // el: '.promotion .swiper-pagination',
        // clickable: true
    // },
    // navigation: {
        // prevEl: '.promotion .swiper-prev',
        // nextEl: '.promotion .swiper-next'
    // }
});


function floatingObject(selector) {
    gsap.to(selector, 1, {
        y: 15,
        repeat: -1,
        yoyo: true,
        ease: Power1.saseInOut,
        delay: 3
    });
}

floatingObject('.floating')


const spyEls = document.querySelectorAll('section.scroll-spy')
spyEls.forEach(function (spyEl){
    new ScrollMagic
        .Scene({
            triggerElement: spyEl,
            triggerHook: 0.8,
        })
        .setClassToggle(spyEl, 'show')
        .addTo(new ScrollMagic.Controller());
});


// new Swiper('.awards, .swiper',{
//     autoplay: true,
//     loop: true,
//     spaceBetween: 30,
//     slidesPerView: 6
//     navigation: {
//         prevEl: '.awards .swiper-prev',
//         nextEl: '.awards .swiper-next'
//     }
// });


const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getUTCFullYear();

