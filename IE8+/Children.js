// jQuery

$(el).children();


//IE8

var children = [];
for (var i = el.childen.length; i--;) {
    //Skip comment nodes on IE8
    if (el.children[i].nodeType != 8)
        children.unshift(el.childen[i]);
}