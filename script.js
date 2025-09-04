// Ambil semua section
const sections = document.querySelectorAll("section");

// Tambahkan event scroll
window.addEventListener("scroll", () => {
  let scrollY = window.scrollY;

  sections.forEach((sec) => {
    let sectionTop = sec.offsetTop - 200; // jarak trigger animasi
    let sectionHeight = sec.offsetHeight;

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      sec.classList.add("show-animate");
    } else {
      sec.classList.remove("show-animate");
    }
  });
});
