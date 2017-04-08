// jQuery

$(el).trigger('my-event', {some: 'data'});


// Native
// IE9+

if (window.customElements) {
    var event = new CustomEvent('my-event', {detail: {some: 'data'}});
} else {
    var event = document.createEvent('CustomEvent');
    event.initCustomEvent('my-event', true, true, {some: 'data'});
}

el.dispatchEvent(event);
