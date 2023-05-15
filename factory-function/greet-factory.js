function GreetingExercise() {
  var theName = "";
  var allNames = []
  var numberOfNames = 0;

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
  function countNames(){
    return numberOfNames++;
  }
  function errorInput(){
    return "Please enter name"
  }
  function errorRadio(){
    return "Please choose languange"
  }
  function clear(){
    localStorage.clear()
  }

  return {
    setInputName,
    getInputName,
    isiXhosaGreeting,
    isiZuluGreeting,
    englishGreeting,
    countNames,
    allNamesFunction,
    errorInput,
    errorRadio,
    clear
  };
}
