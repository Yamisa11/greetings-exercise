var greetingFunction = GreetingExercise();
var smtButton = document.querySelector(".submit");
var displaySpan = document.querySelector("#display");
var displayNumber = document.querySelector("#displayNumber");
var inputText = document.querySelector(".name");
var resetbtn = document.querySelector(".reset");
var arrayOfNames;
var totalNames = 0;
var inputTextValue=""

smtButton.addEventListener("click", function () {
inputTextValue = inputText.value;

  var checkedRadio = document.querySelector(
    'input[class="languageType"]:checked'
  );

  if (inputTextValue != "") {
    if (checkedRadio) {
      
        greetingFunction.setInputName(inputTextValue);
        if (checkedRadio.value === "isiXhosa") {
          displaySpan.innerHTML = greetingFunction.isiXhosaGreeting();
        }
        if (checkedRadio.value === "english") {
          displaySpan.innerHTML = greetingFunction.englishGreeting();
        }
        if (checkedRadio.value === "isiZulu") {
          displaySpan.innerHTML = greetingFunction.isiZuluGreeting();
        }
    
        var arrayOfNames = greetingFunction.allNamesFunction();
        localStorage["names"] = JSON.stringify(arrayOfNames);
        displayNumber.innerHTML = arrayOfNames.length;
      
    } else {
        displaySpan.innerHTML = greetingFunction.errorRadio()
    }
  } else {
    displaySpan.innerHTML = greetingFunction.errorInput();
  }
});

resetbtn.addEventListener('click', function(){
    greetingFunction.clear()
    displaySpan.innerHTML = "";
    
})
