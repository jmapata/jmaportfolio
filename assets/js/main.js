// Navigation, menu burger, active link and theme toggle
const navToggle = document.getElementById('navToggle');
const siteNav = document.getElementById('siteNav');
const navLinks = document.querySelectorAll('.site-nav a');
const themeToggle = document.getElementById('themeToggle');

function setActiveLink() {
    const scrollPosition = window.scrollY + 120;
    const sections = document.querySelectorAll('section[id]');

    sections.forEach((section) => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        const id = section.id;

        if (scrollPosition >= top && scrollPosition < top + height) {
            navLinks.forEach((link) => {
                link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
            });
        }
    });
}

function toggleTheme() {
    const isDark = document.documentElement.classList.toggle('dark-theme');
    localStorage.setItem('portfolio-theme', isDark ? 'dark' : 'light');
    if (themeToggle) themeToggle.textContent = isDark ? '☀️' : '🌙';
}

function initTheme() {
    const storedTheme = localStorage.getItem('portfolio-theme');
    if (storedTheme === 'dark') {
        document.documentElement.classList.add('dark-theme');
        if (themeToggle) themeToggle.textContent = '☀️';
    } else {
        if (themeToggle) themeToggle.textContent = '🌙';
    }
}

if (navToggle && siteNav) {
    navToggle.addEventListener('click', () => {
        siteNav.classList.toggle('open');
    });

    window.addEventListener('click', (event) => {
        if (!siteNav.contains(event.target) && !navToggle.contains(event.target)) {
            siteNav.classList.remove('open');
        }
    });
}

if (themeToggle) themeToggle.addEventListener('click', toggleTheme);

window.addEventListener('scroll', setActiveLink);
window.addEventListener('DOMContentLoaded', () => {
    initTheme();
    setActiveLink();
});

// CV Download - force download instead of opening in browser
const cvDownloadBtn = document.getElementById('cv-download');
if (cvDownloadBtn) {
    cvDownloadBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const link = document.createElement('a');
        link.href = 'assets/cv/CV-JeanMichelApata.pdf';
        link.download = 'CV-JeanMichelApata.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
}