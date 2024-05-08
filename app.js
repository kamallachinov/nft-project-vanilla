

document.addEventListener('DOMContentLoaded', function () {
    var frameDiv = document.querySelector('.frame');

    frameDiv.addEventListener('click', function (event) {
        var childDivs = frameDiv.querySelectorAll('div');

        childDivs.forEach(function (div) {
            div.classList.remove('active');
        });

        var clickedDiv = event.target.closest('div');
        clickedDiv.classList.add('active');
    });
});