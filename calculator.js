let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = ""; // CREATE EMPTY STRING
let arr = Array.from(buttons); // ACCESS THE ELEMENTS IN ARRAY FORM
arr.forEach(button => {
  button.addEventListener('click', (e) => {
    if (e.target.innerHTML == '=') { // CHECK IF IT IS EQUAL BUTTON
      try {
        string = eval(string); // EVAL IS INBUILT FUNCTION OF JAVASCRIPT
        input.value = string;
      } catch {
        input.value = "Error";
      }
    } else if (e.target.innerHTML == 'AC') { // CLEAR BUTTON
      string = "";
      input.value = string;
    } else if (e.target.innerHTML == 'DE') { // DELETE LAST CHARACTER
      string = string.substring(0, string.length - 1);
      input.value = string;
    } else {
      string += e.target.innerHTML; // ADD TO THE STRING
      input.value = string;
    }
  });
});

