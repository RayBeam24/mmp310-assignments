/*jslint browser, es6, single, for, devel, this */
/*global window */
var div = {
    element: document.getElementsByName('div')[0],
    height: 300,
    width: 300
}

var divStyle = window.getComputedStyle(div.element);

var buttonEnlarge = document.getElementById('enlarge-div');
var buttonShrink = document.getElementById('shrink-div');

function grow() {
if (div.height < 500 && div.width < 500) {
    div.height += 100;
    div.element.style.height = div.height + "px";
    
    div.width += 100;
    div.element.style.width = div.width + "px";
   
} else {
    alert("Div is too large!");
}
}

function shrink() {
if (div.height > 100 && div.width > 100) {
    div.height -= 100;
    div.element.style.height = div.height + "px";
    
      div.height -= 100;
    div.element.style.width = div.width + "px";
    

} else {
    alert("Div is too small!");
}
}
