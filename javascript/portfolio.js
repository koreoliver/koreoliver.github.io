/*----------------------------------------------------------------------------- 
01=CONTACT FORM SUMIT
-----------------------------------------------------------------------------*/
var hiddenSubmit = document.getElementsbyClassName(hidden);

document.getElementByClassName("submit").addEventListener("click",hiddenSubmit);

function () 
button.addEventListener("onsend").style.visibility = 'visible';
button.addEventListener("window.close();").style.visibility = 'hidden';


/*function myFunction() {
	
if (document.getElementByTagName(name) === null) 
	alert("Please enter your name");	
else if (document.body.form.email === null) 
	alert("Please enter your email");	
else if (document.getElementByTagName('message') === null) 
	alert("Please enter a message");
else (document.getElementsbyClassName('hidden').style.visibility = 'visible')
	    
}


(function() {
    // FORM / CONTACT
    var $contactForm = $('#contactForm');
    // VALIDATE FORM
    $contactForm.validate();
    $contactForm.submit(function(e) {
        e.preventDefault();
        $.ajax({
            url: 'http://formspree.io/kore.oliver@gmail.com',
            method: 'POST',
            data: $(this).serialize(),
            dataType: 'json',
            beforeSend: function() {
                $contactForm.append('<div class="message message--loading">Sending message…</div>');
            },
            success: function(data) {
                $contactForm.find('.alert--loading').hide();
                $contactForm.append('<div class="message message--success">Message sent!</div>');
            },
            error: function(err) {
                $contactForm.find('.alert--loading').hide();
                $contactForm.append('<div class="message message--error">Ops, there was an error.</div>');
            }
        });
    });
})();

