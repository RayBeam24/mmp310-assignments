var head = document.getElementsByTagName('head')[0];
var body = document.getElementsByTagName('body')[0];

var jsonScriptContent = document.createElement('script');
jsonScriptContent.setAttribute('src', 'data/content.json');
head.appendChild(jsonScriptContent);

var jsonScriptNav = document.createElement('script');
jsonScriptNav.setAttribute('src', 'data/nav.json');
head.appendChild(jsonScriptNav);

function content(pageFusion){
  var h1 = document.getElementsByTagName('h1')[0];
  var p = document.getElementsByTagName('p')[0];
  var h3 = document.getElementsByTagName('h3')[0];
  var h2 = document.getElementsByTagName('h2')[0];
  var blockquote = document.getElementsByTagName('blockquote')[0];

  h1.innerHTML = pageFusion.h1;
  p.innerHTML = pageFusion.p;
  h3.innerHTML = pageFusion.h3;
  h2.innerHTML = pageFusion.h2;
  blockquote.innerHTML = pageFusion.blockquote;

  var li1 = document.getElementsByTagName('li')[0];
  li1.innerHTML = pageFusion.list[0].content;
  var li2 = document.getElementsByTagName('li')[1];
  li2.innerHTML = pageFusion.list[1].content;
  var li3 = document.getElementsByTagName('li')[2];
  li3.innerHTML = pageFusion.list[2].content;
}

function headerNav(generationNav){
  var nav = document.getElementsByTagName('nav')[0];
  var navistHTML = '<ul>';

  for(var i = 0; i < generationNav.items.length; i++){
    if (generationNav.items[i].items.length > 0){
      navistHTML += '<li><a href=" ' + generationNav.items[i].url + ' ">';
      navistHTML += generationNav.items[i].label + '</a>';
    }else{
      navistHTML += '<li><a href=" ' + generationNav.items[i].url + ' ">';
      navistHTML += generationNav.items[i].label + '</a></li>';
    }
  }
  navistHTML += '</ul>';
  nav.innerHTML = navistHTML;
}
