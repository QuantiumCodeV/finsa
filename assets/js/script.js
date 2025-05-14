var toggleMenuButton = document.querySelector("#mobileMenu");
var menuBlock = document.querySelector("#mobileMenuContent");
var menuBlockItems = document.querySelector("#headerListMobile");
var menuClose = document.querySelector("#mobileMenuClose");
var body = document.body;

toggleMenuButton.addEventListener("click", function (e) {
  var backdrop = document.createElement("div");
  backdrop.classList.add("backdrop");
  body.appendChild(backdrop);
  setTimeout(function () {
    backdrop.classList.add("active");
  }, 200);

  menuBlock.classList.add("active");
  body.classList.add("menu-open");
});

document.addEventListener("click", function (e) {
  var backdropElement = document.querySelector(".backdrop");
  if (toggleMenuButton.contains(e.target)) {
    return;
  }
  if (
    (backdropElement && !menuBlock.contains(e.target)) ||
    menuBlockItems.contains(e.target) ||
    menuClose.contains(e.target)
  ) {
    menuBlock.classList.remove("active");
    body.classList.remove("menu-open");

    backdropElement.classList.remove("active");
    setTimeout(function () {
      backdropElement.remove();
    }, 500);
  }
});
/*
$(document).ready(function () {
  $("#faq > div:first-child").click(function () {
    $(this).next("#faq > div:last-child").slideToggle();
  });
});
*/
document.addEventListener("DOMContentLoaded", function () {
  // Находим все якорные ссылки
  const anchorLinks = document.querySelectorAll('a[href^="#"]');

  // Добавляем обработчик события для каждой ссылки
  anchorLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      // Предотвращаем стандартное поведение ссылки
      e.preventDefault();

      // Получаем ID целевого элемента
      const targetId = this.getAttribute("href");

      // Проверяем, что это не пустой якорь
      if (targetId === "#") return;

      // Находим целевой элемент
      const targetElement = document.querySelector(targetId);

      // Если целевой элемент существует
      if (targetElement) {
        // Плавно скроллим к элементу
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });
});
