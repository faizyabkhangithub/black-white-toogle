function question1(){

var fullname = prompt("enter your name");
console.log(fullname.toLowerCase());}

// Question no 2 ;

function question2(){
var addcolor = prompt("enter you favorite color");
var colors = ["red","blue","white","black","yellow"];
var forAlert = colors.unshift(addcolor);
console.log(colors);
alert(colors);}

// question no 3;

function question3(){
var addcolor = prompt("enter you favorite color");
var colors = ["red","blue","white","black","yellow"];
var forAlert = colors.push(addcolor);
console.log(colors);
alert(colors);}

// Question no 4

function question4(){

var firstcolor = prompt("enter your first color");
var secondcolor = prompt("enter your second color")
var colors = ["red","blue","white","black","yellow"];
var forAlert = colors.push(firstcolor , secondcolor);
console.log(colors);
alert(colors);}

// Question no 5:

function question5(){

var colors = ["red","blue","white","black","yellow"];
console.log(colors);
var detedcolor = colors.shift();
console.log(colors);}

// Question no 6;

function question6(){

var colors = ["red","blue","white","black","yellow"];
console.log(colors);
var deletedcolor = colors.pop();
console.log(colors);
}
// Question no 7 ;

function question7(){

var askcolor = +prompt("enter your number");
var colors = ["red","blue","white","black","yellow"];
console.log(colors);
var newlook = colors.splice(askcolor);
console.log(colors)
}
// Question no 8

function question8(){

var askname = prompt(" enter color name");
var askcolor = +prompt("enter your number");
var colors = ["red","blue","white","black","yellow"];
console.log(colors)
colors.splice(askcolor , 0 , askname)
console.log(colors)
}

// Question no 9

function question9(){
var askname = prompt(" enter color name")
var askcolor = +prompt("enter your number");
var askno = +prompt("enter your limit")
var colors = ["red","blue","white","black","yellow"];
 colors.splice(askcolor , askno ,askname)
 console.log(colors)
}

// Queastion no 10 

function question10(){

var askno = +prompt("enter the matrix no");

for(var i = 0 ; i < askno ; i++){
 for(var j = 0; j <askno ; j++){
  if(i === j){
    document.write(1)
   
  }
  else{
    document.write(0)
    
  }
}
  document.write("<br>")
}
}
// Question non 11 

function question11(){

for(var i = 5; i > 0; i--){
    for(var j = 0   ; j < i  ; j++){
        document.write("*")
       
    }
   document.write("<br>")
}
}
// Question no 12 

function question12(){

var city = "Hyderabad";
console.log(city);
var newcity = city.replace("Hyder" , "Islam");
console.log(newcity);

}