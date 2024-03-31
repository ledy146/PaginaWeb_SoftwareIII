document.addEventListener('DOMContentLoaded', function() {
    // Vector para almacenar los datos
    const datosGuardados = [];
    
    const contactForm = document.getElementById('contactForm');
    
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevenir el envío predeterminado del formulario
        
        // Obtener los valores del formulario
        const nombre = contactForm.elements['name'].value;
        const email = contactForm.elements['email'].value;
        const mensaje = contactForm.elements['message'].value;
        
        // Obtener la fecha y hora actual
        const now = new Date();
        const fechaHora = now.toLocaleString();
        
        // Crear un objeto con los datos
        const datos = {
            nombre: nombre,
            email: email,
            mensaje: mensaje,
            fechaHora: fechaHora
        };
        
        // Agregar los datos al vector
        datosGuardados.push(datos);
        
        // Limpiar el formulario después del envío
        contactForm.reset();
        //volver a la pagina
       // window.history.back();
        
        console.log('Datos guardados en el vector:', datosGuardados);
    });
    
});


