// jQuery

$.each(array, function(i, item){
    //balabla....
});


// Native
// IE8+

function forEach(array, fn) {
    for (var i = 0; i < array.length; i++)
        fn(array[i], i)
}

forEach(array, function(item, i) {
    //balbal....
});

// IE9+

array.forEach(function(item, i) {
    //balala....
});