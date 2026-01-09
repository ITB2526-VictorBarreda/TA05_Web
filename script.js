// Expand/collapse project boxes
const boxes = document.querySelectorAll(".project-box");

if (document.body.contains(document.querySelector("main.project-list"))) {
  boxes.forEach(box => {
    const isDetailForced =
      box.parentElement.tagName.toLowerCase() === "main" &&
      box.classList.contains("active") &&
      box.querySelector("ul");

    if (!isDetailForced) {
      box.addEventListener("click", () => {
        box.classList.toggle("active");
      });
    }
  });
}

// Highlight active footer link
const footerLinks = document.querySelectorAll(".footer-menu a");
footerLinks.forEach(link => {
  link.addEventListener("click", () => {
    footerLinks.forEach(l => l.classList.remove("active"));
    link.classList.add("active");
  });
});

// Validate contact form
const form = document.getElementById("contactForm");
if (form) {
  form.addEventListener("submit", e => {
    const message = document.getElementById("message").value.trim();
    if (message.length === 0 || message.length > 200) {
      e.preventDefault();
      alert("Your message must be between 1 and 200 characters.");
    }
  });
}
// Scroll to top button
const scrollTopBtn = document.getElementById("scrollTopBtn");

window.onscroll = function () {
  if (scrollTopBtn) {
    scrollTopBtn.style.display = window.scrollY > 300 ? "block" : "none";
  }
};

if (scrollTopBtn) {
  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}
