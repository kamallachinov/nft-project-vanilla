document.addEventListener('DOMContentLoaded', function () {
    const burgerIcon = document.querySelector('.burger-icon');
    const sidebar = document.querySelector('.sidebar');
    const sidebarClose = document.querySelector('.sidebar-close');



    burgerIcon.addEventListener('click', function () {
        console.log("clicked");
        sidebar.classList.toggle('show');
    });

    sidebarClose.addEventListener('click', function () {
        sidebar.classList.remove('show');
    });
});
