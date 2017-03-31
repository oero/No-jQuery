// jQuery

$.getJSON('your/url', function(data){
    // balabala....
});

// Native

var request = new XMLHttpRequest();
request.open('GET', 'your/url', true);

request.onload = function() {
    if (this.status >= 200 && this.status < 400) {
        // Success:
        var data = JSON.parse(this.response);
    }else {
        //balabala....
    }
};

request.onerror = function() {
    //eeeeeeerror....
};

request.send();