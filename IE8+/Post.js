//IE8,9,10+

// jQuery

$.ajax({
    type: 'POST',
    url: '/my/url',
    data: data
});


// Native

var request = new XMLHttpRequest();
request.open('POST', '/my/url/', true);
request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
request.send(data);