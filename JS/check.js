
var messages, number;

/*********************************
try / catch code test
*********************************/
function getValue() {
  messages = document.getElementById("error-message");
  messages.innerHTML = "";
  messages.style.color = "red";

  number = document.getElementById("get-value").value;

  try {
    if (number == "") throw "is Empty";
    if (isNaN(number)) throw "is not a number";
    if (number > 10) throw "is too Big";
    if (number < 5) throw "is too Small";

  

    if (number == number) {
      messages.style.color = "green";
      throw "is " + number;
    }
  } catch (err) {
    messages.innerHTML = "Input " + err;
  }
}
