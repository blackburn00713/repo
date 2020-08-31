function myfunc() {
	var x = 99;
	var y = 95;
	var z = 100;
	var total=x+y+z;
	var avg=(total/3);
	document.getElementById("average").innerHTML="average= " + avg;
    document.getElementById("marks").innerHTML=total;
}
