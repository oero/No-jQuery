// jQuery

$(selector).each(function(i, el){
    //balala....
});


// Native

function forEachElement(selector, fn) {
    var elements = document.querySelectorAll(selector);
    for (var i = 0; i < elements.length; i++)
    fn(elements[i], i);
}

forEachElement(selector, function(el, i){
    //balabala....
});