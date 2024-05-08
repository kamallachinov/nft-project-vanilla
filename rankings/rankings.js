const h3Elements = document.querySelectorAll('.item h3');

const maxLength = 22;

h3Elements.forEach((h3) => {
    if (h3.innerText.length > maxLength) {
        const truncatedText = h3.innerText.substring(0, maxLength) + '...';
        h3.innerText = truncatedText;
    }
});