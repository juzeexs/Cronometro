function mostrarDataHoraAtual() {
    const agora = new Date();

    const dia = String(agora.getDate()).padStart(2, '0');
    document.getElementById("dia").innerHTML = dia+" :";
    const mes = String(agora.getMonth() + 1).padStart(2, '0');
    document.getElementById("mes").innerHTML = mes+" :";
    const ano = agora.getFullYear();
    document.getElementById("ano").innerHTML = ano;

    const horas = String(agora.getHours()).padStart(2, '0');
    document.getElementById("horas").innerHTML = horas+" :";
    const minutos = String(agora.getMinutes()).padStart(2, '0');
    document.getElementById("minutos").innerHTML = minutos+" :";
    const segundos = String(agora.getSeconds()).padStart(2, '0');
    document.getElementById("segundos").innerHTML = segundos;

}

setInterval(mostrarDataHoraAtual,1000);





