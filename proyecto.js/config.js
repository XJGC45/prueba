function calculate(){

    const amount = parseFloat(document.getElementById("amount").value);
    const percentage = parseFloat(document.getElementById("percentage").value);
    let result = 0;

    if (isNaN(amount) || isNaN(percentage)) {
        alert("Por favor, ingrese valores válidos para el monto y el porcentaje.");
        return;
    }else {

    result = amount * (percentage / 100);
    document.querySelector("#result").value = result.toFixed(2);
 
    }
}

function clearInputs(){
    document.querySelector("#amount").value= "";
    document.querySelector("#percentage").value= "";
    document.querySelector("#result").value= "";
}




function guardarHonorariosLocalStorage() {
    localStorage.setItem('honorariosRegistrados', JSON.stringify(honorariosRegistrados));
}

function cargarHonorariosLocalStorage() {
    const datosGuardados = localStorage.getItem('honorariosRegistrados');
    if (datosGuardados) {
        honorariosRegistrados = JSON.parse(datosGuardados);
        actualizarListadoHonorarios();
    }
}

$(document).ready(function () {
    // Cargar datos guardados en LocalStorage al cargar la página
    cargarHonorariosLocalStorage();

    // ...
});

function agregarHonorario(honorario) {
    honorariosRegistrados.push(honorario);
    guardarHonorariosLocalStorage();
    actualizarListadoHonorarios();
}



