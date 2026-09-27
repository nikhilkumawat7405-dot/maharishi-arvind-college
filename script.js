function toggleMenu() {
    const menu = document.querySelector(".nav-links");
    menu.classList.toggle("active");
}

function submitForm(event) {
    event.preventDefault();

    alert("Thank you! Your message has been submitted.");

    event.target.reset();
}
function openModal() {
    const modal = document.getElementById("myModal");
    modal.style.display = "flex";
}

function closeModal() {
    const modal = document.getElementById("myModal");
    modal.style.display = "none";
}

window.onclick = function(event) {
    const modal = document.getElementById("myModal");

    if (event.target === modal) {
        modal.style.display = "none";
    }
};
