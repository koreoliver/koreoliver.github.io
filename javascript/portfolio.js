/*----------------------------------------------------------------------------- 
01=CONTACT FORM SUBMIT
-----------------------------------------------------------------------------*/
var showDiv = document.getElementByClassName("hidden").addEventListener("submit"),
            function(event) {
                event.preventDefault();
             document.hidden.style.visibility = 'visible';
}

var hidDiv = document.getElementByClassName("hidden").addEventListener("window.close();"),
            function(event) {
                event.preventDefault();
                document.hidden.style.visibility = 'hidden';
}




