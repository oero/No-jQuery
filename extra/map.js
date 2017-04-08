// jQuery

$.map(array, function(value, index){
    //balabal....
});


// Native
// IE8+

function map(arr, fn) {
    var results = [];
    for (var i = 0; i < arr.length; i++)
      results.push(fn(arr[i], i));
    return results;
}

map(array, function(value, index){
    //balabal....
});

// IE9+

array.map(function(value, index){
    //balbala....
});