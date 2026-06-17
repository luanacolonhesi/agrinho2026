let pontos = 0;
let escolhidos = {solo:false, agua:false, vegetacao:false};

function escolha(categoria, tipo){
    if(escolhidos[categoria]){
        alert("Você já fez sua escolha nesta categoria!");
        return;
    }

    if(tipo === 'sustentavel'){
        pontos += 10;
    } else{
        pontos -= 5;
    }

    escolhidos[categoria] = true;

    atualizarPlacar();
}

function atualizarPlacar(){
    document.getElementById('pontos').innerText = pontos;

    let msg = '';
    if(pontos <= 0){
        msg = "⚠️ Cuidado! Sua fazenda está em risco ambiental.";
    } else if(pontos <= 15){
        msg = "🌿 Sua fazenda está se desenvolvendo.";
    } else{
        msg = "🏆 Parabéns! Sua fazenda é sustentável.";
    }

    document.getElementById('mensagem').innerText = msg;
}

let curiosidadesArray = [
    "Uma árvore adulta pode absorver cerca de 22 kg de CO₂ por ano.",
    "A rotação de culturas melhora a fertilidade do solo naturalmente.",
    "Irrigação eficiente pode economizar até 50% da água utilizada.",
    "Preservar matas ciliares ajuda a manter rios limpos.",
    "Plantas nativas atraem polinizadores e aumentam a produtividade."
];

function novaCuriosidade(){
    let idx = Math.floor(Math.random() * curiosidadesArray.length);
    document.getElementById('curiosidade').innerText = curiosidadesArray[idx];
}
