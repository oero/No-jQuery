// jQuery

var offset = el.offset();

{
    top: offset.top - document.body.scrollTop;
    left: offset.left - document.body.scrollLeft;
}


// Native
// IE8+

el.getBoundingClientRect();