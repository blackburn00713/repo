function namevalid() {
	var x=document.getElementById('fname').value;
	console.log(x);
	var patt=/^[A-Za-z]+$/;
	if (x.match(patt)){
		return true;
	}
	else
	{
		alert("Only alphabets are allowed");
		return false;
	}

	
}