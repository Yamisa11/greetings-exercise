function GreetingExercise() {
  var theName = "";
  var allNames = []
  var numberOfNames = 0;

  function setInputName(inputName) {
    theName = inputName;
  }

  function getInputName() {
    return theName;
  }

  function allNamesFunction(){
    allNames.push(theName)
    return allNames;
  }

  function isiXhosaGreeting() {
    return "Molo, " + theName;
  }

  function englishGreeting() {
    return "Hi, " + theName;
  }

  function isiZuluGreeting() {
    return "Sawubona, " + theName;
  }
  function countNames(){
    return numberOfNames++;
  }

  return {
    setInputName,
    getInputName,
    isiXhosaGreeting,
    isiZuluGreeting,
    englishGreeting,
    countNames,
    allNamesFunction
  };
}
