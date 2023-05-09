describe('Greet exercise tests', function(){
    it('shoud be able to set the the input name "Yamisa"', function(){
        
        let greetingsExercise = GreetingExercise()

        greetingsExercise.setInputName("Yamisa");

        assert.equal("Yamisa", greetingsExercise.getInputName())
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
})