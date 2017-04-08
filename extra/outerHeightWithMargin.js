//jQuery

$(el).outerHeight(true);


// Native 
// IE8+

function outerHeight(el) {
    var height = el.offsetHeight;
    var style = el.currentStyle || getComputedStyle(el);

    height += parseInt(style.marginTop) + parseInt(style.marginBottom);
    return height;
}

outerHeight(el);

// IE9+
function outerHeight(el) {
    var height = el.offsetHeight;
    var style = getComputedStyle(el);

    height += parseInt(style.marginTop) + parseInt(style.marginBottom);       
    return height;
}

outerHeight(el);