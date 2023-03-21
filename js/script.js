let dis = document.getElementById("result");
let upper = document.getElementById("subtext");
let op = ['+', '-', '*', '/', '%', '.'];
/*************************************************************************************************************************************************** */

// ****************************************** DISPLAY INTO SCREEN **********************************
function display(val) {
    let oldop = dis.value.slice(-1);
    if (op.includes(val) && op.includes(oldop)) {
        dis.value = dis.value.slice(0, -1);
        dis.value += val;
    } else {
        dis.value += val;
    }
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

// ****************************************** ROW: 1 ********************************************
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
// **********************************************************************************************

function sqr() {
    if (document.getElementById('sqr').innerHTML == 'x<sup>3</sup>') {
        upper.value = 'cube(' + dis.value + ')';
        dis.value = Math.pow(dis.value, 3);
    } else {
        upper.value = 'sqr(' + dis.value + ')';
        dis.value = Math.pow(dis.value, 2);
    }
}

function inverse() {
    upper.value = '1/(' + dis.value + ')';
    dis.value = 1 / dis.value;
}

function expo() {
    if (dis.value != '') {
        const fE = parseFloat(dis.value);
        dis.value = fE.toExponential();
    } else {
        const fE = 0;
        dis.value = fE.toExponential();
    }
}

// **********************************************************************************************

function sqroot() {
    if (document.getElementById('root').innerHTML == '2√x') {
        upper.value = '√(' + dis.value + ')';
        dis.value = Math.sqrt(dis.value);
    } else {
        upper.value = 'cuberoot(' + dis.value + ')';
        dis.value = Math.pow(dis.value, 1 / 3);
    }
}

function factorial() {
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
// **********************************************************************************************

function xtoy() {
    if (document.getElementById('expo').innerHTML == 'x<sup>y</sup>') {
        dis.value += '**';
    } else {
        dis.value = dis.value + "**(1/";
    }
}

// **********************************************************************************************

function tentox() {
    if (document.getElementById('tenpow').innerHTML == '10<sup>x</sup>') {
        upper.value = '10^(' + dis.value + ')';
        dis.value = Math.pow(10, dis.value);
    } else {
        upper.value = '2^(' + dis.value + ')';
        dis.value = Math.pow(2, dis.value);
    }

}
// **********************************************************************************************

let num = 0, base = 0, flag = true;
function log() {
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
// **********************************************************************************************

function answer() {
    try {
        upper.value = dis.value + '=';
        dis.value = '';
        let x = upper.value.slice(0, -1);
        var y = eval(x);
    } catch {
        y = 'Error!';
    }

    let cb = document.getElementById('btn-check');
    if (cb.checked == true) {
        dis.value = y.toExponential();
    } else {
        dis.value = y;
    }
}