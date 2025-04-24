document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("main section");
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-visible");
          }
        });
      },
      {
        threshold: 0.1,
      }
    );
  
    sections.forEach((section) => {
      observer.observe(section);
    });
  
    // Parallax header on scroll
    const header = document.querySelector(".cv-header");
    window.addEventListener("scroll", () => {
      const scrollY = window.scrollY;
      header.style.backgroundPositionY = `${scrollY * 0.3}px`;
    });
  
    // Hover highlight effect
    document.querySelectorAll(".entry").forEach((entry) => {
      entry.addEventListener("mouseenter", () => {
        entry.style.transform = "scale(1.03)";
        entry.style.boxShadow = "0 4px 20px rgba(0,0,0,0.1)";
      });
      entry.addEventListener("mouseleave", () => {
        entry.style.transform = "scale(1)";
        entry.style.boxShadow = "none";
      });
    });
  });
  