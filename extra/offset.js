// jQuery 

$(el).offset();

// Native
// IE8+

var rect = el.getBoundingClientRect();
{
    top: rect.top + document.body.scrollTop;
    left: rect.left + document.body.scrollLeft;
}
