$(document).ready(function () {
    $("#quizDiv").hide();

// create an array of questions, as an object

var questions = [
    {
        question: "In the year 1900 in the U.S. what were the most popular first names given to boy and girl babies?",
        choices: [
        "A. William and Elizabeth",
        "B. Joseph and Catherine",
        "C. John and Mary",
        "D. George and Anne"],
        correctAnswer: "C. John and Mary",
    },
    { 
        question: "The first black American pictured on a U.S. postage stamp was who?",
        choices: [ 
        "A. Frederick Douglass", 
        "B. Booker T. Washington",
        "C. Louis Armstrong",
        "D. Joe Louis"],
        correctAnswer: "D. Joe Louis",
    },
    {
        question: "Which of the following items was owned by the fewest U.S. homes in 1990?",
        choices: [
        "A. Home Computer",
        "B. Compact Disk Player",
        "C. Cordless Phone",
        "D. Dishwasher"],
        correctAnswer: "B. Compact Disk Player",
    },
    {
        question: "Who is third behind Hank Aaron and Babe Ruth in major league career home runs?",
        choices: [
        "A.	Reggie Jackson",
        "B.	Harmon Killebrew",
        "C.	Willie Mays",
        "D.	Frank Robinson"],
        correctAnswer: "C.	Willie Mays",
    },
    {
        question: "During the 1980s for six consecutive years what breed of dog was the most popular in the U.S.?",
        choices: [
        "A.	Cocker Spaniel",
        "B.	German Shepherd",
        "C.	Labrador Retriever",
        "D.	Standard Poodle"],
        correctAnswer: "A.	Cocker Spaniel",
    },
    {
        question: "By 1990 what percentage of homes had answering machines?",
        choices: [
        "A.	10 percent",
        "B.	15 percent",
        "C.	31 percent",
        "D.	51 percent"],
        correctAnswer: "C. 31 percent",
    },
    {
        question: "The Brownie Box Camera introduced by Eastman Kodak in 1900 had a retail price of what?",
        choices: [
        "A.	$1",
        "B.	$5",
        "C.	$10",
        "D.	$20"],
        correctAnswer:  "A.	$1",
    },
    {
        question: "Which of these characters turned 40 years old in 1990?",
        choices: [
        "A.	Charlie Brown",
        "B.	Bugs Bunny",
        "C.	Mickey Mouse",
        "D.	Fred Flintstone"],
        correctAnswer: "A.	Charlie Brown",
    },
    {
        question: "In J. Edgar Hoover, what did the J stand for?",
        choices: [
        "A.	James",
        "B.	John",
        "C.	Joseph",
        "D.	Jacque"],
        correctAnswer: "B. John",
    },
    {
        question: "Florence Nightingale became known as the Lady With the Lamp during which war?",
        choices: [
        "A.	American Civil War",
        "B.	Crimean War",
        "C.	World War I",
        "D.	World War II"],
        correctAnswer: "B.	Crimean War",
    },
    ]; // end of questions array

console.log(questions); 

var quizDiv = $("#quizDiv");
    console.log(quizDiv);
for (var i = 0; i < questions.length; i++) {
   newQuizP = $("<p>");
   newQuizP.text(questions[i]);
   quizDiv.append(newQuizP);
    
}


var time = 300;
var intervalID;






// user clicks start button to begin game - content is generated:
$("#beginGame").on("click", function(){
    $(".instructions").hide();
    $("#beginGame").hide();
    $("#beginGame").on("click", run ());
    $("#quizDiv").show();
})

function run () {
    clearInterval(intervalID);
    intervalID = setInterval(decrement, 1000);
}
function decrement () {
    time--;
    $("#show-timer").html("<h6>Time remaining: " + time + "</h6>");

    if (time === 0) {
        stop();
        alert("times up!")
    }
}
function stop () {
    clearInterval(intervalID);
}





 // Question and appropriate choices appear - creating function, use for loops
    
   

// User clicks an answer choice - triggers a response to show whether the choice was correct or not;

   
})
