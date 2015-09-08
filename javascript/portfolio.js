/*----------------------------------------------------------------------------- 
01=CONTACT FORM SUBMIT
-----------------------------------------------------------------------------*/
var showDiv = function(event) {
    document.getElementByClassName("hidden").addEventListener("submit");
    event.preventDefault();
    document.hidden.style.visibility = 'visible';
}


var hideDiv = function(event) {
    document.getElementByClassName("hidden").addEventListener("window.close();");
    event.preventDefault();
    document.hidden.style.visibility = 'hidden';
};





