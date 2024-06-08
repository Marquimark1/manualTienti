

const muestraData = import('./main.js');

const nombreEjecutivo = document.querySelector('#datoEjecutivo');
const ingresoNombre = 'MARCO';

muestraData.then(() => {
        console.log('saludos')
        // salidaManual(dataImport.get('nombreEjecutivo'),dataImport.get('minEjecutivo'));
    })
    .catch(err => {
        // alert('Error al copiar al portapapeles:', err)
        console.log( err );
        // console.error('Error al copiar al portapapeles:', err)
     })

