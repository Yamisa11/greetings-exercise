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
  function errorInput() {
    return "Please enter name!";
  }
  function invalidInputError() {
    return "Please enter valid name!";
  }
  function errorRadio() {
    return "Please choose language!";
  }
  function classListError() {
    if (errorInput || errorRadio) {
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
    errorInput,
    errorRadio,
    clearAll,
    classListError,
    success,
    getNames,
    getInputName,
    invalidInputError,
  };
}
