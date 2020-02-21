//Buttons
let zero = document.getElementById('zero');
let one = document.getElementById('one');
let two = document.getElementById('two');
let three = document.getElementById('three');
let four = document.getElementById('four');
let five = document.getElementById('five');

//Score board
let scoreOne = document.getElementById('pod10_score_1');
let scoreTwo = document.getElementById('pod10_score_2');
let scoreThree = document.getElementById('pod10_score_3');
let scoreFour = document.getElementById('pod10_score_4');
let scoreFive = document.getElementById('pod10_score_5');
let scoreSix = document.getElementById('pod10_score_6');
let scoreSeven = document.getElementById('pod10_score_7');
let scoreEight = document.getElementById('pod10_score_8');
let scoreNine = document.getElementById('pod10_score_9');
let scoreTen = document.getElementById('pod10_score_10');

//NEXT ROUND, SCORE, DISTANCE
let displayNextRound = document.getElementById('display_next_round');
let displayScore = document.getElementById('display_score');
let displayDistance = document.getElementById('display_distance');

//UNDO
let undo = document.getElementById('undo');

//DISPLAY SCORE IN THE END
let dispEl = document.getElementById('display_final_score');



let round = 0;
let score = 0;
let distance = 10;

let discAmmount = [];
let tempScore = [];
let distanceStorage = [10];

displayNextRound.innerHTML = round + 1;
displayScore.innerHTML = score;
displayDistance.innerHTML = distance;




zero.onclick = function () {
    round++;
    discAmmount.push(0);
    score = score + discAmmount * distance;
    tempScore.push(discAmmount * distance);
    discAmmount.pop();

    distance = 5;
    distanceStorage.push(distance);
    displayNextRound.innerHTML = round + 1;
    displayScore.innerHTML = score;
    displayDistance.innerHTML = distance;
    scoreBoard();

    console.log(tempScore);
    console.log(distanceStorage);
    hideAndDisplayUndo()
};
one.onclick = function () {
    round++;
    discAmmount.push(1);
    score = score + discAmmount * distance;
    tempScore.push(discAmmount * distance);
    discAmmount.pop();

    distance = 6;
    distanceStorage.push(distance);
    displayNextRound.innerHTML = round + 1;
    displayScore.innerHTML = score;
    displayDistance.innerHTML = distance;
    scoreBoard();
    console.log(tempScore);
    console.log(distanceStorage);
    hideAndDisplayUndo()
};
two.onclick = function () {
    round++;
    discAmmount.push(2);
    score = score + discAmmount * distance;
    tempScore.push(discAmmount * distance);
    discAmmount.pop();

    distance = 7;
    distanceStorage.push(distance);
    displayNextRound.innerHTML = round + 1;
    displayScore.innerHTML = score;
    displayDistance.innerHTML = distance;
    scoreBoard();
    console.log(tempScore);
    console.log(distanceStorage);
    hideAndDisplayUndo()
};
three.onclick = function () {
    round++;
    discAmmount.push(3);
    score = score + discAmmount * distance;
    tempScore.push(discAmmount * distance);
    discAmmount.pop();

    distance = 8;
    distanceStorage.push(distance);
    displayNextRound.innerHTML = round + 1;
    displayScore.innerHTML = score;
    displayDistance.innerHTML = distance;
    scoreBoard();
    console.log(tempScore);
    console.log(distanceStorage);
    hideAndDisplayUndo()
};
four.onclick = function () {
    round++;
    discAmmount.push(4);
    score = score + discAmmount * distance;
    tempScore.push(discAmmount * distance);
    discAmmount.pop();

    distance = 9;
    distanceStorage.push(distance);
    displayNextRound.innerHTML = round + 1;
    displayScore.innerHTML = score;
    displayDistance.innerHTML = distance;
    scoreBoard();
    console.log(tempScore);
    console.log(distanceStorage);
    hideAndDisplayUndo()
};
five.onclick = function () {
    round++;
    discAmmount.push(5);

    score = score + discAmmount * distance;
    tempScore.push(discAmmount * distance);

    discAmmount.pop();

    distance = 10;
    distanceStorage.push(distance);
    displayNextRound.innerHTML = round + 1;
    displayScore.innerHTML = score;
    displayDistance.innerHTML = distance;
    scoreBoard();
    console.log(tempScore.length);
    console.log(distanceStorage);
    hideAndDisplayUndo()
}



undo.onclick = function () {
    round--;
    if (round < 0) {
        round = 0;
    }

    score = score - tempScore[tempScore.length - 1];

    tempScore.pop();

    distance = distanceStorage.slice(-2)[0];
    distanceStorage.pop();

    displayNextRound.innerHTML = round + 1;
    displayScore.innerHTML = score;
    displayDistance.innerHTML = distance;
    deleteLast();
}


function scoreBoard() {
    if (round === 1) {
        scoreOne.innerHTML = tempScore[0];
    } else if (round === 2) {
        scoreTwo.innerHTML = tempScore[1];
    } else if (round === 3) {
        scoreThree.innerHTML = tempScore[2];
    } else if (round === 4) {
        scoreFour.innerHTML = tempScore[3];
    } else if (round === 5) {
        scoreFive.innerHTML = tempScore[4];
    } else if (round === 6) {
        scoreSix.innerHTML = tempScore[5];
    } else if (round === 7) {
        scoreSeven.innerHTML = tempScore[6];
    } else if (round === 8) {
        scoreEight.innerHTML = tempScore[7];
    } else if (round === 9) {
        scoreNine.innerHTML = tempScore[8];
    } else if (round === 10) {
        scoreTen.innerHTML = tempScore[9];
        alert(score);
        displayNextRound.innerHTML = 'Game Over';
        zero.classList.add('hide');
        one.classList.add('hide');
        two.classList.add('hide');
        three.classList.add('hide');
        four.classList.add('hide');
        five.classList.add('hide');
        dispEl.innerHTML = 'Your score: ' + score;
    }
}



function deleteLast() {
    if (round === 0) {
        delete scoreOne.innerHTML;
        scoreOne.innerHTML = '';
        undo.classList.add('hide');
    } else if (round === 1) {
        delete scoreTwo.innerHTML;
        scoreTwo.innerHTML = '';
    } else if (round === 2) {
        delete scoreThree.innerHTML;
        scoreThree.innerHTML = '';
    } else if (round === 3) {
        delete scoreFour.innerHTML;
        scoreFour.innerHTML = '';
    } else if (round === 4) {
        delete scoreFive.innerHTML;
        scoreFive.innerHTML = '';
    } else if (round === 5) {
        delete scoreSix.innerHTML;
        scoreSix.innerHTML = '';
    } else if (round === 6) {
        delete scoreSeven.innerHTML;
        scoreSeven.innerHTML = '';
    } else if (round === 7) {
        delete scoreEight.innerHTML;
        scoreEight.innerHTML = '';
    } else if (round === 8) {
        delete scoreNine.innerHTML;
        scoreNine.innerHTML = '';
    } else if (round === 9) {
        delete scoreTen.innerHTML;
        scoreTen.innerHTML = '';
        zero.classList.remove('hide');
        one.classList.remove('hide');
        two.classList.remove('hide');
        three.classList.remove('hide');
        four.classList.remove('hide');
        five.classList.remove('hide');
        dispEl.innerHTML = ' ';
    }
}


function hideAndDisplayUndo() {
    if (round > 0) {
        undo.classList.remove('hide');
    } else if (round >= 10) {
        undo.classList.add('hide');
    }
}
