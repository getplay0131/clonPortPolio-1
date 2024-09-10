document.addEventListener("DOMContentLoaded", () => {
  let menuIcon = document.querySelector("#menu-icon");
  let navbar = document.querySelector(".navbar");

  let sections = document.querySelectorAll("section");
  let navLinks = document.querySelectorAll("header nav a");
  const social_icon = document.querySelectorAll(".social-icon");

  social_icon.forEach((icon) => {
    icon.addEventListener("click", () => {
      alert("현재 해당 기능은 작업중입니다. 빠른 시일 내 조치하겠습니다.");
    });
  });
  window.onscroll = () => {
    sections.forEach((sec) => {
      let top = window.scrollY;
      let offset = sec.offsetTop - 150;
      let height = sec.offsetHeight;
      let id = sec.getAttribute("id");

      if (top >= offset && top < offset + height) {
        navLinks.forEach((links) => {
          links.classList.remove("active");
          document
            .querySelector("header nav a[href*=" + id + "]")
            .classList.add("active");
        });
      }
    });
  };

  menuIcon.addEventListener("click", () => {
    menuIcon.style.transition = "0.5s ease";
    menuIcon.classList.toggle("bx-x");
    navbar.classList.toggle("active");
  });
  //   end ---------------------------------
});
