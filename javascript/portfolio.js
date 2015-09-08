/*----------------------------------------------------------------------------- 
01=CONTACT FORM SUBMIT
-----------------------------------------------------------------------------*/
var openMessage = function(event) {
    document.getElementByClassName("submit").addEventListener("send");
    event.preventDefault();
    document.hidden.style.visibility = 'visible';
};

var closeMessage = function(event) {
    document.getElementByClassName("hidden").addEventListener("window.close();");
    event.preventDefault();
    document.hidden.style.visibility = 'hidden';
};









