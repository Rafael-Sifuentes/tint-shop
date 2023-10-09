

/*=============== SCROLL HEADER ===============*/
const scrollHeader = () =>{
    const header = document.getElementById('header')

    this.scrollY >= 50 ? header.classList.add('scroll-header')
                         :header.classList.remove('scroll-header')
}

/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form');
const placeOrderButton = document.getElementById('place-order-button');
const contactMessage = document.getElementById('contact-message');

const sendEmail = (e) => {
    e.preventDefault();
    // Check if the form is valid before sending the email

    if (contactForm.checkValidity()) {
        emailjs.sendForm('service_98dsqei', 'template_4w8jz1z', '#contact-form', 'dDqwOI5hFi24hWr34')
            .then(() => {
                contactMessage.textContent = 'Order started, redirecting to payment page ✅';
                window.location.href = 'https://buy.stripe.com/dR601Z2ph31A6rK5kk';
            })
            .catch(() => {
                contactMessage.textContent = 'Message not sent (service error) ❌';
                alert('Message not sent successfully (service error)');
            });
    } else {
        // Handle form validation errors
        contactMessage.textContent = 'Please fill in all required fields.';
    }
}

contactForm.addEventListener('submit', sendEmail);
placeOrderButton.addEventListener('click', sendEmail);