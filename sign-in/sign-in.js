
function signInSuccess() {

    gtag('event', 'sign_in', {
        'method': 'client_sign-in' 
    });
    }

    window.onload = signInSuccess;

// SCROLL REVEAL JS
const sr = ScrollReveal({
    distance: '50px',
    duration: 2000,
  })
  
  sr.reveal(`.logo, .review-button`,{
    origin: 'top',
  })

  sr.reveal(`h4, h3`, {
    origin: 'top',
    delay: 400,
    interval: 350,
  })



  function openReview() {
    const url = "https://www.google.com/localservices/prolist?g2lbs=AOHF13kNgjft0ZJT79xmF1p-uLiR_wBzcGohTplU-WplEtOb7fxjs5Hhn69YPNc1_TBCqGups3go&hl=en-US&gl=us&cs=1&ssta=1&q=window%20tint%20in%20lufkin&oq=window%20tint%20in%20lufkin&slp=MgBSAggCYAB6vAJDaFYzYVc1a2IzY2dkR2x1ZENCcGJpQnNkV1pyYVc1STZjQ3NfOUsyZ0lBSVdpRVFBQkFCR0FBWUFSZ0RJaFYzYVc1a2IzY2dkR2x1ZENCcGJpQnNkV1pyYVc2U0FSWjNhVzVrYjNkZmRHbHVkR2x1WjE5elpYSjJhV05sbWdFa1EyaGtSRk5WYUU1TlJ6bHVVekJXU2xFd1JtNVRWVTV2WTFWNE5sWkViRE5TVWtGQ3FnRmpDZ2t2YlM4d05qSTBOSEFLQ0M5dEx6QmtOSFkwRUFFcUR5SUxkMmx1Wkc5M0lIUnBiblFvQURJZUVBRWlHbXVkMDJhRUtHbzUydWxlYzVzbDB4NGFpdWRxSmZTS1czZGRNaGtRQWlJVmQybHVaRzkzSUhScGJuUWdhVzRnYkhWbWEybHU0QUVBkgGeAQoNL2cvMTFydDl3M3d5YgoNL2cvMTFma2Y4MW5uMgoNL2cvMTFxbnJ6cTgzOQoLL2cvMXRoZmZ0cXYKCy9nLzF0ZnZ6ajcxCg0vZy8xMWJ3NjU2Z183Cg0vZy8xMWNsd245MHZjCgsvZy8xdGo3ZmZjcAoML2cvMTI2MGY1N2Q0Cg0vZy8xMXMxdG5rMmc0Cg0vZy8xMWg2NTAwY3cx&src=2&spp=Cg0vZy8xMXFucnpxODM5OowCV2lFUUFCQUJHQUFZQVJnREloVjNhVzVrYjNjZ2RHbHVkQ0JwYmlCc2RXWnJhVzZTQVJaM2FXNWtiM2RmZEdsdWRHbHVaMTl6WlhKMmFXTmxtZ0VrUTJoa1JGTlZhRTVOUnpsdVV6QldTbEV3Um01VFZVNXZZMVY0TmxaRWJETlNVa0ZDcWdGakNna3ZiUzh3TmpJME5IQUtDQzl0THpCa05IWTBFQUVxRHlJTGQybHVaRzkzSUhScGJuUW9BREllRUFFaUdtdWQwMmFFS0dvNTJ1bGVjNXNsMHg0YWl1ZHFKZlNLVzNkZE1oa1FBaUlWZDJsdVpHOTNJSFJwYm5RZ2FXNGdiSFZtYTJsdQ%3D%3D&serdesk=1&lrlstt=1731357797383&ved=2ahUKEwjX4bqxktWJAxXdMtAFHfqQGqkQvS56BAgvEAE&scp=ChtnY2lkOndpbmRvd190aW50aW5nX3NlcnZpY2USNBISCbGzqhk9NziGEUm_EsH0eUNJIgZMdWZraW4qFA3jDqASFfPrf8cd02u1EiXPZZTHMAAaC3dpbmRvdyB0aW50IhV3aW5kb3cgdGludCBpbiBsdWZraW4qFldpbmRvdyB0aW50aW5nIHNlcnZpY2U6AjAC"; 
    window.open(url, '_blank');
}