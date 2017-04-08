// jQuery

$(el).off(eventName, eventHandler);


// Native
// IE8+

function removeEventListener(el, eventName, handler) {
    if (el.removeEventListener)
     el.removeEventListener(eventName, handler);
    else 
     el.detachEvent('on' + eventName, handler);
}

removeEventListener(el, eventName, handler);

//IE9+

el.removeEventListener(eventListener, eventHandler);