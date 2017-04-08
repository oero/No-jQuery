// jQuery

$(el).removeClass(className);


// Native
// IE8+

if (el.classList){
    el.classList.remove(className);
} else  {
    el.className = el.className.replace(new RegExp('(^|\\b)') + className.split('').join('|') + '(\\b|$', 'gi', ' ');
}

// IE10+

el.classList.remove(className);