// jQuery

$(el).prev();


// Native
// IE8+

function previousElementSibling(el) {
    do {
        el = el.previousSibling;
    } while (
        el && el.nodeType !== 1
    );
    el.previousElementSibling || previousElementSibling(el);
}

// IE9+

el.previousElementSibling;