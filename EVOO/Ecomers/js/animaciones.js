// Animaciones para productos
export function animarProductos() {
    // Animación al cargar productos
    anime({
        targets: '.producto',
        translateY: [50, 0],
        opacity: [0, 1],
        scale: [0.9, 1],
        delay: anime.stagger(100, {start: 200}),
        duration: 800,
        easing: 'easeOutElastic',
        elasticity: 600
    });

    // Efecto hover para productos
    document.querySelectorAll('.producto').forEach(producto => {
        producto.addEventListener('mouseenter', () => {
            anime({
                targets: producto,
                scale: 1.05,
                boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
                duration: 300,
                easing: 'easeOutQuad'
            });
            
            // Efecto en la imagen del producto
            anime({
                targets: producto.querySelector('.producto-imagen'),
                scale: [1, 1.03],
                duration: 500,
                easing: 'easeOutExpo'
            });
        });

        producto.addEventListener('mouseleave', () => {
            anime({
                targets: producto,
                scale: 1,
                boxShadow: '0 2px 5px rgba(0,0,0,0.05)',
                duration: 300,
                easing: 'easeOutQuad'
            });
            
            anime({
                targets: producto.querySelector('.producto-imagen'),
                scale: 1,
                duration: 500,
                easing: 'easeOutExpo'
            });
        });
    });

    // Animación para botones "Agregar"
    anime({
        targets: '.producto-agregar',
        opacity: [0, 1],
        translateY: [10, 0],
        delay: anime.stagger(50),
        duration: 500,
        easing: 'easeOutQuad'
    });
}

// Animación para el modal de descripción
export function animarModal(modal) {
    anime({
        targets: modal,
        opacity: [0, 1],
        duration: 400,
        easing: 'easeOutQuad'
    });

    anime({
        targets: modal.querySelector('.modal-contenido'),
        scale: [0.9, 1],
        opacity: [0, 1],
        duration: 600,
        easing: 'easeOutElastic'
    });

    // Animación para el botón de cerrar
    anime({
        targets: modal.querySelector('.modal-cerrar'),
        rotate: [0, 360],
        scale: [0, 1],
        delay: 300,
        duration: 500,
        easing: 'easeOutBack'
    });
}

// Animación para el filtrado de productos
export function animarFiltrado() {
    anime({
        targets: '#contenedor-productos',
        opacity: [1, 0],
        duration: 200,
        easing: 'easeInQuad',
        complete: function() {
            anime({
                targets: '#contenedor-productos',
                opacity: [0, 1],
                duration: 400,
                easing: 'easeOutQuad'
            });
        }
    });

    anime({
        targets: '#titulo-principal',
        translateX: [-20, 0],
        opacity: [0, 1],
        duration: 500,
        easing: 'easeOutExpo'
    });
}

// Animación para el carrito (numerito)
export function animarCarrito() {
    anime({
        targets: '.numerito',
        scale: [1.5, 1],
        backgroundColor: ['#4eb0dd', '#333'],
        color: ['#fff', '#fff'],
        duration: 800,
        easing: 'easeOutElastic'
    });
}

// Animación para marcas/logos
export function animarMarcas() {
    anime({
        targets: '.marca',
        scale: [0.8, 1],
        opacity: [0, 1],
        rotateZ: [5, 0],
        delay: anime.stagger(100, {grid: [10, 1], from: 'center'}),
        duration: 1000,
        easing: 'easeOutElastic'
    });

    // Efecto hover para marcas
    document.querySelectorAll('.marca').forEach(marca => {
        marca.addEventListener('mouseenter', () => {
            anime({
                targets: marca,
                scale: 1.1,
                duration: 300,
                easing: 'easeOutBack'
            });
        });

        marca.addEventListener('mouseleave', () => {
            anime({
                targets: marca,
                scale: 1,
                duration: 300,
                easing: 'easeOutBack'
            });
        });
    });
}

// Animación para el toast de producto agregado
export function animarToast() {
    anime({
        targets: '.toastify',
        translateX: [100, 0],
        opacity: [0, 1],
        duration: 800,
        easing: 'easeOutElastic'
    });
}