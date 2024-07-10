
function mostrar_hora() {


    let hoy = new Date();
    let hora_actual = hoy.getHours();
    let minutos_actual = hoy.getMinutes();
    let segundos_actual = hoy.getSeconds();

    const hora = document.getElementById("hora");
    const minutos = document.getElementById("minutos");
    const segundos = document.getElementById("segundos");

    
    
    hora.textContent = hora_actual
    minutos.textContent = minutos_actual;
    segundos.textContent = segundos_actual
    
    if(hora.textContent.length < 2) {
        hora.textContent = "0" + hora_actual
    }

    if(minutos.textContent.length < 2) {
        minutos.textContent = "0" + minutos_actual
    }

    if(segundos.textContent.length < 2) {
        segundos.textContent = "0" + segundos_actual
    }
   
}


setInterval(mostrar_hora, 1000);




