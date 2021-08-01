function carregar() {
    let msg = document.querySelector('p');
    let img = document.querySelector('img');
    let data = new Date();
    let hora = data.getHours();    
    msg.innerHTML = `São ${hora} horas`
    if (hora > 5 && hora < 12) {
        img.src = 'img/manha.png'
        document.body.style.background = 'rgb(255, 228, 108)'
    } else if (hora >= 12 && hora < 18) {
        img.src = 'img/tarde.jpg'
        document.body.style.background = 'rgb(111, 147, 247)'
    } else {
        img.src = 'img/noite.jpg'
        document.body.style.background = 'rgb(0, 7, 27)'
    }
}