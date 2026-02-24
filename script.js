// Smooth Scroll
document.querySelector(".btn").addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector("#contact").scrollIntoView({
        behavior: "smooth"
    });
});

// Fade-in effect on scroll
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight - 100) {
            section.style.opacity = "1";
            section.style.transform = "translateY(0)";
        }
    });
});

// Initial hidden state
sections.forEach(section => {
    section.style.opacity = "0";
    section.style.transform = "translateY(40px)";
    section.style.transition = "0.6s ease";
});

// Dark Mode Toggle Button
const darkBtn = document.createElement("button");
darkBtn.innerText = "Toggle Dark Mode";
darkBtn.style.position = "fixed";
darkBtn.style.top = "20px";
darkBtn.style.right = "20px";
darkBtn.style.padding = "8px 12px";
darkBtn.style.borderRadius = "20px";
darkBtn.style.border = "none";
darkBtn.style.cursor = "pointer";

document.body.appendChild(darkBtn);

darkBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

// Dark mode styles
const style = document.createElement("style");
style.innerHTML = `
.dark-mode {
    background: #121212;
    color: white;
}
.dark-mode section {
    background: #1e1e1e;
}
.dark-mode .project {
    background: #2a2a2a;
}
`;
document.head.appendChild(style);