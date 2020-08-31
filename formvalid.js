function namevalid(name) {
		var patt=/^[A-Za-z]+$/;
	if (name.value.match(patt)){
		return true;
	}
	else
	{
		alert("In First Name Only alphabets are allowed");
		name.focus();
		return false;
	}

	
}
function numvalid(num){
	var number=/^[0-9]+$/;
	if(num.value.match(number)){
		return true;
	}
	else{
		alert("Phone no should contain only numbers");
		num.focus();
		return false;
	}

}
function emailvalid(email) {
	var emailv=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	if(email.value.match(emailv)){
		return true;
	}
	else{
		alert("Invalid email address");
		email.focus();
		return false;
	}
}
function checkcheckboxes(subject1,subject2,subject3){
	if((subject1.checked==false)&&(subject2.checked==false)&&(subject2.checked==false)){
		alert("you didnt check any of the boxes");
		return false;
	}
	else 
	{
		return true;
	}

}
function formvalid(){
    var name=document.getElementById('fname');
    var num=document.getElementById('phoneno');
    var email=document.getElementById('email');
    var subject1=document.getElementById('subject1');
    var subject2=document.getElementById('subject2');
    var subject3=document.getElementById('subject3');
    if((namevalid(name))&&(numvalid(num))&&emailvalid(email)&&checkcheckboxes(subject1,subject2,subject3)){
    	return true;
    }
    else{
    	return false;
    }
}