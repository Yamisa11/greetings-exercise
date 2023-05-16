function GreetingExercise(list) {
  var theName = "";
  var allNames = list || [] 

  function setInputName(inputName) {
    theName = inputName.toLowerCase();
  }

  function getInputName() {
    return theName;
  }

  function allNamesFunction(){
    if (allNames.includes(theName) === false) {
    allNames.push(theName.toLowerCase())}
    return allNames;
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
  function errorInput(){
    return "Please enter name!"
  }
  function errorRadio(){
    return "Please choose language!"
  }
  function classListError(){
    if (errorInput || errorRadio) {
      return "danger"
    }
  }
  function success(){
    return "successfully cleared!"
  }
 
  function clearAll(){
    localStorage.clear();
    allNames = []
    
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
    success
  };
}
