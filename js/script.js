// Reveal-on-scroll
const revealEls = document.querySelectorAll(".reveal");
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("in");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
revealEls.forEach((el) => revealObserver.observe(el));

// Active nav link on scroll
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a");
const navObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const id = entry.target.getAttribute("id");
    const link = document.querySelector(`.nav-links a[href="#${id}"]`);
    if (!link) return;
    if (entry.isIntersecting) {
      navLinks.forEach((l) => l.classList.remove("active"));
      link.classList.add("active");
    }
  });
}, { rootMargin: "-40% 0px -50% 0px" });
sections.forEach((s) => navObserver.observe(s));

// Mobile nav (simple toggle — falls back to anchor navigation)
const burger = document.getElementById("navBurger");
const navLinksList = document.querySelector(".nav-links");
if (burger) {
  burger.addEventListener("click", () => {
    const isOpen = navLinksList.style.display === "flex";
    navLinksList.style.display = isOpen ? "none" : "flex";
    navLinksList.style.flexDirection = "column";
    navLinksList.style.position = "fixed";
    navLinksList.style.top = "64px";
    navLinksList.style.right = "24px";
    navLinksList.style.background = "#ffffff";
    navLinksList.style.border = "1px solid #e2e6ec";
    navLinksList.style.boxShadow = "0 20px 40px -24px rgba(10,37,64,0.25)";
    navLinksList.style.borderRadius = "14px";
    navLinksList.style.padding = "18px 24px";
    navLinksList.style.gap = "16px";
    navLinksList.style.zIndex = "200";
  });
  navLinksList.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => { navLinksList.style.display = "none"; });
  });
}
