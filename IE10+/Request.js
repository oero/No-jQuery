// jQuery

$.ajax({
    type: 'GET',
    url: '/my/url',
    success: function(res) {
        //balabal....
    },
    error: function(){
        //balala....
    }
});


// Native

var request = new XMLHttpRequest();
request.open('GET', '/my/url', true);

request.onload = function(){
    if (this.status >= 200 & this.status < 400){
        //Success!
        var res = this.response;
    } else {
        //errorrrrrr
    }
};

request.onerror = function(){
    //error......
}

request.send();
