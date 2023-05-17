describe('Greet exercise tests', function(){
    it('shoud be able to set the the input name "Yamisa"', function(){
        
        let greetingsExercise = GreetingExercise()

        greetingsExercise.setInputName("Yamisa");

        assert.equal("yamisa", greetingsExercise.getInputName())
    })

    it('shoud return "Molo, Majija" when called with isiXhosaGreeting function and inputName = Majija', function(){
        
        let greetingsExercise = GreetingExercise()

        greetingsExercise.setInputName("Majija");

        assert.equal("Molo, Majija", greetingsExercise.isiXhosaGreeting())
    })

    it('shoud return "Hi, Ntombi" when called with englishGreeting function and inputName = Ntombi', function(){
        
        let greetingsExercise = GreetingExercise()

        greetingsExercise.setInputName("Ntombi");

        assert.equal("Hi, Ntombi", greetingsExercise.englishGreeting())
    })

    it('shoud return "Sawubona, John" when called with isiZuluGreeting function and inputName = John', function(){
        
        let greetingsExercise = GreetingExercise()

        greetingsExercise.setInputName("John");

        assert.equal("Sawubona, John", greetingsExercise.isiZuluGreeting())
    })
    it('shoud return Please enter name when no name has been set', function(){
        
        let greetingsExercise = GreetingExercise()

        greetingsExercise.setInputName("");

        assert.equal("Please enter name!", greetingsExercise.errorInput())
    })
    it('shoud return Please choose language if no language is selected', function(){
        
        let greetingsExercise = GreetingExercise()

        greetingsExercise.setInputName("Yamisa");

        assert.equal("Please choose language!", greetingsExercise.errorRadio())
    })
    it('shoud return classList "danger" when the input text is empty', function(){
        
        let greetingsExercise = GreetingExercise()

        greetingsExercise.setInputName("");
        greetingsExercise.getInputName()
        greetingsExercise.errorInput()
    
        assert.equal("danger", greetingsExercise.classListError())
    })
    it('shoud return classList "danger" when the language is not selected', function(){
        
        let greetingsExercise = GreetingExercise()

        greetingsExercise.setInputName("");
        greetingsExercise.getInputName()
        greetingsExercise.errorRadio()
    
        assert.equal("danger", greetingsExercise.classListError())
    })
    it('shoud return array of 2 names ["yamisa","yam"] when 2 names are set (Yamisa and Yam)', function(){
        
        let greetingsExercise = GreetingExercise()

        greetingsExercise.setInputName("Yamisa");
        greetingsExercise.getInputName()
        greetingsExercise.allNamesFunction(greetingsExercise.getInputName())

        greetingsExercise.setInputName("Yam");
        greetingsExercise.getInputName()
        greetingsExercise.allNamesFunction(greetingsExercise.getInputName())
    
        assert.deepEqual(["yamisa","yam"], greetingsExercise.getNames())
    })
})