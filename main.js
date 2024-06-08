

const datosImportantes = document.querySelector('#datosImportantes');

datosImportantes.addEventListener('submit',muestraData);

function muestraData(event){
    const datosEjecutivo = '';
    event.preventDefault();
    const dataImport = new FormData(this);
    dataImport.get('nombreEjecutivo')
    const numeroEjecutivo = dataImport.get('minEjecutivo')
    window.location.href = './content/manual.html';
}


// function mostrarData(event){
//     event.preventDefault();
//     const dataImport = new FormData(this);
//     navigator.clipboard.writeText(`
//     ${dataImport.get('nombreEjecutivo')}
//     ${dataImport.get('minEjecutivo')}
//     `)    

//     .then(() => {
//         window.location.href = './content/manual.html';
//         // salidaManual(dataImport.get('nombreEjecutivo'),dataImport.get('minEjecutivo'));
//     })
//     .catch(err => {
//         alert('Error al copiar al portapapeles:', err)
//         console.log( err );
//         // console.error('Error al copiar al portapapeles:', err)
//     })
// }
