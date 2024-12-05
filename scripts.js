// Resaltar el enlace activo
document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll("nav ul li a");
    const currentURL = window.location.href;

    links.forEach(link => {
        if (currentURL.includes(link.getAttribute("href"))) {
            link.style.backgroundColor = "#4CAF50";
            link.style.color = "white";
        }
    });
});
