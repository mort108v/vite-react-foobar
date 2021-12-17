const toggleForm = () => {
  if (!showSignup) {
    hamburger.classList.add("open");
    userForm.classList.add("open");
    formNav.classList.add("open");
    formItems.forEach((item) => item.classList.add("open"));
    showSignup = true;
    nav.classList.remove("open");
    menuNav.classList.remove("open");
    navItems.forEach((item) => item.classList.remove("open"));
  } else {
    hamburger.classList.remove("open");
    userForm.classList.remove("open");
    formNav.classList.remove("open");
    formItems.forEach((item) => item.classList.remove("open"));

    showSignup = false;
  }
};

export default toggleForm;
