$(document).ready(function () {
    // $("#quizDiv").hide();

// create an array of questions, as an object
var questions = [
    {
        q: "In the year 1900 in the U.S. what were the most popular first names given to boy and girl babies?",
        choices: [
        "A: William and Elizabeth",
        " B: Joseph and Catherine",
        " C: John and Mary",
        " D: George and Anne"],
        correctAnswer: "C"
    },
    { 
        q: "The first black American pictured on a U.S. postage stamp was who?",
        choices: [ 
        "A: Frederick Douglass", 
        " B: Booker T. Washington",
        " C: Louis Armstrong",
        " D: Joe Louis"],
        correctAnswer: "D"
    },
    {
        q: "Which of the following items was owned by the fewest U.S. homes in 1990?",
        choices: [
        "A: Home Computer",
        " B: Compact Disk Player",
        " C: Cordless Phone",
        " D: Dishwasher"],
        correctAnswer: "B"
    },
    {
        q: "Who is third behind Hank Aaron and Babe Ruth in major league career home runs?",
        choices: [
        "A: Reggie Jackson",
        " B: Harmon Killebrew",
        " C: Willie Mays",
        " D: Frank Robinson"],
        correctAnswer: "C"
    },
    {
        q: "During the 1980s for six consecutive years what breed of dog was the most popular in the U.S.?",
        choices: [
        "A: Cocker Spaniel",
        " B: German Shepherd",
        " C: Labrador Retriever",
        " D: Standard Poodle"],
        correctAnswer: "A"
    },
    {
        q: "By 1990 what percentage of homes had answering machines?",
        choices: [
        "A: 10 percent",
        " B: 15 percent",
        " C: 31 percent",
        " D: 51 percent"],
        correctAnswer: "C"
    },
    {
        q: "The Brownie Box Camera introduced by Eastman Kodak in 1900 had a retail price of what?",
        choices: [
        "A: $1",
        " B: $5",
        " C: $10",
        " D: $20"],
        correctAnswer: "A"
    },
    {
        q: "Which of these characters turned 40 years old in 1990?",
        choices: [
        "A: Charlie Brown", 
        " B: Bugs Bunny",
        " C: Mickey Mouse",
        " D: Fred Flintstone"],
        correctAnswer: "A"
    },
    {
        q: "In J. Edgar Hoover, what did the J stand for?",
        choices: [
        "A: James",
        " B: John",
        " C: Joseph",
        " D: Jacque"],
        correctAnswer: "B",
    },
    {
        q: "Florence Nightingale became known as the Lady With the Lamp during which war?",
        choices: [
        "A: American Civil War",
        " B: Crimean War",
        " C: World War I",
        " D: World War II"],
        correctAnswer: "B"
    },
]; // end of questions array


//ConsoleLogs
//==========================================
console.log(questions);
console.log(questions[0].q)
console.log(questions[0].choices)



//Quiz Variables
//==========================================
var score = 0;
var qIndex = 0;
var quizDiv = $("#quizDiv");
console.log(quizDiv);

// Quiz Fxns
//=========================================
 function displayQuestion() {
     for (var i =0; i <= questions.length; i++) {
        newQuizP = $("<p>");
        newQuizP.text(questions[i].q);
        quizDiv.append(newQuizP);



        //  $("#quizDiv").html = questions[i].q;
        //  console.log(questions[i].q);
    
     }
 }
    // Function that updates the score...
    function updateScore() {
        $("#score").html = "Score: " + score;
    }


// On click Fxn
    $("#beginGame").on("click", function () {
        $(".instructions").hide();
        $("#beginGame").hide();
        run();
        displayQuestion();
        updateScore();
    });


 





// Timer Variables
// ========================================================
var time = 200;
var intervalId;


// Timer Function
//=======================================
function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
}

function decrement() {
    time--;
    $("#show-timer").html("<h6>Time remaining: " + time + "</h6>");
    //  Once time hits zero...
    if (time === 0) {
        //  ...run the stop function.
        stop();
        //  Alert the user that time is up.
        alert("Time Up!");
    }
}
//  The stop function
function stop() {
    clearInterval(intervalId);
}

   
})
