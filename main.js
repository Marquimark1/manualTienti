
const dataCliente = document.querySelector('#datosImportantes');

dataCliente.addEventListener('submit', recibeInformacion);

function recibeInformacion(event){
    event.preventDefault();
    const formulario = new FormData(this);
    navigator.clipboard.writeText(`
    Nombre : ${formulario.get('nombreEjecutivo')}
    Cedula : ${formulario.get('minEjecutivo')};
`)
    .then(() => {
        // alert('Texto copiado al portapapeles')
        cajaModal();
    })
    .catch(err => {
        alert('Error al copiar al portapapeles:', err)
        // console.error('Error al copiar al portapapeles:', err)
    })
}

function cajaModal(){
    const cajaModal = document.querySelector('.cajaModal');
    cajaModal.setAttribute('style', 'display: flex;flex-direction: column' );
    const cerrarModal = document.querySelector('.cerrarModal');
    dataCliente.setAttribute('style', 'visibility: hidden');
    cerrarModal.addEventListener('click', function(){
        cajaModal.setAttribute('style','display: none');
        dataCliente.setAttribute('style', 'visibility: visible');
    })
}

