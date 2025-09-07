(() => {
  const openBtns = document.querySelectorAll("[data-modal-open]");
  const closeBtns = document.querySelectorAll("[data-modal-close]");
  const menuLinks = document.querySelectorAll(".mob-menu-link");

  openBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const modalName = btn.getAttribute("data-modal-open");
      const modal = document.querySelector(`[data-modal="${modalName}"]`);
      modal.classList.add("is-open");
    });
  });

  closeBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const modal = btn.closest("[data-modal]");
      modal.classList.remove("is-open");
    });
  });

  menuLinks.forEach(link => {
    link.addEventListener("click", () => {
      const modal = link.closest("[data-modal]");
      modal.classList.remove("is-open");
    });
  });
})();