// jQuery

$(el).on(eventName, eventHandler);


// Native
// IE8+

function addEventListener(el, eventName, handler) {
    if (el.addEventListener){
     el.addEventListener(eventName, handler);
    } else {
        el.attachEvent('on' + eventName, function(){
            handler.call(el);
        });
    }
}

addEventListener(el, eventName, handler);

// IE9+

el.addEventListener(eventName, eventHandler);