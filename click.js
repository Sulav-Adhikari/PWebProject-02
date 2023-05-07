const dropdownToggle = document.querySelectorAll('.dropdown-menu');

dropdownToggle.forEach(function (toggle) {
  toggle.addEventListener('click', function (e) {
    e.preventDefault();
    const dropdownMenu = toggle.nextElementSibling;
    dropdownMenu.classList.toggle('show');
  });
});