const year = document.querySelector("[data-year]");
if (year) {
  year.textContent = new Date().getFullYear();
}

const header = document.querySelector("[data-header]");
if (header) {
  const setHeaderState = () => {
    header.classList.toggle("is-scrolled", window.scrollY > 16);
  };

  setHeaderState();
  window.addEventListener("scroll", setHeaderState, { passive: true });
}
