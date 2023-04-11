let dis = document.getElementById("result");
let upper = document.getElementById("subtext");
let _memoryClear = document.querySelector('#mc');
let _memoryRestore = document.querySelector('#mr');
let _memoryShow = document.querySelector('#m');
let _memoryTable = document.getElementById('memory');
let _sqr = document.getElementById('sqr');
let _root = document.getElementById('root');
let _expo = document.getElementById('expo');
let _tenpow = document.getElementById('tenpow');
let _log = document.getElementById('log');
let _ln = document.getElementById('ln');
let btntxt = document.getElementById("btntxt");
let btncheck = document.getElementById("btn-check");
let marr = [];
let op = ['+', '-', '*', '/', '%', '.'];
/*************************************************************************************************************************************************** */

// ****************************************** DISPLAY INTO SCREEN **********************************
var displayValue, mode;
var Error='Error!', Infinity='Infinity', NaN = 'NaN', Empty='', Invalid='Invalid input';

function checkForErrorMessage() {
    displayValue = dis.value;
    return displayValue==Error?false:true;
}

function display(val) {
    if(!checkForErrorMessage()) {
        return;
    }

    displayValue = dis.value;
    let oldOperator = displayValue.slice(-1);

    if (op.includes(val) && op.includes(oldOperator)) {
        dis.value = displayValue.slice(0, -1) + val;
    } 
    else if(val==Math.PI || val==Math.E) {
        
        if(op.slice(0, 5).includes(oldOperator)) {
            dis.value += val;
            return;
        }
        upper.value = Empty;
        dis.value = val;
    }
    else {
        dis.value += val;
    }
}
// **********************************************************************************************

function textChange() {
    btntxt.innerHTML =  btntxt.innerHTML=='DEG'?'RAD':'DEG';
}

let checkedCnt = 0;
function fe() {

    btncheck.checked = (checkedCnt%2==0)?true:false;
    checkedCnt = (checkedCnt%2==0)?1:0;

    displayValue = dis.value;
    let fE;
    if (btncheck.checked == true) {
        fE = displayValue != '' ? parseFloat(displayValue) : 0; 
        dis.value = fE.toExponential();
    }
    else {
        dis.value = displayValue != '' ? parseFloat(displayValue) : 0; 
    }
    // <It adds value after result>
}
// ************************************************************************************************

function disableMemory(state) {
    _memoryClear.disabled = state;
    _memoryRestore.disabled = state;
    _memoryShow.disabled = state;
}

// Memory store
function memoryStore() {
    if(!checkForErrorMessage()) {
        return;
    }

    displayValue = dis.value;

    if (displayValue == Empty) {
        marr.push(0);
    }
    if (marr[marr.length - 1] != displayValue && marr[marr.length - 1] != parseFloat(displayValue)) {
        marr.push(parseFloat(displayValue));
    }
    disableMemory(false);
}

// Memory read
function memoryRead() {
    if(!checkForErrorMessage()) {
        return;
    }
    dis.value = marr[marr.length - 1];
}

//  Memory clear
function memoryClear() {
    if(!checkForErrorMessage()) {
        return;
    }
    marr.splice(0, marr.length);
    disableMemory(true);
}

// Memory plus
function memoryPlus() {
    if(!checkForErrorMessage()) {
        return;
    }
    marr[marr.length - 1] +=    dis.value!=''?parseFloat(dis.value):0;
}

// Memory minus
function memoryMinus() {
    if(!checkForErrorMessage()) {
        return;
    }
    marr[marr.length - 1] -= parseFloat(dis.value);
    console.log(marr);
}

// Create memory table
function createMemoryTable() {
    if(!checkForErrorMessage()) {
        return;
    }
    let html = "<table>";
    for (var i = marr.length - 1; i >= 0; i--) {
        html += "<tr>";
        html += "<td>" + marr[i] + "</td>";
        html += "</tr>";
    }
    html += "</table>";
    _memoryTable.innerHTML = html;
}
// ************************************************************************************

// *********************************** TRIGONOMETRY ***********************************************
document.getElementById("second").addEventListener("click", function (e) {
    e.stopPropagation();
});
document.getElementById("second1").addEventListener("click", function (e) {
    e.stopPropagation();
});

// INSIDE TRIGONOMETRY
function sin() {
    if(!checkForErrorMessage()) {
        return;
    }
    displayValue = dis.value;
    mode = btntxt.innerHTML;
    upper.value = 'sin(' +  displayValue + ')';
    dis.value = (mode == 'RAD') ? Math.sin( displayValue): Math.sin(( displayValue * Math.PI) / 180);
}

function cos() {
    if(!checkForErrorMessage()) {
        return;
    }
    displayValue = dis.value;
    mode = btntxt.innerHTML;
    upper.value = 'cos(' + displayValue + ')';
    dis.value = (mode == 'RAD') ? Math.cos(displayValue) : Math.cos((displayValue * Math.PI) / 180);
}

function tan() {
    if(!checkForErrorMessage()) {
        return;
    }
    displayValue = dis.value;
    mode = btntxt.innerHTML;
    upper.value = 'tan(' + displayValue + ')';
    dis.value = (mode == 'RAD') ? Math.tan(displayValue) : Math.tan((displayValue * Math.PI) / 180);
}

function sec() {
    if(!checkForErrorMessage()) {
        return;
    }
    displayValue = dis.value;
    mode =  btntxt.innerHTML;
    upper.value = 'sec(' + displayValue + ')';
    dis.value = (mode == 'RAD') ? 1 / Math.cos(displayValue) : 1 / Math.cos((displayValue * Math.PI) / 180);
}

function cosec() {
    if(!checkForErrorMessage()) {
        return;
    }
    displayValue = dis.value;
    mode = btntxt.innerHTML;
    upper.value = 'cosec(' + displayValue + ')';
    dis.value = (mode == 'RAD') ? 1 / Math.sin(displayValue) : 1 / Math.sin((displayValue * Math.PI) / 180);
}

function cot() {
    if(!checkForErrorMessage()) {
        return;
    }
    displayValue = dis.value;
    mode = btntxt.innerHTML;
    upper.value = 'cot(' + displayValue + ')';
    dis.value = (mode == 'RAD') ? 1 / Math.tan(displayValue) : 1 / Math.tan((displayValue * Math.PI) / 180);
}

// ****************************************** Inverse Trigonometry ********************************************

function inv_RAD_DEG(val) {
    return ((val * 180) * (Math.PI ** -1));
}

// 2nd INSIDE TRIGONOMETRY
function sinInverse() {
    if(!checkForErrorMessage()) {
        return;
    }
    displayValue = dis.value;
    mode = btntxt.innerHTML;
    upper.value = 'sin-1(' + displayValue + ')';

    if (displayValue >= -1 && displayValue <= 1) {
        dis.value = (mode == 'RAD') ? Math.asin(displayValue) : inv_RAD_DEG(Math.asin(displayValue));
        return;
    }
    dis.value = "Enter value between -1 and 1";
}

function cosInverse() {
    if(!checkForErrorMessage()) {
        return;
    }
    displayValue = dis.value;
    mode = btntxt.innerHTML;
    upper.value = 'cos-1(' + displayValue + ')';

    if (displayValue >= -1 && displayValue <= 1) {
        dis.value = (mode == 'RAD') ? Math.acos(displayValue) : inv_RAD_DEG(Math.acos(displayValue));
        return;
    }
    dis.value = "Enter value between -1 and 1";
}

function tanInverse() {
    if(!checkForErrorMessage()) {
        return;
    }
    displayValue = dis.value;
    mode = btntxt.innerHTML;
    upper.value = 'tan-1(' + displayValue + ')';
    dis.value = (mode == 'RAD') ? Math.atan(displayValue) : inv_RAD_DEG(Math.atan(displayValue));
}

function secInverse() {
    if(!checkForErrorMessage()) {
        return;
    }
    displayValue = dis.value;
    mode = btntxt.innerHTML;
    upper.value = 'sec-1(' + displayValue + ')';

    if (displayValue > -1 && displayValue < 1) {
        dis.value = Invalid;
        return
    }
    dis.value = (mode == 'RAD') ? Math.acos(1 / displayValue) : inv_RAD_DEG(Math.acos(1 / displayValue));
}

function cosecInverse() {
    if(!checkForErrorMessage()) {
        return;
    }
    displayValue = dis.value;
    mode = btntxt.innerHTML;
    upper.value = 'cosec-1(' + displayValue + ')';

    if (displayValue > -1 && displayValue < 1) {
        dis.value = Invalid;
        return;
    }
    dis.value = (mode == 'RAD') ? Math.asin(1 / displayValue) : inv_RAD_DEG(Math.asin(1 / displayValue));
}

function cotInverse() {
    if(!checkForErrorMessage()) {
        return;
    }
    displayValue = dis.value;
    mode = btntxt.innerHTML;
    upper.value = 'cot-1(' + displayValue + ')';
    dis.value = (mode == 'RAD') ? Math.atan(1 / displayValue) : inv_RAD_DEG(Math.atan(1 / displayValue));
}

// ****************************************** Hyperbolic Trigonometry ****************************************

// hyp INSIDE TRIGOMOMETRY
function sinh() {
    if(!checkForErrorMessage()) {
        return;
    }
    displayValue = dis.value;
    upper.value = 'sinh(' + displayValue + ')';
    dis.value = Math.sinh(displayValue);
}

function cosh() {
    if(!checkForErrorMessage()) {
        return;
    }
    displayValue = dis.value;
    upper.value = 'cosh(' + displayValue + ')';
    dis.value = Math.cosh(displayValue);
}

function tanh() {
    if(!checkForErrorMessage()) {
        return;
    }
    displayValue = dis.value;
    upper.value = 'tanh(' + displayValue + ')';
    dis.value = Math.tanh(displayValue);
}

function sech() {
    if(!checkForErrorMessage()) {
        return;
    }
    displayValue = dis.value;
    upper.value = 'sech(' + displayValue + ')';
    dis.value = 1 / Math.cosh(displayValue);
}

function cosech() {
    if(!checkForErrorMessage()) {
        return;
    }
    displayValue = dis.value;
    upper.value = 'cosech(' + displayValue + ')';

    dis.value = (displayValue=='0') ? 'Cannot divide by zero' : (1 / Math.sinh(displayValue));
}

function coth() {
    if(!checkForErrorMessage()) {
        return;
    }
    displayValue = dis.value;
    upper.value = 'coth(' + dis.value + ')';
    dis.value = (displayValue=='0') ? 'Cannot divide by zero' : (1 / Math.tanh(displayValue));
}
// **********************************************************************************************

// ********************************** INSIDE FUNCTION *******************************************
function absolute() {
    if(!checkForErrorMessage()) {
        return;
    }
    displayValue = dis.value;
    upper.value = 'abs(' + displayValue + ')=';
    dis.value = Math.abs(displayValue);
}

function ceil() {
    if(!checkForErrorMessage()) {
        return;
    }
    displayValue = dis.value;
    upper.value = 'ceil(' + displayValue + ')';
    dis.value = Math.ceil(displayValue);
}

function floor() {
    if(!checkForErrorMessage()) {
        return;
    }
    displayValue = dis.value;
    upper.value = 'floor(' + displayValue + ')';
    dis.value = Math.floor(displayValue);
}

function rand() {
    if(!checkForErrorMessage()) {
        return;
    }
    displayValue = dis.value;
    upper.value = Empty;
    dis.value = Math.random(displayValue);
}

function degreeMinuteSecond() {
    if(!checkForErrorMessage()) {
        return;
    }
    displayValue = dis.value;
    upper.value = "dms(" + displayValue + ")";
    let degree = Math.floor(displayValue);
    let minutes = ((displayValue - Math.floor(displayValue)) * 60.0);
    let seconds = (minutes - Math.floor(minutes)) * 60.0;
    dis.value = degree + "." + Math.floor(minutes) + seconds.toFixed(0);
}

function deg() {

}
// **********************************************************************************************

var btnCount = 0;
function changeBtn() {
    if (btnCount % 2 === 1) {
        _sqr.innerHTML = 'x<sup>2</sup>';
        _root.innerHTML = '2&#x221A;x';
        _expo.innerHTML = 'x<sup>y</sup>';
        _tenpow.innerHTML = '10<sup>x</sup>';
        _log.innerHTML = 'log';
        _ln.innerHTML = 'ln';
        btnCount = 0;
    } else {
        _sqr.innerHTML = 'x<sup>3</sup>';
        _root.innerHTML = '3&#x221A;x';
        _expo.innerHTML = 'y&#x221A;x';
        _tenpow.innerHTML = '2<sup>x</sup>';
        _log.innerHTML = 'log<sub>y</sub>x';
        _ln.innerHTML = 'e<sup>x</sup>';
        btnCount = 1;
    }
}

// ****************************************** 1st row ********************************************
function dlt() {
    displayValue = dis.value;
    if (displayValue == Empty) {
        upper.value = Empty;
    }
    dis.value = '';
}

function pop() {
    displayValue = dis.value;
    if (displayValue == Error || displayValue == Infinity || displayValue == NaN) {
        dis.value = upper.value =  Empty;
        return;
    }
    dis.value = displayValue.slice(0, dis.value.length - 1);
}
// ******************************************* 2nd row ******************************************

function sqr() {
    if(!checkForErrorMessage()) {
        return;
    }
    displayValue = dis.value;

    if (_sqr.innerHTML == 'x<sup>3</sup>') {
        upper.value = 'cube(' + displayValue + ')';
        dis.value = Math.pow(displayValue, 3);
        return;
    } 
    upper.value = 'sqr(' + displayValue + ')';
    dis.value = Math.pow(displayValue, 2);
}

function inverse() {
    if(!checkForErrorMessage()) {
        return;
    }

    upper.value = '1/(' + dis.value + ')=';
    try{
        let inverseCalculation = eval(upper.value.slice(0, -1));
        dis.value = Number.isFinite(inverseCalculation)?inverseCalculation:Error;
    }
    catch {
        dis.value = Error;
    }
}

function expo() {

    if(!checkForErrorMessage()) {
        return;
    }

    displayValue = dis.value;
    const fE = displayValue!=Empty?parseFloat(displayValue):0;
    dis.value = fE.toExponential();
}

// ******************************************** 3rd row *****************************************

function sqroot() {

    if(!checkForErrorMessage()) {
        return;
    }

    if (document.getElementById('root').innerHTML == '2√x') {
        upper.value = '√(' + dis.value + ')';
        dis.value = Math.sqrt(dis.value);
    } else {
        upper.value = 'cuberoot(' + dis.value + ')';
        dis.value = Math.ceil(Math.pow(dis.value, 1 / 3));
    }
}

function factorial() {
    displayValue = dis.value;
    if(!checkForErrorMessage() || Number.parseInt(displayValue)<0) {
        dis.value = Error;
        return;
    }
    
    upper.value = 'fact(' + displayValue + ')';
    let fact = 1;
    if (displayValue == 0 || displayValue == 1) {
        fact = 1;
    } else {
        for (let i = 1; i <= displayValue; i++) {
            fact *= i;
        }
    }
    dis.value = fact;
}
// ********************************************* 4th row ****************************************

function xtoy() {
    if(!checkForErrorMessage()) {
        return;
    }
    dis.value += document.getElementById('expo').innerHTML == 'x<sup>y</sup>'?'^':" yroot ";
}

// ********************************************** 5th row ***************************************

function tentox() {
    if(!checkForErrorMessage()) {
        return;
    }

    if (document.getElementById('tenpow').innerHTML == '10<sup>x</sup>') {
        upper.value = '10^(' + dis.value + ')';
        dis.value = Math.pow(10, dis.value);
    } 
    else {
        upper.value = '2^(' + dis.value + ')';
        dis.value = Math.pow(2, dis.value);
    }
}
// ********************************************** 6th row ***************************************

let num = 0, base = 0, flag = true;
function log() {
    if(!checkForErrorMessage()) {
        return;
    }

    displayValue = dis.value;

    if (document.getElementById('log').innerHTML == 'log') {
        upper.value = 'log(' + displayValue + ')';
        dis.value = Math.log10(displayValue);
    }
    else {
        if (flag) {
            num = displayValue;
            upper.value = num + ' log base ';
            dis.value = Empty;
        }
        else if (!flag) {
            base = displayValue;
            upper.value += displayValue;
            dis.value = Math.log(num) / Math.log(base);
        }
        flag = !flag;
    }
}
// *********************************************** 7th row*****************************************

function ln() {
    if(!checkForErrorMessage()) {
        return;
    }

    displayValue = dis.value;

    if (document.getElementById('ln').innerHTML == 'ln') {
        upper.value = 'ln(' + displayValue + ')';
        dis.value = Math.log(displayValue);
    } else {
        upper.value = 'e^(' + displayValue + ')';
        dis.value = Math.pow(Math.E, displayValue);
    }
}

function plusminus() {
    if(!checkForErrorMessage()) {
        return;
    }
    displayValue = dis.value;
    dis.value = (displayValue>0) ? (0-displayValue) : (Math.abs(dis.value));
}

// **********************************************************************************************
function answer() {

    displayValue = dis.value;

    if(!checkForErrorMessage() || displayValue==Invalid) {
        return;
    }

    let cb = document.getElementById('btn-check');
    let error = Empty;
    try {
        upper.value = displayValue + '=';
        dis.value = Empty;

        let x = upper.value.slice(0, -1);

        if(x.includes("^")) {
            x = x.replace('^', '**');
        }

        if(x.includes("yroot")) {
            let substrArr = x.split('yroot');
            let rightOprand = substrArr[1].trim();
            rightOprand = 1/rightOprand;

            x = substrArr[0] + ' ** (' + rightOprand + ')';
        }
       
        var y;
        if(Number.isFinite(eval(x))) {
            y = eval(x);
        }
        else {
            y = Error;
        }

    } catch {
        error = Error;
    }

    if(error==Error) {
        dis.value = Error;
    }
    else if (cb.checked == true) {
        dis.value = Number.parseFloat(y).toExponential();
    } else {
        dis.value = y;
    }
}