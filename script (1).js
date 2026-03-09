function showMessage()
{
alert("Welcome to my Portfolio Website!");
}

function validateForm()
{

var name = document.getElementById("name").value;
var email = document.getElementById("email").value;

if(name=="")
{
alert("Please enter your name");
return false;
}

if(email=="")
{
alert("Please enter your email");
return false;
}

if(email.indexOf("@")==-1)
{
alert("Please enter a valid email address");
return false;
}

alert("Form submitted successfully!");

return true;

}