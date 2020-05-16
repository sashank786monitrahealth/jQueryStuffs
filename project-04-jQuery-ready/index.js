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



document.addEventListener("DOMContentLoaded", pageLoadedFunction('1'));

function pageLoadedFunction(num){
    console.log("DOM is ready to use."+" ("+num+")");
}


document.onload = pageLoadedFunction("2");