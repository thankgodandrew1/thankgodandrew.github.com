const pages = document.querySelectorAll('.page');
const links = document.querySelectorAll('nav ul li a');

function showPage(pageId) {
    pages.forEach((page) => {
        if (page.id === pageId) {
            page.classList.add('active');
        } else {
            page.classList.remove('active');
        }
    });
}

function handleLinkClick(event) {
    event.preventDefault();
    const href = event.target.getAttribute('href');
    const pageId = href.substring(1);
    showPage(pageId);
}

links.forEach((link) => {
    link.addEventListener('click', handleLinkClick);
});

showPage('home');