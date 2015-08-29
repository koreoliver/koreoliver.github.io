var div_thanks = document.body.createElement("div");
div_thanks.id = "response";
document.body.appendChild(form); 

function validateForm() {
    var x = document.body.form ["form"]["name"]["email"]["submit"].value;
    if (x === true) {   	
        alert ("Thanks! Your message has been received. I'll be in touch soon.");
    }
}


