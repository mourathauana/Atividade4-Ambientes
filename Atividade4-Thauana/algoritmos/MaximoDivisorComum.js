
function mdc(z, y) {
    while (y !== 0) {
            var r = z % y;
            z = y;
            y = r;
        }
        return z;
    }

function listaMDC(numberList) {
    var resultadoMDC = numberList[0];

    for (var i = 1; i < numberList.length; i++) {
        resultadoMDC = mdc(resultadoMDC, numberList[i]);
    }
    return resultadoMDC;
}





module.exports = listaMDC