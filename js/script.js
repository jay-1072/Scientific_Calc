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