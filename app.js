const image = document.querySelector('.rotate-image');
const acontainer = document.querySelector('.animation-container');
//let lastScrollY = 0;
let startY = 0;
function rotateImageOnScroll() {
    const scrollY = window.scrollY;
     

    const rect = image.getBoundingClientRect()
    const imageCenter = rect.top + rect.height / 2;
    //const s = scrollY - lastScrollY;
    if (imageCenter <= window.innerHeight/2) {
        if (startY == 0)  {
            startY = scrollY;
        }
        scrollYlast = scrollY-startY;
        image.style.transform = `rotate(${(scrollYlast/7)}deg)`;
        $('.animation-container').addClass('fixed-element')
    }
}
//https://www.youtube.com/watch?v=T33NN_pPeNI&t=164s
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

//window.addEventListener('scroll', rotateImageOnScroll);



//window.addEventListener('scroll', rotateImageOnScroll);
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((element) => observer.observe(element));





