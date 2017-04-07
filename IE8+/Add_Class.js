// jQuery

$(el).addClass(className);

//IE8,9,10+
// Native

if (el.classList)
    el.classList.add(className);
else 
    el.className += ' ' + className;