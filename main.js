

const datosImportantes = document.querySelector('#datosImportantes');
const datoEjecutivo = document.querySelector('.datoEjecutivo');
// console.log(datoEjecutivo);

datosImportantes.addEventListener('submit',mostrarData);

function mostrarData(event){
    event.preventDefault();
    const dataImport = new FormData(this);
    navigator.clipboard.writeText(`
    Nombre : ${dataImport.get('nombreEjecutivo')}
    Min : ${dataImport.get('minEjecutivo')}
    `)    

    .then(() => {
        salidaManual(dataImport.get('nombreEjecutivo'),dataImport.get('minEjecutivo'));
    })
    .catch(err => {
        alert('Error al copiar al portapapeles:', err)
        console.log( err );
        // console.error('Error al copiar al portapapeles:', err)
    })
}

function salidaManual(nombre, min){
        window.location.href = './content/manual.html';
}
