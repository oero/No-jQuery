// jQuery

$(el).siblings();


// Native 
// IE8+

var siblings = Array.prototype.slice.call(el.parentNode.children);

for (var i = siblings.length; i--;) {
    if (siblings[i] === el) {
        siblings.splice(i, 1);
        break;
    }
}

// IE9+

Array.prototype.filter.call(el.parentNode.children, function(child){
    return child !== el;
});