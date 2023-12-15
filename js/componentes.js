
document.addEventListener('DOMContentLoaded', () => {
    const miBotonEmisor = document.getElementById('miBotonEmisor');
    const mensajeReceptor = document.getElementById('mensajeReceptor');

    miBotonEmisor.addEventListener('click', () => {
        const mensaje = 'Mapache Albino de las montañas';
        const customEvent = new CustomEvent('enviar-mensaje', {
            detail: { mensaje: mensaje }
        });
        document.dispatchEvent(customEvent);
    });

    document.addEventListener('enviar-mensaje', (event) => {
        const mensajeRecibido = event.detail.mensaje;
        mensajeReceptor.textContent = 'Mensaje recibido: ' + mensajeRecibido;
    });
});
