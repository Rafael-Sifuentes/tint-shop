
// ALL BUTTON ONCLICK FUNCTIONS


function callNumber() {
    var phoneNumber = "9366398468";
    window.location.href = "tel:" + phoneNumber;
}

function getDirections(){
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var userLatitude 
 = position.coords.latitude;
      var userLongitude = position.coords.longitude; 


      var directionsURL = "https://www.google.com/maps/dir/?api=1&origin=" + userLatitude + "," + userLongitude + "&destination=602+South+Timberland+Dr,+Lufkin,+TX";

      window.open(directionsURL, '_blank');

    }, function(error) {
      var directionsURL = "https://www.google.com/maps/dir/?api=1&destination=602+South+Timberland+Dr,+Lufkin,+TX";

      window.open(directionsURL, '_blank');

      console.error("Error getting user location:", error);
    });
  } else {
    var directionsURL = "https://www.google.com/maps/dir/?api=1&destination=602+South+Timberland+Dr,+Lufkin,+TX";

    // Open the directions in a new tab
    window.open(directionsURL, '_blank');

    console.log("Geolocation is not supported by this browser.");
  }
}

function openTikTok(){
  var tikTokUrl = "https://www.tiktok.com/search?q=thetintshopguy&t=1694467332575";
  window.open(tikTokUrl, '_blank')
}

function openInsta(){
  var instaUrl = "https://www.instagram.com/thetintshoptx/"
  window.open(instaUrl, '_blank')
}

function openFacebook(){
  var faceUrl = "https://www.facebook.com/thetintshoplufkin/"
  window.open(faceUrl, '_blank')
}

function openReview() {
  const url = "https://www.google.com/localservices/prolist?g2lbs=AOHF13kNgjft0ZJT79xmF1p-uLiR_wBzcGohTplU-WplEtOb7fxjs5Hhn69YPNc1_TBCqGups3go&hl=en-US&gl=us&cs=1&ssta=1&q=window%20tint%20in%20lufkin&oq=window%20tint%20in%20lufkin&slp=MgBSAggCYAB6vAJDaFYzYVc1a2IzY2dkR2x1ZENCcGJpQnNkV1pyYVc1STZjQ3NfOUsyZ0lBSVdpRVFBQkFCR0FBWUFSZ0RJaFYzYVc1a2IzY2dkR2x1ZENCcGJpQnNkV1pyYVc2U0FSWjNhVzVrYjNkZmRHbHVkR2x1WjE5elpYSjJhV05sbWdFa1EyaGtSRk5WYUU1TlJ6bHVVekJXU2xFd1JtNVRWVTV2WTFWNE5sWkViRE5TVWtGQ3FnRmpDZ2t2YlM4d05qSTBOSEFLQ0M5dEx6QmtOSFkwRUFFcUR5SUxkMmx1Wkc5M0lIUnBiblFvQURJZUVBRWlHbXVkMDJhRUtHbzUydWxlYzVzbDB4NGFpdWRxSmZTS1czZGRNaGtRQWlJVmQybHVaRzkzSUhScGJuUWdhVzRnYkhWbWEybHU0QUVBkgGeAQoNL2cvMTFydDl3M3d5YgoNL2cvMTFma2Y4MW5uMgoNL2cvMTFxbnJ6cTgzOQoLL2cvMXRoZmZ0cXYKCy9nLzF0ZnZ6ajcxCg0vZy8xMWJ3NjU2Z183Cg0vZy8xMWNsd245MHZjCgsvZy8xdGo3ZmZjcAoML2cvMTI2MGY1N2Q0Cg0vZy8xMXMxdG5rMmc0Cg0vZy8xMWg2NTAwY3cx&src=2&spp=Cg0vZy8xMXFucnpxODM5OowCV2lFUUFCQUJHQUFZQVJnREloVjNhVzVrYjNjZ2RHbHVkQ0JwYmlCc2RXWnJhVzZTQVJaM2FXNWtiM2RmZEdsdWRHbHVaMTl6WlhKMmFXTmxtZ0VrUTJoa1JGTlZhRTVOUnpsdVV6QldTbEV3Um01VFZVNXZZMVY0TmxaRWJETlNVa0ZDcWdGakNna3ZiUzh3TmpJME5IQUtDQzl0THpCa05IWTBFQUVxRHlJTGQybHVaRzkzSUhScGJuUW9BREllRUFFaUdtdWQwMmFFS0dvNTJ1bGVjNXNsMHg0YWl1ZHFKZlNLVzNkZE1oa1FBaUlWZDJsdVpHOTNJSFJwYm5RZ2FXNGdiSFZtYTJsdQ%3D%3D&serdesk=1&lrlstt=1731357797383&ved=2ahUKEwjX4bqxktWJAxXdMtAFHfqQGqkQvS56BAgvEAE&scp=ChtnY2lkOndpbmRvd190aW50aW5nX3NlcnZpY2USNBISCbGzqhk9NziGEUm_EsH0eUNJIgZMdWZraW4qFA3jDqASFfPrf8cd02u1EiXPZZTHMAAaC3dpbmRvdyB0aW50IhV3aW5kb3cgdGludCBpbiBsdWZraW4qFldpbmRvdyB0aW50aW5nIHNlcnZpY2U6AjAC"; 
  window.open(url, '_blank');
}

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' }); 
    }
}

function toggleQuestion(questionElement) {
    questionElement.classList.toggle("is-active");
}

function toggleNavBtn(toggleElement){
  toggleElement.classList.toggle("is-clicked")

  const callBtn = document.getElementById("nav-call")

  callBtn.classList.toggle("active")
}



// GALLERY SWIPER JS CONTROLS
var swiper = new Swiper('.gallery-swiper-container', {
    slidesPerView: 1,
    spaceBetween: 24,
    speed: 800,
    loop: true,
  
     autoplay: {
         delay: 2000,
         disableOnInteraction: true,
       },
  
      navigation: {
        nextEl: '.gallery-next',
        prevEl: '.gallery-prev',
    },
    
       breakpoints: {

        744:{
            slidesPerView: 2,
        },
  
         1080: {
           slidesPerView: 3,
         },
     },
  });


  // PARALLAX EFFECT JS
  document.addEventListener("DOMContentLoaded", function() {
    gsap.registerPlugin(ScrollTrigger);
  });  

  gsap.to(".home-background-video", {
    y: "300px",
    scrollTrigger: {
        trigger: "#home",
        start: "top top",
        end : "bottom top",
        scrub: true
    }
  })



// SCROLL REVEAL JS
const sr = ScrollReveal({
  distance: '40px',
  duration: 2000,
})

sr.reveal(`.section-title, .home-title`,{
  origin: 'top',
})

sr.reveal(`.section-subtitle, .section-header-line, .home-subtitle`, {
  origin: 'top',
  delay: 400,
  interval: 350,
})

sr.reveal(`.about-list-item, .home-list-item`, {
  origin: 'top',
  delay: 400,
  interval: 200
})