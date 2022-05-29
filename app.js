const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const dots = $$('.tab-item')
const slides = $$('.slide-users')
const prevBtn = $('.prev_footer')
const nextBtn = $('.next_footer')
const numberOfSilides = slides.length
var slideNumber = 0
var slideIndex = 0
var taskbar = $('.options');
const skillsSection = $('.skills-section')
const progressBars = $$('.container-skills-progress-bar')

const optionElements = $$('.option-item')
const extendElements = $$('.extend')

// img project 
var img_projects = document.querySelectorAll('.case-item img')
var gallery = document.querySelector('.gallery')
var galleryIMG = document.querySelector('.gallery__inner img')
var close = document.querySelector('.close__icon')
var prev = document.querySelector('.prev')
var next = document.querySelector('.next')

optionElements.forEach((option, index) => {
    const extendElement = extendElements[index]
    option.onclick = function () {
        clickTop()

        $('.option-item.active').classList.remove('active')
        $('.extend.active').classList.remove('active')

        this.classList.add('active')
        extendElement.classList.add('active')
    }
})

function clickTop() {
    document.documentElement.scrollTop = 0;
}

// Skill
function showProgress() {
    progressBars.forEach(progressBar => {
        const value = progressBar.dataset.progress;
        progressBar.style.opacity = 1;
        progressBar.style.width = `${value}%`;
        progressBar.style.transition = "all 0.4s linear" ;
    });
}

function hideProgress() {
    progressBars.forEach(p => {
        p.style.opacity = 0;
        p.style.width = 0;
        p.style.transition = "all 0.2s linear" ;
    });
}

window.addEventListener('scroll', () => {
    const sectionPositon = skillsSection.getBoundingClientRect().top;
    const screenPositon = window.innerHeight;

    if(sectionPositon < screenPositon){
        showProgress();
    } else {
        hideProgress();
    }
})


window.onscroll = function() {
    if (document.documentElement.scrollTop > 300 || document.body.scrollTop > 300){
        taskbar.style.position = "fixed";
        taskbar.style.top = 0;
        taskbar.style.width = "163.32px" ;
        taskbar.style.marginTop = "30px" ;
        taskbar.style.transition = "all 0.2s linear" ;
    } else {
        taskbar.style.position = "static";
        taskbar.style.marginTop = 0 ;
        taskbar.style.transition = "all 0.2s linear" ;
    }
}

//Ấn vào nút để thay đổi đối tượng slide
dots.forEach((dot, index) => {
    const slide = slides[index]

    dot.onclick = function () {
        $('.tab-item.active').classList.remove('active')
        $('.slide-users.active').classList.remove('active')

        this.classList.add('active')
        slide.classList.add('active')
    }
});
//Next slide
nextBtn.addEventListener('click', () => {
    slides.forEach((slide) => {
        slide.classList.remove('active');
    });
    dots.forEach((dot) => {
        dot.classList.remove('active');
    });

    slideNumber++;

    if(slideNumber > (numberOfSilides - 1)){
        slideNumber = 0;
    }

    slides[slideNumber].classList.add('active');
    dots[slideNumber].classList.add('active');
});
//Lùi slide
prevBtn.addEventListener('click', () => {
    slides.forEach((slide) => {
        slide.classList.remove('active');
    });
    dots.forEach((dot) => {
        dot.classList.remove('active');
    });

    slideNumber--;

    if(slideNumber < 0){
        slideNumber = numberOfSilides - 1;
    }

    slides[slideNumber].classList.add('active');
    dots[slideNumber].classList.add('active');
});

//Slide autoplay
var playSlide;

var repeater = () => {
    playSlide = setInterval(() => {
        slides.forEach((slide) => {
            slide.classList.remove('active');
        });
        dots.forEach((dot) => {
            dot.classList.remove('active');
        });
    
        slideNumber++;
    
        if(slideNumber > (numberOfSilides - 1)){
            slideNumber = 0;
        }
    
        slides[slideNumber].classList.add('active');
        dots[slideNumber].classList.add('active');
    }, 7000);
}

repeater();

// Show cac project with img gallery
currentIndex = 0

function ShowImg(){
    if(currentIndex == 0){
        prev.classList.add('hide')
    }else{
        prev.classList.remove('hide')
    }
    if(currentIndex == img_projects.length - 1){
        next.classList.add('hide')
    }else{
        next.classList.remove('hide')
    }
    // display
    galleryIMG.src = img_projects[currentIndex].src
    gallery.classList.add('show')
}

img_projects.forEach((item,index)=>{
    item.addEventListener('click',function(){
        currentIndex = index
        ShowImg()
    })
})

close.addEventListener('click',function(){
    gallery.classList.remove('show')
})

// bam nut esc de exit
document.addEventListener('keydown', function(e){
    if(e.keyCode == 27){
        // preventDefault()
        gallery.classList.remove('show')
    }
})

prev.addEventListener('click',function(){
    if(currentIndex>0){
        currentIndex--
        ShowImg()      
    }

})
next.addEventListener('click',function(){
    if(currentIndex < img_projects.length - 1){
        currentIndex++
        ShowImg()      
    }

})

// Show cac certificate with img gallery
currentIndexCertificate = 0


// // img certificate 
var img_certificates = document.querySelectorAll('.list-certificate-item')
var gallery_certificate = document.querySelector('.gallery-certificate')
var galleryCertificate = document.querySelector('.gallery-certificate__inner img')
var closeC = document.querySelector('.close__iconC')
var prevC = document.querySelector('.prevC')
var nextC = document.querySelector('.nextC')

function ShowCertificates(){
    if(currentIndexCertificate == 0){
        prevC.classList.add('hide')
    }else{
        prevC.classList.remove('hide')
    }
    if(currentIndexCertificate == img_certificates.length - 1){
        nextC.classList.add('hide')
    }else{
        nextC.classList.remove('hide')
    }
    // display
    galleryCertificate.src = img_certificates[currentIndexCertificate].src
    gallery_certificate.classList.add('show')
}

img_certificates.forEach((item,index)=>{
    item.addEventListener('click',function(){
        currentIndexCertificate = index
        ShowCertificates()
    })
})

closeC.addEventListener('click',function(){
    gallery_certificate.classList.remove('show')
})

// bam nut esc de exit
document.addEventListener('keydown', function(e){
    if(e.keyCode == 27){
        gallery_certificate.classList.remove('show')
    }
})

prevC.addEventListener('click',function(){
    if(currentIndexCertificate>0){
        currentIndexCertificate--
        ShowCertificates()      
    }

})
nextC.addEventListener('click',function(){
    if(currentIndexCertificate < img_certificates.length - 1){
        currentIndexCertificate++
        ShowCertificates()      
    }

})