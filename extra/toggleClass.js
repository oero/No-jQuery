// jQuery

$(el).toggleClass(className);

// Native
// IE8+

if (el.classList) {
    el.classList.toggleClass(className);
}else {
    var classes = el.className.split('  ');
    var existingIndex = -1;
    for (var i = classes.length; i--;) {
        if (classes[i] === className)
         existingIndex = i;
    }

    if (existingIndex >= 0)
     classes.splice(existingIndex, 1);
    else
     classes.push(className);

    el.className = classes.join('  ');
}

// IE9+
if (el.classList) {
    el.classList.toggle(className);
} else {
    var classes = el.className.split(' ');
    var existingIndex = classes.indexOf(className);

    if (existingIndex >= 0)
     classes.splice(existingIndex, 1);
    else
     classes.push(className);

    el.className = classes.join(' ');
}

// IE10+

el.classList.toggle(className);