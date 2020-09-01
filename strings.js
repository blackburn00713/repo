function mystring() {
	 var str="HTML HyperText Markup Language is the most basic building block of the Web.It defines the meaning and structure of web content";
     var words=str.split(' ');
     document.getElementById('demo2').innerHTML="5th word is: "+words[4]+" , 7th word is: "+words[6]+" , 12th word is: "+words[11];
}