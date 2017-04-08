// jQuery

$(el).text(string);


// Native
// IE8+

if (el.textContent !== undefined)
    el.textContent = string;
else 
    el.innerText = string;

// IE9+

el.textContent = string;