function GreetingExercise(list) {
  var theName = "";
  let regex = /^[a-zA-Z]+$/;
  var allNames = list || [];

  function setInputName(inputName) {
    theName = inputName.toLowerCase();
  }

  function getInputName() {
    return theName;
  }

  function allNamesFunction(theName) {
    if (regex.test(theName) === true) {
      if (allNames.includes(theName.toLowerCase()) === false) {
        allNames.push(theName.toLowerCase());
      }
      return allNames;
    }
  }

  function isiXhosaGreeting() {
    return "Molo, " + theName.charAt(0).toUpperCase() + theName.slice(1);
  }

  function englishGreeting() {
    return "Hi, " + theName.charAt(0).toUpperCase() + theName.slice(1);
  }

  function isiZuluGreeting() {
    return "Sawubona, " + theName.charAt(0).toUpperCase() + theName.slice(1);
  }

  function errors(names,language){
    if (names == "" && language == null) {
      return "Please enter name and language!"
    }
    if (names == ""){
      return "Please enter a name!"
    }
    if (language == null){
      return "Please choose language!"
    }
  
  }
  function invalidInput(){
    return "Please enter valid name!"
  }
  function classListError() {
    if (errors) {
      return "danger";
    }
  }
  function success() {
    return "successfully cleared!";
  }

  function clearAll() {
    localStorage.clear();
    allNames = [];
  }

  function getNames() {
    return allNames;
  }


  return {
    setInputName,
    getInputName,
    isiXhosaGreeting,
    isiZuluGreeting,
    englishGreeting,
    allNamesFunction,
    clearAll,
    classListError,
    success,
    getNames,
    getInputName,
    errors,
    invalidInput
  };
}
