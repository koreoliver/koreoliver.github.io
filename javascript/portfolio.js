/*----------------------------------------------------------------------------- 
01=CONTACT FORM SUMIT
-----------------------------------------------------------------------------*/
document.getElementByClassName("hidden").addEventListener("submit"),
            function(event) {
                event.preventDefault();
             document.hidden.style.visibility = 'visible';
}

document.getElementByClassName("hidden").addEventListener("window.close();"),
            function(event) {
                event.preventDefault();
                document.hidden.style.visibility = 'hidden';
}




