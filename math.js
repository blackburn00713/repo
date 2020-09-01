function mynumber() {
	var x=document.getElementById('num').value;
	if((x<=100)&&(x>=10)){
		document.getElementById('demo1').innerHTML="NUmber Is Between 10 to 100";
	}
	else{
        document.getElementById('demo1').innerHTML="NUmber Is  not Between 10 to 100";
	}
}
function fibn() {
	var n=document.getElementById('num1').value;
	var first=0;
	var second=1;
    var next;
    var c;
    for ( c = 0 ; c < n ; c+=1 )
   {
      if ( c <= 1 )
         next = c;
      else
      {
         next = first + second;
         first = second;
         second = next;
      }
      console.log(next);
   }
 document.getElementById('demo2').innerHTML="See The Answer in Console log";
}