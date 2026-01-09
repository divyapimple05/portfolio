// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href"))
            .scrollIntoView({ behavior: "smooth" });
    });
});

// Dark mode toggle
const btn = document.getElementById("darkBtn");
btn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    btn.textContent = 
        document.body.classList.contains("dark") ? "☀️" : "🌙";
});
