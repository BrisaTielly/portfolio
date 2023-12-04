export function menuMobile() {
  const menuButton = document.querySelector('[data-menu="button"]');
  const menuList = document.querySelector('[data-menu="list"]');

  ["click", "touchstart"].forEach((event) => {
    menuButton.addEventListener(event, openMobileMenu);
  });

  function openMobileMenu() {
    menuList.classList.toggle("open");
    menuButton.classList.toggle("ativo");
  }
}
