// jQuery

$.ajax({
    type: 'GET',
    url: '/my/url/',
    success: function(res) {
        //balabala....
    },
    error: function(){
        //balabala....
    }
});


// Native

var request = new XMLHttpRequest();
request.open('GET', '/my/url/', true);

request.onload = function(){
    if (request.status >= 200 && request.status < 400) {
        //Success
        var res = request.responseText;
    } else {
        //Error
    }
};

request.onerror = function() {
    //balabala....
};

request.send();