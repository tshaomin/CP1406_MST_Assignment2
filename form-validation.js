function validate()
{
	if (document.myform.fname.value=="" || (document.myform.fname.value.length<3))
		{
			alert("Please fill in first name");
			return false;
		}
	if (document.myform.lname.value=="")
		{
			alert("Please fill in last name");
			return false;
		}
	if(!document.myform.email.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/))
		{
			alert("Please use the correct email address");
			return false;
		}
	if(!document.myform.address.value.match(/^[a-z0-9]+$/i))
		{
			alert("Address must have alphanumeric characters only");
			return false;
		}
	if(!document.myform.phone.value.match(/^\d{10}$/))
		{
			alert("Enter phone number")
			return false;
		}
	alert("Submitted");
	return true;
}

