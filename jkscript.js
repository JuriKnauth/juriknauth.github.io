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

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0
}

function openTab(tabName, elmnt, color) {
    var i, tabcontent, tablinks, articlebody;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none"
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";
        tablinks[i].style.color = "#FFFFFF"
    }
    articlebody = document.getElementsByClassName("articlebody");
    for (i = 0; i < articlebody.length; i++) {
        articlebody[i].style.backgroundColor = ""
    }
    document.getElementById(tabName).style.display = "block";
    elmnt.style.backgroundColor = color;
    elmnt.style.color = "#000000"
}

function myFunction(i) {
    document.getElementById(i).classList.toggle("show")
}
window.onclick = function (e) {
    if (!e.target.matches(".dropbtn")) {
        var myDropdown = document.getElementById("myDropdown");
        if (myDropdown.classList.contains("show")) {
            myDropdown.classList.remove("show")
        }
    }
}