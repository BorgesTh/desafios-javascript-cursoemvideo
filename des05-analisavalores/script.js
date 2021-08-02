let numbers = []
let optnumbers = []
let selnums = document.querySelector('select#selnums')
let res = []
let soma = 0

for (let c = 1; c <= 5; c++) {
    res.push(document.querySelector(`p#p${c}`))
}

function inLista(n, l) {
    if (l.indexOf(n) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    selnums.textContent = ""
    let numF = Number(document.querySelector('input#txtnum').value)
    if (numF < 1 || numF > 100 || inLista(numF, numbers)) {
        alert('[ERRO] Número inválido ou já adicionado')
    } else {
        optnumbers.push(`<option>Número ${numF} adicionado</option>`)
        numbers.push(numF)
    }
    for (let i in optnumbers) {
        selnums.innerHTML += optnumbers[i]
    }
    document.querySelector('input#txtnum').value = ""
    limparesultados()
}

function analisar() {
    limparesultados()
    numbers.sort()
    if (numbers.length == 0) {
        alert('[ERRO] Falta de dados')
    } else {
        res[0].innerHTML += ` <span>${numbers.length}</span>`
        res[1].innerHTML += ` <span>${numbers[numbers.length - 1]}</span>`
        res[2].innerHTML += ` <span>${numbers[0]}</span>`
        for (let i in numbers) {
            soma += numbers[i]
        }
        res[3].innerHTML += ` <span>${soma}</span>`
        res[4].innerHTML += ` <span>${soma / numbers.length}</span>`
    }
}

function limpar() {
    numbers = []
    optnumbers = []
    document.querySelector('input#txtnum').value = ""
    selnums.textContent = ""
    limparesultados()
}

function limparesultados() {
    soma = 0
    res[0].innerHTML = "Quantidade de números:"
    res[1].innerHTML = "Maior valor obtido:"
    res[2].innerHTML = "Menor valor obtido:"
    res[3].innerHTML = "Soma de todos os valores:"
    res[4].innerHTML = "Média entre todos os valores:"
}