/*=============== Hamburger Menu ===============*/
const hamburger = document.querySelector(".hamburger")
const navMenu = document.querySelector(".navbar")
const navLink = document.querySelector(".nav__link")

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})
navLink.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
})
var navLinks = navMenu.getElementsByTagName('a');
for (var i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener('click', function () {
        navMenu.style.display = 'none';
    });
}
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
document.addEventListener('DOMContentLoaded', () => {
    const productsLink = document.getElementById('productsLink');

    productsLink.addEventListener('click', (event) => {
        event.preventDefault();
        window.location.href = 'file:///C:/Users/Utente/Desktop/mustad%20maroc/index.html#product';
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const productsLink = document.getElementById('AboutLink');

    productsLink.addEventListener('click', (event) => {
        event.preventDefault();
        window.location.href = 'file:///C:/Users/Utente/Desktop/mustad%20maroc/index.html#about';
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const productsLink = document.getElementById('buyLink');

    productsLink.addEventListener('click', (event) => {
        event.preventDefault();
        window.location.href = 'file:///C:/Users/Utente/Desktop/mustad%20maroc/index.html#buy';
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const productsLink = document.getElementById('buyLink1');

    productsLink.addEventListener('click', (event) => {
        event.preventDefault();
        window.location.href = 'file:///C:/Users/Utente/Desktop/mustad%20maroc/index.html#buy';
    });
});
/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 100,
})
sr.reveal('.container-fluid', { delay: 100 })
/*=============== CONTACT FORM VALIDATION ===============*/
document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Validate form fields
    var formIsValid = true;

    // Basic validation for required fields
    var requiredFields = ['firstName', 'lastName', 'email', 'phone', 'city', '00N2400000EtJeo', '00N2400000Istrh'];

    requiredFields.forEach(function (field) {
        var fieldValue = document.getElementById(field).value.trim();
        if (fieldValue === '') {
            formIsValid = false;
        }
    });


});

/*=============== CONTACT FORM SENDER ===============*/


