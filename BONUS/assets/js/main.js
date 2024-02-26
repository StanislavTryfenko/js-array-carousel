
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
const opacity = document.querySelector('.img_list') //bonus

//slider cycle
for (let i = 0; i < slides.length; i++) {

    //create img on html
    const img = document.createElement('img'); 

    //src correct i img
    img.src = `./assets/img/${slides[i]}`;

    //some css
    img.style.width = '100%';
    img.style.height = '100%';

    //disaplay style if active (true) d-block else d-none
    img.style.display = i === activeImg ? 'block' : 'none';

    //add on .slides the img
    slidesElement.appendChild(img);

    opacity.style.opacity = i === activeImg ? '30%' : '100%';
}

//prev button 
prevElement.addEventListener('click', function() {

    //take old img  to none (it counts childrens number using activeImg value)
    slidesElement.children[activeImg].style.display = 'none';
    
    //bonus opacity toggle
    opacity.children[activeImg].style.opacity = '30%';
    
    //go to prev img (and go to last img in going out of the array)
    activeImg--
    if(activeImg < 0){
        activeImg = slides.length - 1;
    }
    /* //fancy alternative found online FAVOURITE
    activeImg = (activeImg - 1 + slides.length) % slides.length; */
    
    //take new img to display block 
    slidesElement.children[activeImg].style.display = 'block';
    
    //bonus opacity toggle
    opacity.children[activeImg].style.opacity = '100%';
});

//next button
nextElement.addEventListener('click', function() {

     //take old img  to none (it counts childrens number using activeImg value)
    slidesElement.children[activeImg].style.display = 'none';
    
    //bonus opacity toggle
    opacity.children[activeImg].style.opacity = '30%';
    
    //go to next img (and go to first img if going out of the array)
    activeImg++
    if(activeImg > slides.length - 1){
        activeImg = 0;
    }
    /* //fancy alternative found online FAVOURITE
    activeImg = (activeImg + 1) % slides.length; */
    
    //take new img to display block (it counts childrens number using activeImg value)
    slidesElement.children[activeImg].style.display = 'block';
    
    //bonus opacity toggle
    opacity.children[activeImg].style.opacity = '100%';
});

