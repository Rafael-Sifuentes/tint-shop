// ETX PRE-LOADER

const hiddenImagePaths = [
  'assets/IMG/home-img.png',
  'assets/IMG/car1.png',
  'assets/IMG/car2.png',
  'assets/IMG/car3.png',
  'assets/IMG/car4.png',
  'assets/IMG/car5.png',
  'assets/IMG/car6.png',
  'assets/IMG/car7.png',
  'assets/IMG/car8.png',
  'assets/IMG/car9.png',
  'assets/IMG/car10.png',
];

let imagesLoaded = 0;

// Function to preload the hidden images
function preloadHiddenImages() {
    hiddenImagePaths.forEach(function (imagePath) {
        const img = new Image();
        img.onload = function () {
            imagesLoaded++;
            if (imagesLoaded === hiddenImagePaths.length) {
                // All hidden images are loaded
                // You can make them visible here
                showHiddenImages();
            }
        };
        img.src = imagePath;
    });
}

// Function to make the hidden images visible
function showHiddenImages() {
    const hiddenImages = document.querySelectorAll(".preload-image");
    hiddenImages.forEach(function (image) {
        image.style.display = "block";
    });

    console.log("Images succsesfully loaded")
}

// Call the preloadHiddenImages function to start preloading
preloadHiddenImages();




/*=============== SCROLL HEADER ===============*/
const scrollHeader = () =>{
    const header = document.getElementById('header')

    this.scrollY >= 50 ? header.classList.add('scroll-header')
                         :header.classList.remove('scroll-header')
}

window.addEventListener('scroll' , scrollHeader)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

    
const scrollActive = () =>{
  	const scrollY = window.pageYOffset

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)


/*==================== SWIPER ====================*/
var swiper = new Swiper(".swiper__container", {

  
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 1,
    loop: true,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    spaceBetween: 22,
    coverflowEffect: {
      rotate: 20,
      slideShadows: false,
      depth: 100,
    },

    breakpoints:{
      700: {
        slidesPerView: 2,
        spaceBetween: 20,

        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        },
      },
    }

    
  });



/*=============== QUESTIONS OPEN / CLOSE ===============*/

const accordionItems = document.querySelectorAll('.questions__item')

accordionItems.forEach((item) =>{
  const accordionHeader = item.querySelector('.questions__header')

  accordionHeader.addEventListener('click', () =>{
    const openItem = document.querySelector('.accordion-open')

    toggleItem(item)

    if(openItem && openItem!== item){
      toggleItem(openItem)
    }
  })
})

const toggleItem = (item) =>{
  const accordionContent = item.querySelector('.questions__content')

  if(item.classList.contains('accordion-open')){
    accordionContent.removeAttribute('style')
    item.classList.remove('accordion-open')
  }else{
    accordionContent.style.height = accordionContent.scrollHeight + 'px'
    item.classList.add('accordion-open')
  }
}  


/*=============== SCROLL REVEAL JS ===============*/
const sr = ScrollReveal({
	distance: '80px',
	duration: 2500,
  })
  
  sr.reveal(`.section__subtitle, .description, .top`,{
	origin: 'top',
  })

  sr.reveal(`.section__title, .bottom`,{
	origin: 'bottom',
  })

  sr.reveal(`.left, .about-list-item, .info-box`,{
    origin: 'left',
  })

  sr.reveal(`.right`,{
    origin: 'right',
  })

  sr.reveal(`.car`,{
    origin: 'right',
    duration: 3500,
    distance: '200px'
  })


  // document.addEventListener("DOMContentLoaded", function () {

  //   function hidePopup(){
  //     const page = document.getElementById('pop-up')
  //     page.style.display = "none"
  //   }

  //   hidePopup()
  //   // Set a timeout to show the popup after 5 seconds
  //   setTimeout(function () {
  //     showPopup();
  //   }, 7000);

  //   // Close the popup when the close button is clicked
  //   document.getElementById("close-button").addEventListener("click", function () {
  //     closePopup();
  //   });

  //   // Function to show the popup
  //   function showPopup() {
  //     document.getElementById("pop-up").style.display = "flex";
  //   }

  //   // Function to close the popup
  //   function closePopup() {
  //     document.getElementById("pop-up").style.display = "none";
  //   }
  // });