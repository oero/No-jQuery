// jQuery

$(document).ready(function(){
    //balabala....
});


// Native
// IE8+

function ready(fn) {
    if (document.readyState != 'loading') {
        fn();
    } else if (document.addEventListener) {
        document.addEventListener('DOMContentLoaded', fn);
    } else {
        document.attachEvent('onreadystatechange', function(){
            if (document.readyState != 'loading')
              fn();
        });
    }
}

// IE9+

function ready(fn) {
    if (document.readyState != 'loading') {
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}