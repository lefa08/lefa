document.addEventListener("DOMContentLoaded", () => {
  const preloader = document.getElementById("preloader");
  setTimeout(() => {
    preloader.classList.add("loaded");
    setTimeout(() => preloader.remove(), 500);
  }, 850);

  const nav = document.querySelector(".modern-nav");
  window.addEventListener("scroll", () => nav.classList.toggle("scrolled", window.scrollY > 25));

  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");
  toggle.addEventListener("click", () => {
    const open = links.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open);
  });
  links.querySelectorAll("a").forEach(a => a.addEventListener("click", () => links.classList.remove("open")));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

  const glow = document.querySelector(".cursor-glow");
  window.addEventListener("pointermove", e => {
    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";
  });

  document.getElementById("year").textContent = new Date().getFullYear();
});
