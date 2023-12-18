function myFunction() {
    let element = document.querySelector(".bottom-nav");
    element.classList.toggle("nav-show");

    let element2 = document.querySelector(".toggle-btn");
    element2.classList.toggle("toggle-open");
}

document.querySelector(".toggle-btn").addEventListener("click", myFunction)
// 
$('.slide').slick({

    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: `<button type="button" class="previous-slick"><i class="fa-solid fa-arrow-left"></i></button>`,
    nextArrow: `<button type="button" class="next-slick"><i class="fa-solid fa-arrow-right"></i></button>`,
});



