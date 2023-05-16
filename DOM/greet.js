var smtButton = document.querySelector(".submit");
var displaySpan = document.querySelector("#display");
var displayNumber = document.querySelector("#displayNumber");
var inputText = document.querySelector(".name");
var resetbtn = document.querySelector(".reset");
var arrayOfNames;
var totalNames = 0;
var inputTextValue=""

let data = JSON.parse(localStorage.getItem("names")) || [] ;

displayNumber.innerHTML = data.length;

var greetingFunction = GreetingExercise(data);
smtButton.addEventListener("click", function () {
inputTextValue = inputText.value;

  var checkedRadio = document.querySelector(
    'input[class="languageType"]:checked'
  );

  if (inputTextValue != "") {
    if (checkedRadio) {
      
        greetingFunction.setInputName(inputTextValue);
        if (checkedRadio.value === "isiXhosa") {
            displaySpan.classList.remove(greetingFunction.classListError())
            displaySpan.classList.remove("success")
          displaySpan.innerHTML = greetingFunction.isiXhosaGreeting();
        }
        if (checkedRadio.value === "english") {
            displaySpan.classList.remove(greetingFunction.classListError())
            displaySpan.classList.remove("success")
          displaySpan.innerHTML = greetingFunction.englishGreeting();
        }
        if (checkedRadio.value === "isiZulu") {
            displaySpan.classList.remove(greetingFunction.classListError())
            displaySpan.classList.remove("success")
          displaySpan.innerHTML = greetingFunction.isiZuluGreeting();
        }
    
        var arrayOfNames = greetingFunction.allNamesFunction();
        localStorage["names"] = JSON.stringify(arrayOfNames);
        displayNumber.innerHTML = arrayOfNames.length;
      
    } else {
        displaySpan.innerHTML = greetingFunction.errorRadio()
        displaySpan.classList.add(greetingFunction.classListError())
        displaySpan.classList.remove("success")
    }
  } else {
    displaySpan.innerHTML = greetingFunction.errorInput();
    displaySpan.classList.add(greetingFunction.classListError())
    displaySpan.classList.remove("success")
  }
 
});
//reseting/clearing button
resetbtn.addEventListener('click', function(){
    greetingFunction.clearAll()
    displaySpan.innerHTML = greetingFunction.success();
    displaySpan.classList.add("success")
    inputText.value= ""
    displayNumber.innerHTML = "0"
})
