// references
var smtButton = document.querySelector(".submit");
var displaySpan = document.querySelector("#display");
var displayNumber = document.querySelector("#displayNumber");
var inputText = document.querySelector(".name");
var resetbtn = document.querySelector(".reset");
var arrayOfNames;
var totalNames = 0;
var inputTextValue = "";
// getting existing data from local storage and assign to var data or empty array if not available. This is to make sure local storage is not cleared when refreshing page but instead the old data is passed to var data
let data = JSON.parse(localStorage.getItem("names")) || [];

displayNumber.innerHTML = data.length;
// reference for factory function
var greetingFunction = GreetingExercise(data);
smtButton.addEventListener("click", function () {
  inputTextValue = inputText.value;

  var checkedRadio = document.querySelector(
    'input[class="languageType"]:checked'
  );

  if (inputTextValue && checkedRadio) {
    if (greetingFunction.allNamesFunction(inputTextValue) != undefined) {
      if (checkedRadio) {
        // setting name
        greetingFunction.setInputName(inputTextValue);
        if (checkedRadio.value === "isiXhosa") {
          displaySpan.classList.remove(greetingFunction.classListError());
          displaySpan.classList.remove("success");
          displaySpan.innerHTML = greetingFunction.isiXhosaGreeting();
        }
        if (checkedRadio.value === "english") {
          displaySpan.classList.remove(greetingFunction.classListError());
          displaySpan.classList.remove("success");
          displaySpan.innerHTML = greetingFunction.englishGreeting();
        }
        if (checkedRadio.value === "isiZulu") {
          displaySpan.classList.remove(greetingFunction.classListError());
          displaySpan.classList.remove("success");
          displaySpan.innerHTML = greetingFunction.isiZuluGreeting();
        }
        var arrayOfNames = greetingFunction.allNamesFunction(inputTextValue);
        localStorage["names"] = JSON.stringify(arrayOfNames);
        displayNumber.innerHTML = arrayOfNames.length;
      }
    } else {
      // error handling: when special characters or numbers used as input
      displaySpan.innerHTML = greetingFunction.invalidInput();
      displaySpan.classList.add(greetingFunction.classListError());
      displaySpan.classList.remove("success");

      setTimeout(() => {
        displaySpan.classList.remove("danger");
        displaySpan.innerHTML = "";
      }, 4000);
    }

    //   //input text cannot be empty onclick
  } else {
    // error handling: when input text is empty
    displaySpan.innerHTML = greetingFunction.errors(
      inputTextValue,
      checkedRadio
    );
    displaySpan.classList.add(greetingFunction.classListError());
    displaySpan.classList.remove("success");
    setTimeout(() => {
      displaySpan.classList.remove("danger");
      displaySpan.innerHTML = "";
    }, 4000);
  }
  inputText.value = "";
   checkedRadio.checked = false;
});

//reseting/clearing button
resetbtn.addEventListener("click", function () {
  var checkedRadio = document.querySelector(
    'input[class="languageType"]:checked'
  );
  checkedRadio.checked = false;
  greetingFunction.clearAll();
  displaySpan.innerHTML = greetingFunction.success();
  displaySpan.classList.add("success");
  inputText.value = "";
  displayNumber.innerHTML = "0";
  setTimeout(() => {
    displaySpan.classList.remove("success");
    displaySpan.innerHTML = "";
  }, 4000);
});
