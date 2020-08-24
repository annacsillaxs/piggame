/*
GAME RULES:

- The game has 2 players, playing in rounds
- The players can choose at the beginning of the game if they want to play with 1 die or 2 dice (1 die is the default)
- The players can set the winning score (the default is 100)
- When the game has started, the winnig score cannot be changed
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his CURRENT score
- BUT, if the player rolls a 1 (any of the die), all his CURRENT score gets lost. After that, it's the next player's turn
- IF the player rolls 6 two times in a row with the same die, lose ALL the GLOBAL score and the next player rolls
- The player can choose to 'Hold', which means that his CURRENT score gets added to his GLOBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

// var scores,
//   roundScore,
//   activePlayer,
//   gamePlaying,
//   prevDice0,
//   prevDice1,
//   prevDice2,
//   winningNum,
//   gameSet;

// init1();
// playWithOneDie();

// document
//   .querySelector(".btn-game-set--2")
//   .addEventListener("click", function () {
//     if (gameSet === true) {
//       gameSet = false;
//       init2();
//       playWithTwoDice();
//     } else {
//       gameSet = false;
//       init2();
//       playWithTwoDice();
//     }
//   });

// document
//   .querySelector(".btn-game-set--1")
//   .addEventListener("click", function () {
//     if (gameSet === false) {
//       gameSet = true;
//       init1();
//       playWithOneDie();
//     } else {
//       gameSet = true;
//       init1();
//       playWithOneDie();
//     }
//   });

// document.querySelector(".btn-hold").addEventListener("click", function () {
//   if (gamePlaying) {
//     // Add CURRENT score to GLOBAL score
//     scores[activePlayer] += roundScore;

//     // Update the UI
//     document.querySelector("#score-" + activePlayer).textContent =
//       scores[activePlayer];

//     // Check if player won the game
//     if (scores[activePlayer] >= winningNum) {
//       document.querySelector("#name-" + activePlayer).textContent = "Winner!";
//       document.querySelector(".dice").style.display = "none";
//       document
//         .querySelector(".player-" + activePlayer + "-panel")
//         .classList.add("winner");
//       document
//         .querySelector(".player-" + activePlayer + "-panel")
//         .classList.remove("active");
//       gamePlaying = false;
//     } else {
//       // Next player
//       nextPlayer();
//     }
//   }
// });

// function nextPlayer() {
//   // Next player
//   activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
//   roundScore = 0;

//   document.getElementById("current-0").textContent = "0";
//   document.getElementById("current-1").textContent = "0";

//   // document.querySelector(".player-0-panel").classList.remove("active");
//   // document.querySelector(".player-1-panel").classList.add("active");

//   document.querySelector(".player-0-panel").classList.toggle("active");
//   document.querySelector(".player-1-panel").classList.toggle("active");

//   document.querySelector(".dice--0").style.display = "none";
//   document.querySelector(".dice--1").style.display = "none";
//   document.querySelector(".dice--2").style.display = "none";
// }

// document.querySelector(".btn-new").addEventListener("click", init1);

// function saveScore() {
//   if (gamePlaying === true) return;
//   winningNum = document.getElementById("winning-score").value;
// }

// function randomDice() {
//   return Math.floor(Math.random() * 6) + 1;
// }

// function init() {
//   scores = [0, 0];
//   activePlayer = 0;
//   roundScore = 0;
//   gamePlaying = true;
//   winningNum = 100;
//   prevDice0 = 0;
//   prevDice1 = 0;
//   prevDice2 = 0;

//   document.querySelector(".dice--0").style.display = "none";
//   document.querySelector(".dice--1").style.display = "none";
//   document.querySelector(".dice--2").style.display = "none";

//   document.getElementById("score-0").textContent = "0";
//   document.getElementById("score-1").textContent = "0";
//   document.getElementById("current-0").textContent = "0";
//   document.getElementById("current-1").textContent = "0";
//   document.getElementById("name-0").textContent = "Player 1";
//   document.getElementById("name-1").textContent = "Player 2";
//   document.querySelector(".player-0-panel").classList.remove("winner");
//   document.querySelector(".player-1-panel").classList.remove("winner");
//   document.querySelector(".player-0-panel").classList.remove("active");
//   document.querySelector(".player-1-panel").classList.remove("active");
//   document.querySelector(".player-0-panel").classList.add("active");
// }

// function init1() {
//   init();
//   gameSet = true;

//   document.querySelector(".game-1-set").classList.add("active");
//   document.querySelector(".game-2-set").classList.remove("active");
// }

// function init2() {
//   init();

//   gameSet = false;
//   document.querySelector(".game-1-set").classList.remove("active");
//   document.querySelector(".game-2-set").classList.add("active");
// }

// function playWithOneDie() {
//   document.querySelector(".btn-roll").addEventListener("click", function () {
//     if (gamePlaying) {
//       // 1. Random number
//       var dice0 = randomDice();

//       // 2. Display the result
//       var diceDOM0 = document.querySelector(".dice--0");
//       diceDOM0.style.display = "block";
//       diceDOM0.src = "dice-" + dice0 + ".png";

//       // 3. If dice is 1, the next player rolls
//       if (dice0 === 1) {
//         nextPlayer();
//       } else {
//         // If the actual dice AND the previous dice is 6, actual player lose all the points and the other player rolls
//         if (dice0 === 6 && prevDice0 === 6) {
//           document.querySelector("#score-" + activePlayer).textContent = 0;
//           nextPlayer();
//         } else {
//           // Add up the roundscore with the diced score
//           roundScore += dice0; // roundScore = roundScore + dice
//           document.querySelector(
//             "#current-" + activePlayer
//           ).textContent = roundScore;
//         }
//         prevDice0 = dice0;
//       }
//     }
//     console.log(dice0);
//   });
// }

// function playWithTwoDice() {
//   document.querySelector(".btn-roll").addEventListener("click", function () {
//     if (gamePlaying) {
//       // 1. Random number
//       var dice1 = randomDice();
//       var dice2 = randomDice();

//       // 2. Display the result
//       var diceDOM1 = document.querySelector(".dice--1");
//       diceDOM1.style.display = "block";
//       diceDOM1.src = "dice-" + dice1 + ".png";

//       var diceDOM2 = document.querySelector(".dice--2");
//       diceDOM2.style.display = "block";
//       diceDOM2.src = "dice-" + dice2 + ".png";

//       // 3. If dice is 1, the next player rolls
//       if (dice1 === 1 || dice2 === 1) {
//         nextPlayer();
//       } else {
//         // If the actual dice AND the previous dice is 6, actual player lose all the points and the other player rolls
//         if (
//           (dice1 === 6 && prevDice1 === 6) ||
//           (dice2 === 6 && prevDice2 === 6)
//         ) {
//           document.querySelector("#score-" + activePlayer).textContent = 0;
//           nextPlayer();
//         } else {
//           // Add up the roundscore with the diced score
//           roundScore += dice1 + dice2; // roundScore = roundScore + dice
//           document.querySelector(
//             "#current-" + activePlayer
//           ).textContent = roundScore;
//         }
//         prevDice1 = dice1;
//         prevDice2 = dice2;
//       }
//     }
//     console.log(dice1, dice2);
//   });
// }

var scores,
  roundScore,
  activePlayer,
  gamePlaying,
  prevDice0,
  prevDice1,
  prevDice2,
  winningNum,
  oneDie;

init();
oneDie = true;

document.querySelector(".btn-roll").addEventListener("click", function () {
  // alert(
  //   "You will play with one die. If you want to play with two, select NEW GAME and then TWO DICE!"
  // );
  if (gamePlaying) {
    // 1. Random number
    var dice0 = randomDice();

    // 2. Display the result
    var diceDOM0 = document.querySelector(".dice--0");
    diceDOM0.style.display = "block";
    diceDOM0.src = "dice-" + dice0 + ".png";

    // 3. If dice is 1, the next player rolls
    if (dice0 === 1) {
      nextPlayer();
    } else {
      // If the actual dice AND the previous dice is 6, actual player lose all the points and the other player rolls
      if (dice0 === 6 && prevDice0 === 6) {
        document.querySelector("#score-" + activePlayer).textContent = 0;
        scores[activePlayer] = 0;
        nextPlayer();
      } else {
        // Add up the roundscore with the diced score
        roundScore += dice0; // roundScore = roundScore + dice
        document.querySelector(
          "#current-" + activePlayer
        ).textContent = roundScore;
      }
      prevDice0 = dice0;
    }
  }
  console.log(dice0);
});

document.querySelector(".btn-game-set--2").addEventListener("click", twoDice);

document.querySelector(".btn-hold").addEventListener("click", function () {
  if (gamePlaying) {
    // Add CURRENT score to GLOBAL score
    scores[activePlayer] += roundScore;

    // Update the UI
    document.querySelector("#score-" + activePlayer).textContent =
      scores[activePlayer];

    // Check if player won the game
    if (scores[activePlayer] >= winningNum) {
      document.querySelector("#name-" + activePlayer).textContent = "Winner!";
      document.querySelector(".dice").style.display = "none";
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.add("winner");
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.remove("active");
      gamePlaying = false;
    } else {
      // Next player
      nextPlayer();
    }
  }
});

function nextPlayer() {
  // Next player
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  roundScore = 0;

  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";

  // document.querySelector(".player-0-panel").classList.remove("active");
  // document.querySelector(".player-1-panel").classList.add("active");

  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");

  document.querySelector(".dice--1").style.display = "none";
  document.querySelector(".dice--2").style.display = "none";
}

document.querySelector(".btn-new").addEventListener("click", init);

function init() {
  scores = [0, 0];
  activePlayer = 0;
  roundScore = 0;
  gamePlaying = true;
  prevDice0 = 0;
  prevDice1 = 0;
  prevDice2 = 0;
  winningNum = 100;

  document.querySelector(".dice--0").style.display = "none";
  document.querySelector(".dice--1").style.display = "none";
  document.querySelector(".dice--2").style.display = "none";
  document.querySelector(".game-1-set").style.display = "none";
  document.querySelector(".game-2-set").style.display = "none";

  document.getElementById("score-0").textContent = "0";
  document.getElementById("score-1").textContent = "0";
  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";
  document.getElementById("name-0").textContent = "Player 1";
  document.getElementById("name-1").textContent = "Player 2";
  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");
  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-1-panel").classList.remove("active");
  document.querySelector(".player-0-panel").classList.add("active");
}

function saveScore() {
  if (gamePlaying === true) return;
  winningNum = document.getElementById("winning-score").value;
}

function randomDice() {
  return Math.floor(Math.random() * 6) + 1;
}

function twoDice() {
  oneDie = false;
  document
    .querySelector(".btn-game-set--2")
    .addEventListener("click", function () {
      document.querySelector(".game-1-set").classList.remove("active");
      document.querySelector(".game-2-set").classList.add("active");

      if (gamePlaying) {
        // 1. Random number

        var dice1 = randomDice();
        var dice2 = randomDice();

        // 2. Display the result
        var diceDOM1 = document.querySelector(".dice--1");
        diceDOM1.style.display = "block";
        diceDOM1.src = "dice-" + dice1 + ".png";

        var diceDOM2 = document.querySelector(".dice--2");
        diceDOM2.style.display = "block";
        diceDOM2.src = "dice-" + dice2 + ".png";
      }
      // 3. If dice is 1, the next player rolls
      if (dice1 === 1 || dice2 === 1) {
        nextPlayer();
      } else {
        // If the actual dice AND the previous dice is 6, actual player lose all the points and the other player rolls
        if (
          (dice1 === 6 && prevDice1 === 6) ||
          (dice2 === 6 && prevDice2 === 6)
        ) {
          document.querySelector("#score-" + activePlayer).textContent = 0;
          nextPlayer();
        } else {
          // Add up the roundscore with the diced score
          roundScore += dice1 + dice2; // roundScore = roundScore + dice
          document.querySelector(
            "#current-" + activePlayer
          ).textContent = roundScore;
        }
        prevDice1 = dice1;
        prevDice2 = dice2;
      }
      console.log(dice1, dice2);
    });
}
