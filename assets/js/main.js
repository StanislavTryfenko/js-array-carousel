
// img array
const slides = [
    '01.webp',
    '02.webp',
    '03.webp',
    '04.webp',
    '05.webp',

]

//utility vars
let activeImg = 0;

const slidesElement = document.querySelector('.slides')

const prevElement = document.querySelector('.prev')
const nextElement = document.querySelector('.next')

//slider cycle
for (let i = 0; i < slides.length; i++) {
    const slide = slides[i];

    const slideMarkup = `<img ${ i === activeImg  ? 'style="display: block;"' : 'style="display: none;'} src="./assets/img/${slide}">`
    //console.log(slideMarkup);

    slidesElement.insertAdjacentElement('beforeend', slideMarkup);
}

prevElement.addEventListener('click', function() {
    
    activeImg--
    console.log(activeImg);

})

nextElement.addEventListener('click', function() {

    activeImg++
    console.log(activeImg);
    
})