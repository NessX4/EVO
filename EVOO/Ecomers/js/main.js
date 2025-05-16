let productos = [];

fetch("./js/productos.json")
    .then(response => response.json())
    .then(data => {
        productos = data;
        cargarProductos(productos);
        agregarEventosMarcas();
    });

const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector("#numerito");

// Animación para productos
function animarProductos() {
    anime({
        targets: '.producto',
        translateY: [50, 0],
        opacity: [0, 1],
        delay: anime.stagger(100),
        duration: 800,
        easing: 'easeOutExpo'
    });
}

// Animación para el modal
function animarModal(modal) {
    anime({
        targets: modal,
        opacity: [0, 1],
        duration: 300,
        easing: 'easeOutQuad'
    });

    anime({
        targets: modal.querySelector('.modal-contenido'),
        translateY: [20, 0],
        opacity: [0, 1],
        duration: 400,
        delay: 100,
        easing: 'cubicBezier(0.22, 1, 0.36, 1)'
    });
}

function agregarEventosMarcas() {
    const botonesMarcas = document.querySelectorAll(".marcas-container button");
    
    botonesMarcas.forEach(boton => {
        boton.addEventListener("click", function() {
            const marca = this.querySelector("img").alt;
            filtrarPorMarca(marca);
        });
    });
}

function filtrarPorMarca(marca) {
    const productosFiltrados = productos.filter(producto => producto.marca === marca);
    
    cargarProductos(productosFiltrados);
    tituloPrincipal.innerText = `Productos de ${marca}`;
    
    botonesCategorias.forEach(boton => boton.classList.remove("active"));
}

function cargarProductos(productosElegidos) {
    contenedorProductos.innerHTML = "";

    productosElegidos.forEach(producto => {
        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="producto-detalles">
                <h3 class="producto-titulo">${producto.titulo}</h3>
                <p class="producto-precio">$${producto.precio}</p>
                <button class="producto-agregar" id="${producto.id}">Agregar</button>
            </div>
        `;

        div.addEventListener("click", () => mostrarDescripcion(producto));
        contenedorProductos.append(div);
    });

    actualizarBotonesAgregar();
    animarProductos(); // Llamada a la animación
}

function filtrarProductos(categoriaId) {
    if (categoriaId === "todos") {
        cargarProductos(productos);
        tituloPrincipal.innerText = "Todos los productos";
    } else {
        const productosFiltrados = productos.filter(
            producto => producto.categoria.id === categoriaId
        );
        cargarProductos(productosFiltrados);
        tituloPrincipal.innerText = productosFiltrados[0]?.categoria.nombre || "No hay productos";
    }
    
    document.querySelectorAll(".marcas-container button").forEach(btn => {
        btn.classList.remove("active");
    });
}

botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {
        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");
        filtrarProductos(e.currentTarget.id);
    });
});

function mostrarDescripcion(producto) {
    const modal = document.createElement("div");
    modal.classList.add("modal");
    modal.innerHTML = `
        <div class="modal-contenido">
            <button class="modal-cerrar">X</button>
            <img class="modal-imagen" src="${producto.imagen}" alt="${producto.titulo}">
            <h3 class="modal-titulo">${producto.titulo}</h3>
            <p class="modal-precio">$${producto.precio}</p>
            <p class="modal-descripcion">${producto.descripcion}</p>
            <button class="producto-agregar" id="${producto.id}">Agregar al Carrito</button>
        </div>
    `;

    document.body.appendChild(modal);
    document.body.style.overflow = "hidden";

    animarModal(modal); // Llamada a la animación del modal

    modal.querySelector(".modal-cerrar").addEventListener("click", () => {
        anime({
            targets: modal,
            opacity: 0,
            duration: 300,
            easing: 'easeInQuad',
            complete: () => {
                modal.remove();
                document.body.style.overflow = "auto";
            }
        });
    });

    modal.querySelector(".producto-agregar").addEventListener("click", (e) => {
        e.stopPropagation();
        agregarAlCarrito(e);
    });
}

function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".producto-agregar");

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", (e) => {
            e.stopPropagation();
            agregarAlCarrito(e);
        });
    });
}

let productosEnCarrito = [];
let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");

if (productosEnCarritoLS) {
    productosEnCarrito = JSON.parse(productosEnCarritoLS);
    actualizarNumerito();
} else {
    productosEnCarrito = [];
}

function agregarAlCarrito(e) {
    // Animación del botón al agregar
    anime({
        targets: e.currentTarget,
        scale: [1, 0.9, 1.1, 1],
        duration: 600,
        easing: 'easeOutElastic'
    });

    Toastify({
        text: "Producto agregado",
        duration: 3000,
        close: true,
        gravity: "top",
        position: "right",
        stopOnFocus: true,
        style: {
            background: "linear-gradient(to right,rgb(78, 176, 221),rgb(92, 177, 233))",
            borderRadius: "2rem",
            textTransform: "uppercase",
            fontSize: ".75rem"
        },
        offset: { x: '1.5rem', y: '1.5rem' },
    }).showToast();

    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);

    if (productosEnCarrito.some(producto => producto.id === idBoton)) {
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;
    } else {
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }

    actualizarNumerito();
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}

function actualizarNumerito() {
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numerito.innerText = nuevoNumerito;
    
    // Animación del numerito
    anime({
        targets: numerito,
        scale: [1.5, 1],
        duration: 500,
        easing: 'easeOutElastic'
    });
}

document.addEventListener("DOMContentLoaded", function () {
    const logoutButton = document.getElementById("logout");
    if (logoutButton) {
        logoutButton.addEventListener("click", function () {
            localStorage.clear();
            sessionStorage.clear();
            window.location.href = "login.html";
        });
    }
});