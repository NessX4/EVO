
function toggleChatbot() {
    let chatbot = document.getElementById("chatbot");
    chatbot.style.display = chatbot.style.display === "none" || chatbot.style.display === "" ? "block" : "none";
}


function closeChatbot() {
    document.getElementById("chatbot").style.display = "none";
}


function sendMessage() {
    let input = document.getElementById("user-input");
    let messageText = input.value.trim();

    if (messageText === "") return;

    let messagesContainer = document.getElementById("messages");

   
    let userMessage = document.createElement("div");
    userMessage.classList.add("message-user");
    userMessage.textContent = messageText;
    messagesContainer.appendChild(userMessage);

    setTimeout(() => {
        let botMessage = document.createElement("div");
        botMessage.classList.add("message-bot");

        if (messageText.toLowerCase().includes("hola") || messageText.toLowerCase().includes("buenos días") || messageText.toLowerCase().includes("buenas tardes") || messageText.toLowerCase().includes("saludos")) {
            botMessage.textContent = "¡Hola! ¿En qué te puedo ayudar hoy con nuestra ropa?";
        } else if (messageText.toLowerCase().includes("abrigos") || messageText.toLowerCase().includes("abrigo") || messageText.toLowerCase().includes("chaquetas")|| messageText.toLowerCase().includes("chaqueta")) {
            botMessage.textContent = "Tenemos una gran variedad de abrigos y chaquetas. ¿Te gustaría ver alguno en particular?";
        } else if (messageText.toLowerCase().includes("camisetas") || messageText.toLowerCase().includes("camiseta") || messageText.toLowerCase().includes("playeras") || messageText.toLowerCase().includes("blusas")) {
            botMessage.textContent = "Contamos con camisetas, playeras y blusas para todos los gustos. ¿Buscas algo en específico?";
        } else if (messageText.toLowerCase().includes("pantalones") || messageText.toLowerCase().includes("pantalon") || messageText.toLowerCase().includes("jeans") || messageText.toLowerCase().includes("bermuda")) {
            botMessage.textContent = "Tenemos pantalones, jeans y bermudas de diferentes estilos. ¿Te gustaría ver alguno en particular?";
        } else if (messageText.toLowerCase().includes("producto") || messageText.toLowerCase().includes("productos") || messageText.toLowerCase().includes("artículos")) {
            botMessage.textContent = "Puedes ver todos nuestros productos en la sección 'Todos los productos'.";
        } else if (messageText.toLowerCase().includes("ver carrito") || messageText.toLowerCase().includes("ver compras")) {
            botMessage.textContent = "Puedes ver tu carrito o compras en el apartado de carrito.";
        } else if (messageText.toLowerCase().includes("tamaño") || messageText.toLowerCase().includes("tallas") || messageText.toLowerCase().includes("medida")) {
            botMessage.textContent = "Nuestros productos vienen en diferentes tamaños y tallas. ¿Te gustaría saber más sobre nuestras tallas?";
        } else if (messageText.toLowerCase().includes("envio") || messageText.toLowerCase().includes("entrega") || messageText.toLowerCase().includes("envíos")) {
            botMessage.textContent = "Hacemos envíos a todo el país. El tiempo de entrega depende de tu ubicación. ¿Te gustaría saber más?";
        } else if (messageText.toLowerCase().includes("devolución") || messageText.toLowerCase().includes("devolver") || messageText.toLowerCase().includes("cambiar")) {
            botMessage.textContent = "Si no quedas satisfecho con tu compra, puedes devolverla dentro de 30 días. ¿Necesitas ayuda con una devolución?";
        } else if (messageText.toLowerCase().includes("pago") || messageText.toLowerCase().includes("tarjeta") || messageText.toLowerCase().includes("paypal") || messageText.toLowerCase().includes("métodos de pago")) {
            botMessage.textContent = "Aceptamos pagos con tarjeta de crédito, débito y PayPal. ¿Tienes problemas para pagar?";
        } else if (messageText.toLowerCase().includes("cupones") || messageText.toLowerCase().includes("descuentos") || messageText.toLowerCase().includes("promociones")) {
            botMessage.textContent = "Tenemos descuentos y cupones en ciertas temporadas. ¿Te gustaría recibir más información sobre las ofertas?";
        } else if (messageText.toLowerCase().includes("oferta") || messageText.toLowerCase().includes("rebaja") || messageText.toLowerCase().includes("descuento")) {
            botMessage.textContent = "Las ofertas especiales están en la sección 'Ofertas'. ¿Te gustaría ver los productos en descuento?";
        } else if (messageText.toLowerCase().includes("tendencias") || messageText.toLowerCase().includes("moda") || messageText.toLowerCase().includes("novedades")) {
            botMessage.textContent = "Las tendencias actuales son los colores vibrantes y los estilos de ropa casual. ¿Te interesa saber más sobre lo que está de moda?";
        } else if (messageText.toLowerCase().includes("nuevos productos") || messageText.toLowerCase().includes("productos nuevos") || messageText.toLowerCase().includes("novedades")) {
            botMessage.textContent = "Los nuevos productos están disponibles en la categoría 'Novedades'. ¿Te gustaría ver los más recientes?";
        } else if (messageText.toLowerCase().includes("sostenibilidad") || messageText.toLowerCase().includes("eco-friendly") || messageText.toLowerCase().includes("sostenible")) {
            botMessage.textContent = "Estamos comprometidos con la sostenibilidad. Nuestros productos están hechos con materiales reciclados en muchos casos.";
        } else if (messageText.toLowerCase().includes("ropa mujer") || messageText.toLowerCase().includes("ropa hombre") || messageText.toLowerCase().includes("ropa unisex")) {
            botMessage.textContent = "Tenemos ropa tanto para hombres como para mujeres. ¿Te gustaría ver la sección de ropa para uno de estos?";
        } else if (messageText.toLowerCase().includes("recomendación") || messageText.toLowerCase().includes("sugerencia")) {
            botMessage.textContent = "Te recomiendo que mires los abrigos de la nueva temporada, ¡están espectaculares!";
        } else if (messageText.toLowerCase().includes("contacto") || messageText.toLowerCase().includes("ayuda") || messageText.toLowerCase().includes("atención al cliente")) {
            botMessage.textContent = "Puedes contactarnos por correo electrónico o a través de nuestro chat en vivo en cualquier momento.";
        } else if (messageText.toLowerCase().includes("más detalles") || messageText.toLowerCase().includes("información adicional")) {
            botMessage.textContent = "Haz clic en el producto que te interesa para ver más detalles, como el material, precio y tallas disponibles.";
        } else if (messageText.toLowerCase().includes("horarios de tienda") || messageText.toLowerCase().includes("horarios") || messageText.toLowerCase().includes("abierto")|| messageText.toLowerCase().includes("hora")) {
            botMessage.textContent = "Nuestro horario de atención es de 10:00 am a 10:00pm hrs, de lunes a viernes. ¡Te esperamos!";
        } else if (messageText.toLowerCase().includes("comprar un producto") || messageText.toLowerCase().includes("compras") || messageText.toLowerCase().includes("adquirir")) {
            botMessage.textContent = "Para comprar, puedes ir al apartado de productos. ¡Mira nuestra increíble selección!";
        } else if (messageText.toLowerCase().includes("comprar un abrigo") || messageText.toLowerCase().includes("comprar abrigos") || messageText.toLowerCase().includes("adquirir")) {
            botMessage.textContent = "Para comprar, puedes ir al apartado de abrigos. ¡Mira nuestra increíble selección!";
        } else if (messageText.toLowerCase().includes("comprar un pantalon") || messageText.toLowerCase().includes("comprar pantalones") || messageText.toLowerCase().includes("adquirir")) {
            botMessage.textContent = "Para comprar, puedes ir al apartado de pantalones. ¡Mira nuestra increíble selección!";
        } else if (messageText.toLowerCase().includes("comprar una camisa") || messageText.toLowerCase().includes("comprar camisas") || messageText.toLowerCase().includes("adquirir")) {
            botMessage.textContent = "Para comprar, puedes ir al apartado de camisas. ¡Mira nuestra increíble selección!";
        } else if (messageText.toLowerCase().includes("gracias") || messageText.toLowerCase().includes("muchas gracias") || messageText.toLowerCase().includes("te agradezco")) {
            botMessage.textContent = "¡De nada! 😊 Si necesitas más ayuda, no dudes en preguntar.";
        } else {
            botMessage.textContent = "Lo siento, no entiendo lo que estás diciendo. ¿Puedes reformularlo o preguntarme algo relacionado con la ropa?";
        }

        messagesContainer.appendChild(botMessage);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }, 500);

    input.value = "";
}


function handleKeyPress(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
}
