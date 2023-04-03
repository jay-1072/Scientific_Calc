let dis = document.getElementById("result");
let upper = document.getElementById("subtext");
let marr = [];
let op = ['+', '-', '*', '/', '%', '.'];
/*************************************************************************************************************************************************** */

// ****************************************** DISPLAY INTO SCREEN **********************************
function display(val) {

    if(dis.value=='Error!') {
        return false;
    }

    let oldop = dis.value.slice(-1);
    if (op.includes(val) && op.includes(oldop)) {
        dis.value = dis.value.slice(0, -1);
        dis.value += val;
    } else if(val==Math.E) {
        
        if(dis.value.slice(-1)=='+' || dis.value.slice(-1)=='-' || dis.value.slice(-1)=='*' || dis.value.slice(-1)=='/' || dis.value.slice(-1)=='%') {
            dis.value += Math.E;
        }
        else {
            upper.value = '';
            dis.value = Math.E;
        }
    }
    else if(val==Math.PI) {

        if(dis.value.slice(-1)=='+' || dis.value.slice(-1)=='-' || dis.value.slice(-1)=='*' || dis.value.slice(-1)=='/' || dis.value.slice(-1)=='%') {
            dis.value += Math.PI;
        }
        else {
            upper.value = '';
            dis.value = Math.PI;
        }
    }
    else {
        dis.value += val;
    }
}
// **********************************************************************************************

function textChange() {
    let btntxt = document.getElementById("btntxt").innerHTML;
    if (btntxt == 'DEG')
        document.getElementById("btntxt").innerHTML = 'RAD';
    else
        document.getElementById("btntxt").innerHTML = 'DEG';
}

let checkedCnt = 0;
function fe() {
    if(checkedCnt%2==0) {
        document.getElementById("btn-check").checked = true;
        changeBtn = 1;
    }
    else if(checkedCnt%2==1) {
        document.getElementById("btn-check").checked = false;
        changeBtn = 0;
    }
    
    var cb = document.getElementById('btn-check');
    if (cb.checked == true) {
        if (dis.value != '') {
            const fE = parseFloat(dis.value);
            dis.value = fE.toExponential();
        } else {
            const fE = 0;
            dis.value = fE.toExponential();
        }
    }
}
// ************************************************************************************************

// Memory store
function memoryStore() {
    if (dis.value == '') {
        marr.push(0);
    }
    if (marr[marr.length - 1] != dis.value && marr[marr.length - 1] !=parseFloat(dis.value)) {
        marr.push(parseFloat(dis.value));
    }
    document.querySelector('#mc').disabled = false;
    document.querySelector('#mr').disabled = false;
    document.querySelector('#m').disabled = false;
    console.log(marr);
}

// Memory read
function memoryRead() {
    dis.value = marr[marr.length - 1];
    console.log(marr);
}

//  Memory clear
function memoryClear() {
    marr.splice(0, marr.length);
    document.querySelector('#mc').disabled = true;
    document.querySelector('#mr').disabled = true;
    document.querySelector('#m').disabled = true;
}

// Memory plus
function memoryPlus() {
    marr[marr.length - 1] += parseFloat(dis.value);
    console.log(marr);
}

// Memory minus
function memoryMinus() {
    marr[marr.length - 1] -= parseFloat(dis.value);
    console.log(marr);
}

// Create memory table
function createMemoryTable() {
    let html = "<table>";
    for (var i = marr.length - 1; i >= 0; i--) {
        html += "<tr>";
        html += "<td>" + marr[i] + "</td>";
        html += "</tr>";
    }
    html += "</table>";
    document.getElementById('memory').innerHTML = html;
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
    if(dis.value=='Error!') {
        return false;
    }

    let mode = document.getElementById("btntxt").innerHTML;
    upper.value = 'sin(' + dis.value + ')';
    if (mode == 'RAD') {
        dis.value = Math.sin(dis.value);
    } else {
        dis.value = Math.sin((dis.value * Math.PI) / 180);
    }
}

function cos() {
    if(dis.value=='Error!') {
        return false;
    }

    let mode = document.getElementById("btntxt").innerHTML;
    upper.value = 'cos(' + dis.value + ')';
    if (mode == 'RAD') {
        dis.value = Math.cos(dis.value);
    } else {
        dis.value = Math.cos((dis.value * Math.PI) / 180);
    }
}

function tan() {
    if(dis.value=='Error!') {
        return false;
    }

    let mode = document.getElementById("btntxt").innerHTML;
    upper.value = 'tan(' + dis.value + ')';
    if (mode == 'RAD') {
        dis.value = Math.tan(dis.value);
    } else {
        dis.value = Math.tan((dis.value * Math.PI) / 180);
    }
}

function sec() {
    if(dis.value=='Error!') {
        return false;
    }

    let mode = document.getElementById("btntxt").innerHTML;
    upper.value = 'sec(' + dis.value + ')';
    if (mode == 'RAD') {
        dis.value = 1 / Math.cos(dis.value);
    } else {
        dis.value = 1 / Math.cos((dis.value * Math.PI) / 180);
    }
}

function cosec() {
    if(dis.value=='Error!') {
        return false;
    }

    let mode = document.getElementById("btntxt").innerHTML;
    upper.value = 'cosec(' + dis.value + ')';
    if (mode == 'RAD') {
        dis.value = 1 / Math.sin(dis.value);
    } else {
        dis.value = 1 / Math.sin((dis.value * Math.PI) / 180);
    }
}

function cot() {
    if(dis.value=='Error!') {
        return false;
    }

    let mode = document.getElementById("btntxt").innerHTML;
    upper.value = 'cot(' + dis.value + ')';
    if (mode == 'RAD') {
        dis.value = 1 / Math.tan(dis.value);
    } else {
        dis.value = 1 / Math.tan((dis.value * Math.PI) / 180);
    }
}

// ****************************************** Inverse Trigonometry ********************************************

function inv_RAD_DEG(val) {
    return ((val * 180) * (Math.PI ** -1));
}

// 2nd INSIDE TRIGONOMETRY
function sinInverse() {
    if(dis.value=='Error!') {
        return false;
    }

    let mode = document.getElementById("btntxt").innerHTML;
    upper.value = 'sin-1(' + dis.value + ')';

    if (dis.value >= -1 && dis.value <= 1) {
        if (mode == 'RAD') {
            dis.value = Math.asin(dis.value);
        } else {
            dis.value = inv_RAD_DEG(Math.asin(dis.value));
        }
    }
    else {
        dis.value = "Enter value between -1 and 1";
    }

}

function cosInverse() {
    if(dis.value=='Error!') {
        return false;
    }

    let mode = document.getElementById("btntxt").innerHTML;
    upper.value = 'cos-1(' + dis.value + ')';

    if (dis.value >= -1 && dis.value <= 1) {
        if (mode == 'RAD') {
            dis.value = Math.acos(dis.value);
        } else {
            dis.value = inv_RAD_DEG(Math.acos(dis.value));
        }
    }
    else {
        dis.value = "Enter value between -1 and 1";
    }
}

function tanInverse() {
    if(dis.value=='Error!') {
        return false;
    }

    let mode = document.getElementById("btntxt").innerHTML;
    upper.value = 'tan-1(' + dis.value + ')';

    if (mode == 'RAD') {
        dis.value = Math.atan(dis.value);
    } else {
        dis.value = inv_RAD_DEG(Math.atan(dis.value));
    }
}

function secInverse() {
    if(dis.value=='Error!') {
        return false;
    }

    let mode = document.getElementById("btntxt").innerHTML;
    upper.value = 'sec-1(' + dis.value + ')';

    if (dis.value > -1 && dis.value < 1) {
        dis.value = "Invalid input";
    }
    else {
        if (mode == 'RAD') {
            dis.value = Math.acos(1 / dis.value);
        } else {
            dis.value = inv_RAD_DEG(Math.acos(1 / dis.value));
        }
    }
}

function cosecInverse() {
    if(dis.value=='Error!') {
        return false;
    }

    let mode = document.getElementById("btntxt").innerHTML;
    upper.value = 'cosec-1(' + dis.value + ')';

    if (dis.value > -1 && dis.value < 1) {
        dis.value = "Invalid input";
    }
    else {
        if (mode == 'RAD') {
            dis.value = Math.asin(1 / dis.value);
        } else {
            dis.value = inv_RAD_DEG(Math.asin(1 / dis.value));
        }
    }
}

function cotInverse() {
    if(dis.value=='Error!') {
        return false;
    }

    let mode = document.getElementById("btntxt").innerHTML;
    upper.value = 'cot-1(' + dis.value + ')';

    if (mode == 'RAD') {
        dis.value = Math.atan(1 / dis.value);
    } else {
        dis.value = inv_RAD_DEG(Math.atan(1 / dis.value));
    }
}

// ****************************************** Hyperbolic Trigonometry ****************************************

// hyp INSIDE TRIGOMOMETRY
function sinh() {
    if(dis.value=='Error!') {
        return false;
    }

    upper.value = 'sinh(' + dis.value + ')';
    dis.value = Math.sinh(dis.value);
}

function cosh() {
    if(dis.value=='Error!') {
        return false;
    }

    upper.value = 'cosh(' + dis.value + ')';
    dis.value = Math.cosh(dis.value);
}

function tanh() {
    if(dis.value=='Error!') {
        return false;
    }

    upper.value = 'tanh(' + dis.value + ')';
    dis.value = Math.tanh(dis.value);
}

function sech() {
    if(dis.value=='Error!') {
        return false;
    }

    upper.value = 'sech(' + dis.value + ')';
    dis.value = 1 / Math.cosh(dis.value);
}

function cosech() {
    if(dis.value=='Error!') {
        return false;
    }

    upper.value = 'cosech(' + dis.value + ')';
    if (dis.value == '0') {
        dis.value = 'Cannot divide by zero';
    }
    else {
        dis.value = 1 / Math.sinh(dis.value);
    }
}

function coth() {
    if(dis.value=='Error!') {
        return false;
    }
    
    upper.value = 'coth(' + dis.value + ')';
    if (dis.value == '0') {
        dis.value = 'Cannot divide by zero';
    }
    else {
        dis.value = 1 / Math.tanh(dis.value);
    }
}
// **********************************************************************************************

// ********************************** INSIDE FUNCTION *******************************************
function absolute() {
    upper.value = 'abs(' + dis.value + ')=';

    if(dis.value=='Error!') {
        return false;
    }
    else {
        dis.value = Math.abs(dis.value);
    }
}

function ceil() {
    if(dis.value=='Error!') {
        return false;
    }

    upper.value = 'ceil(' + dis.value + ')';
    dis.value = Math.ceil(dis.value);
}

function floor() {
    if(dis.value=='Error!') {
        return false;
    }
    
    upper.value = 'floor(' + dis.value + ')';
    dis.value = Math.floor(dis.value);
}

function rand() {
   
    upper.value = '';
    dis.value = Math.random(dis.value);
}

function degreeMinuteSecond() {

    if(dis.value=='Error!') {
        return false;
    }
    
    upper.value = "dms(" + dis.value + ")";
    let degree = Math.floor(dis.value);
    let minutes = ((dis.value - Math.floor(dis.value)) * 60.0);
    let seconds = (minutes - Math.floor(minutes)) * 60.0;
    dis.value = degree + "." + Math.floor(minutes) + seconds.toFixed(0);
}

function deg() {

}
// **********************************************************************************************

var btnCount = 1;
function changeBtn() {
    if (btnCount % 2 === 0) {
        document.getElementById('sqr').innerHTML = 'x<sup>2</sup>';
        document.getElementById('root').innerHTML = '2&#x221A;x';
        document.getElementById('expo').innerHTML = 'x<sup>y</sup>';
        document.getElementById('tenpow').innerHTML = '10<sup>x</sup>';
        document.getElementById('log').innerHTML = 'log';
        document.getElementById('ln').innerHTML = 'ln';
        btnCount++;
    } else {
        document.getElementById('sqr').innerHTML = 'x<sup>3</sup>';
        document.getElementById('root').innerHTML = '3&#x221A;x';
        document.getElementById('expo').innerHTML = 'y&#x221A;x';
        document.getElementById('tenpow').innerHTML = '2<sup>x</sup>';
        document.getElementById('log').innerHTML = 'log<sub>y</sub>x';
        document.getElementById('ln').innerHTML = 'e<sup>x</sup>';
        btnCount++;
    }
}

// ****************************************** 1st row ********************************************
function dlt() {
    if (dis.value == '') {
        upper.value = '';
    }
    dis.value = '';
}

function pop() {
    if (dis.value == 'Error!' || dis.value == 'Infinity' || dis.value == 'NaN') {
        dis.value = '';
    } else {
        dis.value = dis.value.slice(0, dis.value.length - 1);
    }
}
// ******************************************* 2nd row ******************************************

function sqr() {

    if(dis.value=='Error!') {
        return false;
    }

    if (document.getElementById('sqr').innerHTML == 'x<sup>3</sup>') {
        upper.value = 'cube(' + dis.value + ')';
        dis.value = Math.pow(dis.value, 3);
    } else {
        upper.value = 'sqr(' + dis.value + ')';
        dis.value = Math.pow(dis.value, 2);
    }
}

function inverse() {

    upper.value = '1/(' + dis.value + ')=';

    if(dis.value=='Error!') {
        return false;
    }
    else {
        try{
            if(Number.isFinite(eval(upper.value.slice(0, -1)))) {
                dis.value = eval(upper.value.slice(0, -1));
            }
            else {
                dis.value = 'Error!';
            }
            
        }
        catch {
            dis.value = 'Error!';
        }
    }
}

function expo() {

    if(dis.value=='Error!') {
        return false;
    }

    if (dis.value != '') {
        const fE = parseFloat(dis.value);
        dis.value = fE.toExponential();
    
    } else {
        const fE = 0;
        dis.value = fE.toExponential();
        
    }
}

// ******************************************** 3rd row *****************************************

function sqroot() {

    if(dis.value=='Error!') {
        return false;
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
    
    if(dis.value=='Error!' || Number.parseInt(dis.value)<0) {
        dis.value = 'Error!';
    }
    else {
        upper.value = 'fact(' + dis.value + ')';
        let fact = 1;
        if (dis.value == 0 || dis.value == 1) {
            fact = 1;
        } else {
            for (let i = 1; i <= dis.value; i++) {
                fact *= i;
            }
        }
        dis.value = fact;
    }
}
// ********************************************* 4th row ****************************************

function xtoy() {

    if(dis.value=='Error!') {
        return false;
    }

    if (document.getElementById('expo').innerHTML == 'x<sup>y</sup>') {
        dis.value += '^';
    } else {
        // dis.value = dis.value + "**(1/";

        dis.value = dis.value + " yroot "
    }
}

// ********************************************** 5th row ***************************************

function tentox() {

    if(dis.value=='Error!') {
        return false;
    }

    if (document.getElementById('tenpow').innerHTML == '10<sup>x</sup>') {
        upper.value = '10^(' + dis.value + ')';
        dis.value = Math.pow(10, dis.value);
    } else {
        upper.value = '2^(' + dis.value + ')';
        dis.value = Math.pow(2, dis.value);
    }

}
// ********************************************** 6th row ***************************************

let num = 0, base = 0, flag = true;
function log() {

    if(dis.value=='Error!') {
        return false;
    }

    if (document.getElementById('log').innerHTML == 'log') {
        upper.value = 'log(' + dis.value + ')';
        dis.value = Math.log10(dis.value);
    }
    else {
        if (flag) {
            num = dis.value;
            upper.value = num + ' log base ';
            dis.value = '';
        }
        else if (!flag) {
            base = dis.value;
            upper.value += dis.value;
            dis.value = Math.log(num) / Math.log(base);
        }
        flag = !flag;
    }

}
// *********************************************** 7th row*****************************************

function ln() {

    if(dis.value=='Error!') {
        return false;
    }

    if (document.getElementById('ln').innerHTML == 'ln') {
        upper.value = 'ln(' + dis.value + ')';
        dis.value = Math.log(dis.value);
    } else {
        upper.value = 'e^(' + dis.value + ')';
        dis.value = Math.pow(Math.E, dis.value);
    }
}

function plusminus() {

    if(dis.value=='Error!') {
        return false;
    }

    if (dis.value > 0)
        dis.value = 0 - dis.value;
    else
        dis.value = Math.abs(dis.value);
}

// **********************************************************************************************


function answer() {

    if(dis.value=='Error!' || dis.value=='Invalid input') {
        return false;
    }

    let cb = document.getElementById('btn-check');
    let error = '';
    try {
        upper.value = dis.value + '=';
        dis.value = '';

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
            y = 'Error!';
        }

    } catch {
        error = 'Error!';
    }

    if(error=='Error!') {
        dis.value = error;
    }
    else if (cb.checked == true) {
        dis.value = Number.parseFloat(y).toExponential();
    } else {
        dis.value = y;
    }
}