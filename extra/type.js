// jQuery

$.type(obj);


// Native
// IE8+

Object.prototype.toString.call(obj).replace(/^\[object (.+)\]$/, '$1').toLowerCase();