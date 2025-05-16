document.addEventListener("DOMContentLoaded", function() {
    const historialContainer = document.getElementById('historial-container');
    const menuToggle = document.getElementById('menuToggle');
    const sidebar = document.querySelector('.sidebar');
    const logoutButton = document.getElementById('logout');


    const historialDeCompras = [
        {
            id: 1,
            fecha: '15 Marzo 2025',
            total: 5000,
            productos: ['Abrigo de lana premium', 'Camiseta de algodón orgánico', 'Zapatos deportivos UltraComfort'],
            estado: 'Completado',
            numeroOrden: '#EVO-2025-015'
        },
        {
            id: 2,
            fecha: '20 Marzo 2025',
            total: 3000,
            productos: ['Pantalones de mezclilla slim fit', 'Camiseta de manga larga térmica'],
            estado: 'Completado',
            numeroOrden: '#EVO-2025-020'
        }
    ];

    
    function mostrarHistorial() {
        historialContainer.innerHTML = '';
        
        historialDeCompras.forEach(compra => {
            const compraItem = document.createElement('div');
            compraItem.classList.add('compra-item');
            
            compraItem.innerHTML = `
                <div class="compra-header">
                    <div class="compra-fecha">
                        <i class="fas fa-calendar-day"></i>
                        ${compra.fecha}
                    </div>
                    <div class="compra-numero">
                        ${compra.numeroOrden}
                    </div>
                    <div class="compra-estado ${compra.estado.toLowerCase().replace(' ', '-')}">
                        ${compra.estado}
                    </div>
                </div>
                
                <div class="compra-productos">
                    <ul>
                        ${compra.productos.map(producto => `
                            <li>
                                <i class="fas fa-check-circle"></i>
                                ${producto}
                            </li>
                        `).join('')}
                    </ul>
                </div>
                
                <div class="compra-footer">
                    <div class="compra-total">
                        <span>Total:</span> $${compra.total.toLocaleString('es-MX')}
                    </div>
                    <div class="compra-acciones">
                        <button class="detalle-btn">
                            <i class="fas fa-file-invoice"></i> Detalles
                        </button>
                        <button class="repetir-btn">
                            <i class="fas fa-redo"></i> Repetir compra
                        </button>
                    </div>
                </div>
            `;
            
            historialContainer.appendChild(compraItem);
        });
    }

    
    menuToggle.addEventListener('click', function() {
        sidebar.classList.toggle('active');
    });

  
    if (logoutButton) {
        logoutButton.addEventListener('click', function() {
            localStorage.clear();
            sessionStorage.clear();
            window.location.href = "login.html";
        });
    }

   
    mostrarHistorial();
});