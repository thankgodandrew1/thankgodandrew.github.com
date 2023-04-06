const pages = document.querySelectorAll('.page'),
links = document.querySelectorAll('nav ul li a');

function showPage(pageId) {
    pages.forEach((page) => {
        if (page.id == pageId) {
            page.classList.add('active');
        } else {
            page.classList.remove('active');
        }
    });
}

function handleLinkClick(e) {
    e.preventDefault();
    const href = e.target.getAttribute('href'),
    pageId = href.substring(1);

    showPage(pageId)
}

links.forEach((link) => {
    link.addEventListener('click', handleLinkClick)
})

showPage('home')