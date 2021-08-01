function verify() {
    let date = new Date(); // Pega a data atual completa;
    let year = date.getFullYear(); // Pega apenas o ano da data atual completa;
    let yearF = document.querySelector('input#year').value;
    let sexF = document.getElementsByName('radsex');
    let gender = "";
    let res = document.querySelector('div#res');
    let age = year - yearF;
    let x = 'anos';
    let img = document.createElement('img'); // Cria um elemento img e o atribui à variável img;
    img.setAttribute('id', 'picture'); // adiciona o atributo id com o valor 'picture' à tag criada;
    
    res.style.textAlign = 'center'; // Seta a config. de alinhamento de texto ao centro ao elemento div#res;
    
    if (yearF > year || yearF == "") {
        res.innerHTML = '<p>Digite um ano válido.<p>';
    } else {
        if (sexF[0].checked) {
            if (age < 2) {
                x = 'ano';
                img.setAttribute('src', 'img/menino.jpg'); // atribui um valor ao atributo de source da imagem;
                gender = 'Menino';  
            } else if (age < 10) {
                img.setAttribute('src', 'img/menino.jpg');
                gender = 'Menino';
            } else if (age < 21) {
                img.setAttribute('src', 'img/moço.jpg');
                gender = 'Garoto';
            } else if (age < 50) {
                img.setAttribute('src', 'img/homem.jpg');
                gender = 'Homem';
            } else {
                img.setAttribute('src', 'img/senhor.jpg')
                gender = 'Senhor'
            }
        } else if (sexF[1].checked) {
            if (age < 2) {
                x = 'ano';
                img.setAttribute('src', 'img/menina.jpg');
                gender = 'Menina';
            } else if (age < 10) {
                img.setAttribute('src', 'img/menina.jpg');
                gender = 'Menina';
            } else if (age < 21) {
                img.setAttribute('src', 'img/moça.jpg');
                gender = 'Garota';
            } else if (age < 50) {
                img.setAttribute('src', 'img/mulher.jpg');
                gender = 'Mulher';
            } else {
                img.setAttribute('src', 'img/senhora.jpg');
                gender = 'Senhora'
            }
        }
        res.innerHTML = `<p>${gender} de ${age} ${x}.</p>`
        res.appendChild(img) // Acrescenta a tag filha anteriormente criada e atribuida à variável 'img';
        
    }
}