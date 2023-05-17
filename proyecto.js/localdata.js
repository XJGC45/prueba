
function Prueba(){
    let profe = document.getElementById("servicio").value;
    let ServiosLol = document.getElementById("profesional").value;
    let hono = document.getElementById("honorarios").value;
    let fecha1 = document.getElementById("fecha").value;
    let obser = document.getElementById("observaciones").value;
    let PAci = document.getElementById("paciente").value;
    /*alert(ServiosLol);*/
    let datos ={
        servicio:profe,
        nombre: ServiosLol,
        honorarios: hono,
        fecha:fecha1,
        observaciones:obser,
        paciente:PAci
      

    }
    alert(datos["paciente"])
    alert(datos["servicio"])
    alert(datos["nombre"])
    alert(datos["honorarios"])
    alert(datos["fecha"])
    alert(datos["observaciones"])
}

