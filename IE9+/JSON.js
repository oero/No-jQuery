// jQuery

$.getJSON('path/to/url', function(data){
    // balabala....
});


// Native

var request = new XMLHttpRequest();
request.open('GET', 'path/to/url', true);

request.onload = function() {
    if (request.status >= 200 && request.status < 400) {
        // Success:
        var data = JSON.parse(request.responseText);
    }else {
        //balabala....
    }
};

request.onerror = function() {
    //eeeeeeeeerror....
};

request.send();