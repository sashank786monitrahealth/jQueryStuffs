/* ##############################################
   First we wait for the document to be ready
   ##############################################
*/

// instead of document. ready. We can use an anonymous function and 
// make sure that document is ready to use. jQuery relies heavily on the document object. 
// That is, why we have to make sure that it is loaded. 

$(function(){
    console.log("Document is ready to use.");
})


// https://developer.mozilla.org/en-US/docs/Web/API/Window/DOMContentLoaded_event
document.addEventListener("DOMContentLoaded", pageLoadedFunction('1'));

function pageLoadedFunction(num){
    console.log("DOM is ready to use."+" ("+num+")");
}


document.onload = pageLoadedFunction("2");

//hide paragraph in javascript
function hideme(sel){
    document.querySelector(sel).style.display = "none";
}

function hidemeJQuery(sel){
    $(sel).hide();
}
// usage: hidemeJQuery('p');
// opposite of hide is show
// $('p').show()

$(function(){
    $('p').attr('title','first paragraph');
    $('img').attr('src','https://via.placeholder.com/300')
})

$(function(e){
    //console.log("e = ");
    //console.dir(e);
    $('img').attr({src:'https://smiley.com/static-assets/brand_smiley_main.jpg', 'alt':'smiley-face-added'});
})


// option
$(function(e){
    //console.log("e = ");
    //console.dir(e);
    $('img').attr({src:'https://smiley.com/static-assets/brand_smiley_main.jpg', 'alt':'smiley-face-added'});
})

$('img').attr({src:function(e){
    console.log(e);
}})