var favicon = document.querySelector('link[rel="shortcut icon"]');
window.isDarkMode = (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);
if (favicon && window.isDarkMode) {
    favicon.href = favicon.href.replaceAll('favicon-2021-light%402x.png', 'favicon-2021-dark%402x.png');
}