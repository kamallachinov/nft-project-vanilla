document.addEventListener("DOMContentLoaded", function () {
    var frameDivs = document.querySelectorAll('.frame div');

    frameDivs.forEach(function (div) {
        div.addEventListener('click', function () {
            frameDivs.forEach(function (d) {
                d.classList.remove('active');
            });

            div.classList.add('active');
        });
    });
});