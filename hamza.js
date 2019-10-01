document.getElementById("Eve").addEventListener("mouseover", mouseOver);
       document.getElementById("Eve").addEventListener("mouseout", mouseOut);
       function mouseOver() {
           document.getElementById("Eve").style.color = "blue";
       }
       function mouseOut() {
           document.getElementById("Eve").style.color = "black";
       }



function sign() {
var u = document.getElementById("y").value;
var e = document.getElementById("e").value;
var p = document.getElementById("p").value;
var p1 = document.getElementById("p1");
var p2 = document.getElementById("p2");
var p3 = document.getElementById("p3");
var hr1 = document.getElementById("hr1");
var hr2 = document.getElementById("hr2");
var hr3 = document.getElementById("hr3");
var result = "welcom "+" { "+u+" } "+"\n "+"your Email is "+" { "+e+" } "+"\n"+"your passowrd is"+" "+" { "+p+" } ";
var MyTest = new RegExp();
MyTest = /^[a-z]+ +[a-z]/i;                                
if(MyTest.test(u)==false) {
hr1.style.borderBottomColor="red";
p1.innerHTML="enter your name right way";
}
else{
    hr1.style.borderBottomColor="green";
    p1.innerHTML="";
MyTest = /[a-z0-9_\.\-]+@+[a-z0-9_\.\-]+\.+[a-z]/i;
if(MyTest.test(e)==false) {
    hr2.style.borderBottomColor="red";
    p2.innerHTML="enter your Email";
}else{
    hr2.style.borderBottomColor="green";
    p2.innerHTML="";
MyTest = /^[a-z0-9_\.\-]+[length>=8]/i;
if(MyTest.test(p)==true) {
    hr3.style.borderBottomColor="green";
    p3.innerHTML="";
alert(result);
}else{
    hr3.style.borderBottomColor="red";
    p3.innerHTML="enter your pasword";
 
}
}
}
}