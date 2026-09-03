function toggleMenu() {
    const menu = document.querySelector(".nav-links");
    menu.classList.toggle("active");
}

function submitForm(event) {
    event.preventDefault();

    alert("Thank you! Your message has been submitted.");

    event.target.reset();
}