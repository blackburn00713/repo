function mynumber() {
	var x=document.getElementById('num').value;
	message= document.getElementById('demo1');
  try { 
    if(x == "")  throw "empty";
    if(isNaN(x)) throw "not a number";
    x = Number(x);
    if(x < 5)  throw "too low";
    if(x > 10)   throw "too high";
  }
  catch(err) {
    message.innerHTML = "Input is " + err;
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