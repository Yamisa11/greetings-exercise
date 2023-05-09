var greetingFunction = GreetingExercise();
var smtButton = document.querySelector(".submit");
var displaySpan = document.querySelector("#display")
var displayNumber = document.querySelector("#displayNumber")
var inputText = document.querySelector(".name")
var totalNames = 0;

smtButton.addEventListener("click", function(){
    var inputTextValue = inputText.value;
    greetingFunction.setInputName(inputTextValue);
    
    var checkedRadio = document.querySelector(
        'input[class="languageType"]:checked'
      );

    if (checkedRadio.value === "isiXhosa") {
       displaySpan.innerHTML = greetingFunction.isiXhosaGreeting()
    }
    if (checkedRadio.value === "english") {
        displaySpan.innerHTML = greetingFunction.englishGreeting()
    }
    if (checkedRadio.value === "isiZulu") {
        displaySpan.innerHTML = greetingFunction.isiZuluGreeting()
    }
    
    localStorage["names"] = greetingFunction.allNamesFunction()

    for (let i = 0; i < greetingFunction.allNamesFunction.length; i++) {
       totalNames = greetingFunction.countNames()
    }

    displayNumber.innerHTML = totalNames;
    
})