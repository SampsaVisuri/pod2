

//GET DIST ELEMENTS
const setDist40 = document.getElementById('setDist40');
const setDist60 = document.getElementById('setDist60');
const setDist80 = document.getElementById('setDist80');

const hide = document.getElementsByClassName('hide');
const hideAgain = document.getElementsByClassName('hide-again');

const dispDist = document.getElementById('dispaly_distance');
const dispScore = document.getElementById('dispaly_score');

//GET SCORE BOARD
const apprScr1 = document.getElementById('appr_scr_1');
const apprScr2 = document.getElementById('appr_scr_2');
const apprScr3 = document.getElementById('appr_scr_3');
const apprScr4 = document.getElementById('appr_scr_4');
const apprScr5 = document.getElementById('appr_scr_5');
const apprScr6 = document.getElementById('appr_scr_6');
const apprScr7 = document.getElementById('appr_scr_7');
const apprScr8 = document.getElementById('appr_scr_8');
const apprScr9 = document.getElementById('appr_scr_9');
const apprScr10 = document.getElementById('appr_scr_10');

//GET BTNS
const tenMeters = document.getElementById('10m');
const fiveMeters = document.getElementById('5m');
const metal = document.getElementById('metal');
const holare = document.getElementById('holare');
const miss = document.getElementById('miss');
const undo = document.getElementById('undo');

//DISP SCORE IN THE END
const printScr = document.getElementById('print_score');

//BASIC VARIABLES
let distance;
let score = 0;
let scoreArray = [];
let roundCount = 0;


//HIDE DISTOPT AND SET DIST
setDist40.onclick = function () {
    while (hide.length > 0) {
        hide[0].classList.remove('hide');
    }
    for (var i = 0; i < hideAgain.length; i++) {
        hideAgain[0].remove(this.innerHTML);
    }
    distance = 40;
    dispDist.innerText = distance;
    dispScore.innerText = score;
    dispAndHidUndo()
}
setDist60.onclick = function () {
    while (hide.length > 0) {
        hide[0].classList.remove('hide');
    }
    for (var i = 0; i < hideAgain.length; i++) {
        hideAgain[0].remove(this.innerHTML);
    }
    distance = 60;
    dispDist.innerText = distance;
    dispScore.innerText = score;
    dispAndHidUndo()
}
setDist80.onclick = function () {
    while (hide.length > 0) {
        hide[0].classList.remove('hide');
    }
    for (var i = 0; i < hideAgain.length; i++) {
        hideAgain[0].remove(this.innerHTML);
    }
    distance = 80;
    dispDist.innerText = distance;
    dispScore.innerText = score;
    dispAndHidUndo()
}


//DISPLAY SCORE ON CLICK AND COUNT SCORE
miss.onclick = function () {
    score += 0;
    scoreArray.push(0);
    roundCount++;
    scoreToDisp();
    dispAndHidUndo();
    dispAndHidNums()
    dispScore.innerHTML = score;
    console.log(score);
    console.log(scoreArray);
    console.log(roundCount);

}
tenMeters.onclick = function () {
    score += distance * 2;
    scoreArray.push(distance * 2);
    roundCount++;
    scoreToDisp();
    dispAndHidUndo();
    dispAndHidNums()
    dispScore.innerHTML = score;
    console.log(score);
    console.log(scoreArray);
    console.log(roundCount);

}
fiveMeters.onclick = function () {
    score += distance * 5;
    scoreArray.push(distance * 5);
    roundCount++;
    scoreToDisp();
    dispAndHidUndo();
    dispAndHidNums()
    dispScore.innerHTML = score;
    console.log(score);
    console.log(scoreArray);
    console.log(roundCount);
}
metal.onclick = function () {
    score += distance * 8;
    scoreArray.push(distance * 8);
    roundCount++;
    scoreToDisp();
    dispAndHidUndo();
    dispAndHidNums()
    dispScore.innerHTML = score;
    console.log(score);
    console.log(scoreArray);
    console.log(roundCount);
}
holare.onclick = function () {
    score += distance * 12;
    scoreArray.push(distance * 12);
    roundCount++;
    scoreToDisp();
    dispAndHidUndo();
    dispAndHidNums()
    dispScore.innerHTML = score;
    console.log(score);
    console.log(scoreArray);
    console.log(roundCount);
}

function scoreToDisp() {
    if (roundCount == 1) {
        apprScr1.innerHTML = scoreArray[0];
    } else if (roundCount == 2) {
        apprScr2.innerHTML = scoreArray[1];
    } else if (roundCount == 3) {
        apprScr3.innerHTML = scoreArray[2];
    } else if (roundCount == 4) {
        apprScr4.innerHTML = scoreArray[3];
    } else if (roundCount == 5) {
        apprScr5.innerHTML = scoreArray[4];
    } else if (roundCount == 6) {
        apprScr6.innerHTML = scoreArray[5];
    } else if (roundCount == 7) {
        apprScr7.innerHTML = scoreArray[6];
    } else if (roundCount == 8) {
        apprScr8.innerHTML = scoreArray[7];
    } else if (roundCount == 9) {
        apprScr9.innerHTML = scoreArray[8];
    } else if (roundCount == 10) {
        apprScr10.innerHTML = scoreArray[9];
        alert('Your score is: ' + score);
    }
}

function scoreFromDisp() {
    if (roundCount == 0) {
        delete apprScr1.innerHTML;
        apprScr1.innerHTML = '';
    } else if (roundCount == 1) {
        delete apprScr2.innerHTML;
        apprScr2.innerHTML = '';
    } else if (roundCount == 2) {
        delete apprScr3.innerHTML;
        apprScr3.innerHTML = '';
    } else if (roundCount == 3) {
        delete apprScr4.innerHTML;
        apprScr4.innerHTML = '';
    } else if (roundCount == 4) {
        delete apprScr5.innerHTML;
        apprScr5.innerHTML = '';
    } else if (roundCount == 5) {
        delete apprScr6.innerHTML;
        apprScr6.innerHTML = '';
    } else if (roundCount == 6) {
        delete apprScr7.innerHTML;
        apprScr7.innerHTML = '';
    } else if (roundCount == 7) {
        delete apprScr8.innerHTML;
        apprScr8.innerHTML = '';
    } else if (roundCount == 8) {
        delete apprScr9.innerHTML;
        apprScr9.innerHTML = '';
    } else if (roundCount == 9) {
        delete apprScr10.innerHTML;
        apprScr10.innerHTML = '';
    }
}

undo.onclick = function () {
    roundCount--;
    score = score - scoreArray[scoreArray.length - 1];
    scoreArray.pop();
    dispScore.innerHTML = score;
    scoreFromDisp();
    dispAndHidUndo();
    dispAndHidNums()
}

function dispAndHidUndo() {
    if (roundCount === 0) {
        undo.classList.add('hide');
    } else {
        undo.classList.remove('hide');
    }
}

function dispAndHidNums() {
    if (roundCount === 10) {
        tenMeters.classList.add('hide');
        fiveMeters.classList.add('hide');
        metal.classList.add('hide');
        holare.classList.add('hide');
        miss.classList.add('hide');
        printScr.innerHTML = 'Your score is: ' + score;
    } else {
        tenMeters.classList.remove('hide');
        fiveMeters.classList.remove('hide');
        metal.classList.remove('hide');
        holare.classList.remove('hide');
        miss.classList.remove('hide');
        printScr.innerHTML = '';
    }
}