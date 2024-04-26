// Função para abrir a aba correspondente
function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Função para calcular o tempo restante até uma data específica
function countdown(targetDate, elementId) {
    var currentDate = new Date();
    var difference = targetDate.getTime() - currentDate.getTime();
    var days = Math.floor(difference / (1000 * 60 * 60 * 24));
    var hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((difference % (1000 * 60)) / 1000);
    document.getElementById(elementId).innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
}

// Definindo as datas de aniversário
var meuAniversario = new Date("April 30, 2024 00:00:00");
var aniversarioColega1 = new Date("May , 2024 00:00:00");
var aniversarioColega2 = new Date("June 20, 2024 00:00:00");

// Atualizando os contadores de tempo restante
setInterval(function() {
    countdown(meuAniversario, "meuAniversarioCountdown");
    countdown(aniversarioColega1, "colega1Countdown");
    countdown(aniversarioColega2, "colega2Countdown");
}, 1000);