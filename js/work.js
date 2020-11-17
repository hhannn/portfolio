window.onload = function (e) {
    document.getElementById('cookforyou').className = 'fadeIn';
}

window.onbeforeunload = function (e) {
    document.getElementById('cookforyou').className = 'fadeOut';
}