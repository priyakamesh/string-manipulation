console.log("string")

document.getElementById("getString").focus()

function reversal() {
  var inputString = Array.from(textString)
  var reverseString = [];
  for (var i = 0; i < inputString.length; i++) {
    reverseString.push(inputString[inputString.length-(i+1)]);
    var outputString = reverseString.toString();


  }
  outputString = outputString.replace(/,/g,  "");
  document.getElementById("reverse").innerHTML = outputString;

}

function alphabits() {
  var alphabits = Array.from(textString)
  alphabits.sort()
  alphabits=alphabits.toString()
  document.getElementById("alphabits").innerHTML = alphabits;
}

function palindrome() {
  if (textString === document.getElementById("reverse").innerHTML){
    document.getElementById("palin").innerHTML = "Yes, I am palindrome"
  } else {
    document.getElementById("palin").innerHTML = "Not a Palindrome"
  }
}



var testString = "";
document.getElementById("getString").addEventListener ("keyup",function (e) {
  e.preventDefault();

    if (e.keyCode === 13) { // 13 is enter
      textString = document.getElementById("getString").value;
      reversal()
      alphabits();
      palindrome();
    }
})
document.getElementById("button").addEventListener("click",function(e){
  e.preventDefault();
  textString = document.getElementById("getString").value;
      reversal()
      alphabits();
      palindrome();

})
