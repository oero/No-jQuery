// jQuery

$.ajax({
    type: 'GET',
    url: '/my/url',
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

request.onreadystatechange = function() {
    if (this.readyState === 4) {
        if (this.status >= 200 && this.status < 400) {
            //Success!
            var res = this.responseText;
        } else {
            //Error!
        }
    }
};

request.send();
request = null;