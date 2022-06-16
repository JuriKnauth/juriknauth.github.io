(function (w, d, n, r, t, s) {
    w.Stomt = w.Stomt || [];
    t = d.createElement(n);
    s = d.getElementsByTagName(n)[0];
    t.async = 1;
    t.src = r;
    s.parentNode.insertBefore(t, s)
})(window, document, 'script', 'https://www.stomt.com/widget.js');
Stomt.push(['addTab', {
    appId: 'zJAwvWmlssF2Z8YCTAKehPgAa'
}]);
Stomt.push(['addFeed', {
    appId: 'zJAwvWmlssF2Z8YCTAKehPgAa'
}]);
Stomt.push(['addCreate', {
    appId: 'zJAwvWmlssF2Z8YCTAKehPgAa'
}]);
document.addEventListener('touchstart', onTouchStart, {passive: true});