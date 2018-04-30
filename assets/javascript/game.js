
var player = 0;
var playerWins = 0;
var playerLoss = 0;
// function newGame() {

//Set class randomScore to a random value between 19-120

var goalScore = Math.floor(Math.random() * (120 - 19 + 1) ) + 19;
$(".randomScore").text(goalScore);

//set each of the class crystal (4) a value between 1-12

var rand1 = Math.floor((Math.random() * 12) + 1);
var rand2 = Math.floor((Math.random() * 12) + 1);
var rand3 = Math.floor((Math.random() * 12) + 1);
var rand4 = Math.floor((Math.random() * 12) + 1);

// }

//when you click the cystal button, take the value and add it to class player score

$(".button1").click(function(){
    player = player + rand1;
    $(".playerScore").text(player);
});

$(".button2").click(function(){
    player = player + rand2;
    $(".playerScore").text(player);
});

$(".button3").click(function(){
    player = player + rand3;
    $(".playerScore").text(player);
});

$(".button4").click(function(){
    player = player + rand4;
    $(".playerScore").text(player);
});

//if player score is greater than randomScore, add 1 to class loses; reset game

if (player > goalScore) {
    $(".results").text("Sorry, you lose");
    playerLoss = playerLoss + 1;
    $(".lose").text("Loses: " + playerLoss);
    // newGame()
}

//if player score is equal to randomScore, add 1 to class wins; reset game

else if (player === goalScore) {
    $(".results").text("You win!");
    playerWins = playerWins + 1;
    $(".wins").text("Wins: " + playerWins);
    // newGame()
}
