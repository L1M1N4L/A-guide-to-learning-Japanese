// Script to add active class to navigation links on scroll
document.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section, article");
    const navLinks = document.querySelectorAll(".nav-links a");

    let currentSection = "";
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 60) {
            currentSection = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${currentSection}`) {
            link.classList.add("active");
        }
    });
});

function toggleTOC() {
    const tocContent = document.getElementById("toc");
    const toggleBtn = document.querySelector(".toc-toggle-btn");
    if (tocContent.style.display === "none" || tocContent.style.display === "") {
        tocContent.style.display = "block";
        toggleBtn.textContent = "-";
    } else {
        tocContent.style.display = "none";
        toggleBtn.textContent = "+";
    }
}
