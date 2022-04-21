document.addEventListener('DOMContentLoaded' , () => {
    const elementosCarosul = document.querySelectorAll('.carousel');
    M.Carousel.init(elementosCarosul, {
        durattion: 150,
        dist: -80,
        shift: 5,
        padding: 5,
        numVisible: 3,
        indicators: true,
    });
});