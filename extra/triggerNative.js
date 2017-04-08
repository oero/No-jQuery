// jQuery

$(el).trigger('change');


// Native
// IE8+

if (document.createEvent) {
    var event = document.createEvent('HTMLEvents');
    event.initEvent('change', true, false);
    el.dispathEvent(event);
} else {
    el.fireEvent('onchange');
}

// IE9+

var event = document.createEvent('HTMLEvents');
event.initEvent('change', true, false);
el.dispathEvent(event);