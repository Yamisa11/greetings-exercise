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
    it('shoud return empty input ', function(){
        
        let greetingsExercise = GreetingExercise()

        greetingsExercise.setInputName("Yamisa");

        assert.equal("Please choose language!", greetingsExercise.errorRadio())
    })
})