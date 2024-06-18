var styleNav = document.querySelector(".styleNav");


const handleShow = () => {

  styleNav.style.transition = "all 0.5s ease";
  styleNav.style.left = "0%";
};

const handleHide = () => {
  styleNav.style.transition = "all 0.5s ease";
  styleNav.style.left = "-100%";
};
