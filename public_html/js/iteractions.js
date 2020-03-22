function textboxAdjust(o) {
    o.style.height = "1px";
    o.style.height = (25+o.scrollHeight)+"px";
}

function toogleChat() {
    var element = document.getElementById('video-frame');
    element.classList.contains('full-width')?element.classList.remove("full-width"):element.classList.add("full-width");
}

