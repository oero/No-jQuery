//jQuery

$.getJSON('path/to/your/url', function(data){
  //balabala....
});



//Native 

var request = new XMLHttpRequest();
request.open('GET', 'path/to/your/url', true);

request.onreadystatechange = function() {
    if(this.readyState === 4) {
        if(this.status >= 200 && this.status < 400) {
            // If Success
            var data = JSON.parse(this.responseText);
        } else {
            //If Error
            //balabala....
        }
    }
};

request.send();
request = null;