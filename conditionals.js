let englishButton = document.querySelector(".english-button");
let ssButton = document.querySelector(".ss-button");
let mathButton = document.querySelector(".math-button");
let scienceButton = document.querySelector(".science-button");
let englishMessage = document.querySelector(".english-message");
let ssMessage = document.querySelector(".ss-message");
let mathMessage = document.querySelector(".math-message");
let scienceMessage = document.querySelector(".science-message");


// For each of the test questions:
//  - Use conditionals to check whether the correct answer was provided by the user. 
//  - The click handlers for each question have been provided for you.

// CODE ALONG
// 1. Take a look at the code provided:
//  - Each of the buttons for the first three subjects have already been stored in its own variable.


englishButton.addEventListener("click", function() {
    let englishInput = document.querySelector(".english").value;

    // 2. Write an if-else conditional statement.
    //  - Check if the value of the variable englishInput is correct.
    //  - The answer should be "Mon".
    //  - If the user enters the correct answer, use .innerHTML to display the word "Correct!" in the ".english-message" div. 
    //  - If incorrect, display "Wrong! Try again."
    if (englishInput === "mon" || englishInput === "Mon") {
        englishMessage.innerHTML = 'Correct!! move on';
        englishMessage.style.color = 'green';
    } else {
        englishMessage.innerHTML = 'Wrong, Wrong Wrong Wrong. try again';
        englishMessage.style.color = 'red';
    }
});


// CODE SOLO

mathButton.addEventListener("click", function() {
    // NOTE: we treat numbers slightly different than strings.
    //  - We need to write 'Number' before the grabbed value. 
    let mathInput = Number(document.querySelector(".math").value);

    // 3. Write an if-else conditional statement.
    //  - Check if the value of the variable mathInput is correct.
    //  - The answer should be 30.
    //  - If the user enters the correct answer, use .innerHTML to display the word "Yessss!" in the ".math-message" div. 
    //  - If incorrect, display "Wrong! Try again."
    if (mathInput == 30) {
        mathMessage.innerHTML = 'Correct!! move on';
        mathMessage.style.color = 'green';
    }else {
        mathMessage.innerHTML = 'Wrong, Wrong Wrong Wrong. try again';
        mathMessage.style.color = 'red';
    }

});


ssButton.addEventListener("click", function() {
    let ssInput = document.querySelector(".social-studies").value;

    // 4. Write an if-else conditional statement.
    //  - Check if the value of the variable ssInput is correct.
    //  - The answer should be "Albany".
    //  - If the user enters the correct answer, use .innerHTML to display the word "You got it!" in the ".ss-message" div. 
    //  - If incorrect, display "Womp, womp. Try again."
    if (ssInput === "albany") {
        ssMessage.innerHTML = 'Correct!! move on';
        ssMessage.style.color = 'green';
    }else {
        ssMessage.innerHTML = 'Wrong, Wrong Wrong Wrong. try again';
        ssMessage.style.color = 'red';
    }


});


scienceButton.addEventListener("click", function() {
    // 5. Declare a variable that stores the value of the user input in the science section.
    //  - Look at previous lines of code to help you out.
    let scienceInput = document.querySelector('.science').value;

    // 6. Write an if-else conditional statement.
    //  - Check if the value of the input variable is correct.
    //  - The answer should be "solid".
    //  - If the user enters the correct answer, use .innerHTML to display the word "Rockstar!" in the ".science-message" div. 
    //  - If incorrect, display "Sad. Try again."
    if (scienceInput === "solid") {
        scienceMessage.innerHTML = 'Correct!! move on';
        scienceMessage.style.color = 'green';
    }else {
        scienceMessage.innerHTML = 'Wrong, Wrong Wrong Wrong. try again';
        scienceMessage.style.color = 'red';
    }


});

// Finish Early?
//  - When a student gets the answer right, make it so their answer turns green. 
//  - If they get it wrong, make their answer turn red.
//  - Write a conditional statement so the English answer is correct for both the user inputs Mon and mon. 
//  - Google compound conditionals to help you figure out how to do this!