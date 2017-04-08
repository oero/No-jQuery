// jQuery

$.isArray(arr);


// Native
// IE8+

isArray = Array.isArray || function(arr) {
    return Object.prototype.toString.call(arr) == '[object Array]';
};

isArray(arr);

// IE9+

Array.isArray(arr);