let tab = document.querySelector('select#tabuada')

function calcular() {
    let numS = document.querySelector('input#num').value
    let num = Number(numS)
    if (numS != "") {
        tab.textContent = ""
        for (m = 1; m <= 10; m++) {
            tab.innerHTML += `<option>${num} x ${m} = ${num*m}</option>`
        }
    }
}

