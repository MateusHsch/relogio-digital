const mod = 0;
function atualizarRelogio(){
    let agora = new Date();
    let horas = (agora.getHours()+mod).toString().padStart(2, '0');
    let minutos = agora.getMinutes().toString().padStart(2, '0');
    let segundos = agora.getSeconds().toString().padStart(2, '0');

    let texto = document.createElement('span')
    texto.innerText = `${horas}:${minutos}:${segundos}`;
    document.getElementsByClassName('data')[0].textContent = `${horas}:${minutos}:${segundos}`;
}
function atualizarFundo(){
    let agora = new Date();
    let horas = agora.getHours()+mod;
    if (horas >= 0 && horas <= 12){
        document.body.style.backgroundColor = '#809BCE';
        criarFundo('manha')
    }
    if (horas > 12 && horas <= 18){
        document.body.style.backgroundColor = '#FAA916';
        criarFundo('tarde')
    }
    if (horas >18 && horas < 24){
        document.body.style.backgroundColor = '#001B2E';
        criarFundo('noite')
    }
}

function criarFundo(tema){
    if (tema === 'manha'){
        let sol = document.createElement('div');
        sol.setAttribute('class', 'sol');
        sol.style.position = 'absolute';
        sol.style.zIndex = '1';
        sol.style.top = '40px';
        sol.style.left = '60%';
        document.body.appendChild(sol);
    }
    if (tema === 'tarde'){
        let solao = document.createElement('div');
        solao.setAttribute('class', 'solao');
        solao.style.position = 'absolute';
        solao.style.zIndex = '1';
        solao.style.top = '40px';
        solao.style.left = '60%';
        document.body.appendChild(solao);
    }
    if (tema === 'noite'){
        let lua = document.createElement('div');
        lua.setAttribute('class', 'lua');
        lua.style.position = 'absolute';
        lua.style.zIndex = '1';
        lua.style.top = '40px';
        lua.style.left = '60%';
        document.body.appendChild(lua);
    }
    let nuvens=[];
    nuvens.push(document.createElement('img'));
    nuvens.push(document.createElement('img'));
    nuvens.push(document.createElement('img'));
    nuvens.push(document.createElement('img'));
    nuvens.push(document.createElement('img'));
    let idx = 0;
    for (let n of nuvens){
        if (tema === 'manha'){
            n.src = '_imagens/nuvem-manha-full.png';
        }
        if (tema === 'tarde'){
            n.src = '_imagens/nuvem-tarde-full.png';
        }
        if (tema === 'noite'){
            n.src = '_imagens/nuvem-noite-full.png';
        }
        n.setAttribute('class', `nuvem${idx}`)
        n.style.position = 'absolute';
        n.style.zIndex = '2';
        idx++;
    }
    nuvens[0].style.top = '50px';
    nuvens[0].style.left = '-300px';

    nuvens[1].style.top = '100px';
    nuvens[1].style.left = '102%';

    nuvens[2].style.top = '200px';
    nuvens[2].style.left = '102%';

    nuvens[3].style.top = '290px';
    nuvens[3].style.left = '102%';

    nuvens[4].style.top = '310px';
    nuvens[4].style.left = '-300px';

    for (let n of nuvens){
        document.body.appendChild(n);
    }
}

setInterval(atualizarRelogio, 1000);
atualizarRelogio();
atualizarFundo();