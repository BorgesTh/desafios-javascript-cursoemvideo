let DivText = document.querySelector('p')

function count() {
    let startS = document.querySelector('input#start').value
    let endS = document.querySelector('input#end').value
    let start = Number(startS)
    let end = Number(endS)
    let step = Number(document.querySelector('input#step').value)
    let text = ""
    DivText.innerHTML = "<strong>Contagem: </strong>"
    if (step < 1) {
        alert('Valor do salto inválido. Considera-se 1.')
        step = 1
    }
    if (start < end && startS != "" && endS != "") {
        for (var c = start; c <= end; c += step) {
            text += `${c}.. `
        }
        DivText.innerHTML += `${text.slice(0, -2)}`
    } else if (start > end && startS != "" && endS != "") {
        for (var c = start; c >= end; c -= step) {
            text += `${c}.. `
        }
        DivText.innerHTML += `${text.slice(0, -2)}`
    } else if (start == end && startS != "") {
        text = `${start}.`
        DivText.innerHTML += `${text}`
    } else {
        DivText.innerHTML = 'Impossível contar.'
    } 
    
}