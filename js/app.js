const menuGrid = document.querySelector("#menu-grid");
const cartItemsContainer = document.querySelector("#cart-items");
const emptyCartMessage = document.querySelector("#empty-cart");
const cartSubtotalElement = document.querySelector("#cart-subtotal");
const cartTotalElement = document.querySelector("#cart-total");
const whatsappButton = document.querySelector(".whatsapp-button");
const orderMessageElement = document.querySelector("#order-message");
const CANGREJO_CART_STORAGE_KEY = "cangrejoCevicheroCart";
// Sustituir por el numero real con codigo de pais, sin +, espacios ni guiones.
const RESTAURANT_WHATSAPP_NUMBER = "525531148654";
const WHATSAPP_BASE_URL = "https://wa.me";
const cartItems = [];

const currencyFormatter = new Intl.NumberFormat("es-MX", {
  style: "currency",
  currency: "MXN",
});

// Convierte precios numericos a formato de pesos mexicanos.
function formatPrice(price) {
  return currencyFormatter.format(price);
}

// Busca un producto del menu usando su id unico.
function findProductById(productId) {
  return menuItems.find((product) => product.id === productId);
}

// Busca un producto que ya esta dentro del carrito.
function findCartItemById(productId) {
  return cartItems.find((item) => item.id === productId);
}

// Lee y limpia los datos actuales del formulario del cliente.
function getCustomerData() {
  const nameInput = document.querySelector("#customer-name");
  const deliveryTypeInput = document.querySelector('input[name="deliveryType"]:checked');
  const addressInput = document.querySelector("#customer-address");
  const notesInput = document.querySelector("#order-notes");

  return {
    name: nameInput ? nameInput.value.trim() : "",
    deliveryType: deliveryTypeInput ? deliveryTypeInput.value : "",
    address: addressInput ? addressInput.value.trim() : "",
    notes: notesInput ? notesInput.value.trim() : "",
  };
}

// Muestra mensajes visibles y anunciables para errores o avisos del pedido.
function showOrderMessage(message, type = "error") {
  if (!orderMessageElement) {
    return;
  }

  orderMessageElement.textContent = message;
  orderMessageElement.classList.remove("is-error", "is-success");
  orderMessageElement.classList.add(type === "success" ? "is-success" : "is-error");
}

// Limpia el mensaje de validacion del pedido.
function clearOrderMessage() {
  if (!orderMessageElement) {
    return;
  }

  orderMessageElement.textContent = "";
  orderMessageElement.classList.remove("is-error", "is-success");
}

// Guarda el estado actual del carrito en el navegador.
function saveCartToStorage() {
  try {
    localStorage.setItem(CANGREJO_CART_STORAGE_KEY, JSON.stringify(cartItems));
  } catch (error) {
    console.warn("No se pudo guardar el carrito.", error);
  }
}

// Revisa que los datos guardados tengan productos validos y cantidades seguras.
function validateStoredCart(storedCart) {
  if (!Array.isArray(storedCart)) {
    return null;
  }

  const validatedItems = [];
  let hasInvalidItem = false;

  storedCart.forEach((storedItem) => {
    if (!storedItem || typeof storedItem.id !== "string") {
      hasInvalidItem = true;
      return;
    }

    const product = findProductById(storedItem.id);
    const quantity = Number(storedItem.quantity);

    if (!product || !product.disponible || !Number.isInteger(quantity) || quantity <= 0) {
      hasInvalidItem = true;
      return;
    }

    const existingItem = validatedItems.find((item) => item.id === product.id);

    if (existingItem) {
      existingItem.quantity += quantity;
      return;
    }

    validatedItems.push({
      id: product.id,
      name: product.nombre,
      price: product.precio,
      quantity,
    });
  });

  if (hasInvalidItem) {
    return null;
  }

  return validatedItems;
}

// Lee el carrito guardado; si esta corrupto, lo limpia y regresa un carrito vacio.
function loadCartFromStorage() {
  try {
    const storedCart = localStorage.getItem(CANGREJO_CART_STORAGE_KEY);

    if (!storedCart) {
      return [];
    }

    const parsedCart = JSON.parse(storedCart);
    const validatedCart = validateStoredCart(parsedCart);

    if (!validatedCart) {
      localStorage.removeItem(CANGREJO_CART_STORAGE_KEY);
      return [];
    }

    return validatedCart;
  } catch (error) {
    localStorage.removeItem(CANGREJO_CART_STORAGE_KEY);
    return [];
  }
}

// Reemplaza el carrito en memoria con datos previamente validados.
function restoreCartItems(storedItems) {
  cartItems.splice(0, cartItems.length, ...storedItems);
}

// Crea una tarjeta visual para cada producto del menu.
function createMenuCard(product) {
  const card = document.createElement("article");
  card.className = "menu-card";

  const image = document.createElement("div");
  image.className = `dish-image ${product.imagen}`;
  image.setAttribute("role", "img");
  image.setAttribute("aria-label", `Imagen temporal de ${product.nombre}`);

  const content = document.createElement("div");
  content.className = "dish-content";

  const category = document.createElement("p");
  category.className = "dish-category";
  category.textContent = product.categoria;

  const title = document.createElement("h3");
  title.textContent = product.nombre;

  const description = document.createElement("p");
  description.textContent = product.descripcion;

  const footer = document.createElement("div");
  footer.className = "dish-footer";

  const price = document.createElement("p");
  price.className = "price";
  price.textContent = formatPrice(product.precio);

  const button = document.createElement("button");
  button.type = "button";
  button.textContent = "Agregar";
  button.dataset.productId = product.id;
  button.disabled = !product.disponible;
  button.setAttribute("aria-label", `Agregar ${product.nombre}`);

  footer.append(price, button);
  content.append(category, title, description, footer);
  card.append(image, content);

  return card;
}

// Pinta todos los productos disponibles dentro del contenedor del menu.
function renderMenu(products) {
  if (!menuGrid) {
    return;
  }

  menuGrid.innerHTML = "";

  products
    .filter((product) => product.disponible)
    .forEach((product) => {
      menuGrid.append(createMenuCard(product));
    });
}

// Agrega un producto nuevo al carrito o aumenta su cantidad si ya existe.
function addProductToCart(productId) {
  const product = findProductById(productId);

  if (!product || !product.disponible) {
    return;
  }

  const existingCartItem = findCartItemById(productId);

  if (existingCartItem) {
    updateCartItemQuantity(productId, 1);
    return;
  }

  cartItems.push({
    id: product.id,
    name: product.nombre,
    price: product.precio,
    quantity: 1,
  });

  saveCartToStorage();
  renderCart();
}

// Cambia la cantidad de un producto; si queda en cero, lo elimina.
function updateCartItemQuantity(productId, change) {
  const cartItem = findCartItemById(productId);

  if (!cartItem) {
    return;
  }

  const nextQuantity = cartItem.quantity + change;

  if (nextQuantity <= 0) {
    removeCartItem(productId);
    return;
  }

  cartItem.quantity = nextQuantity;
  saveCartToStorage();
  renderCart();
}

// Aumenta en uno la cantidad de un producto del carrito.
function increaseCartItem(productId) {
  updateCartItemQuantity(productId, 1);
}

// Disminuye en uno la cantidad de un producto del carrito.
function decreaseCartItem(productId) {
  updateCartItemQuantity(productId, -1);
}

// Elimina por completo un producto del carrito.
function removeCartItem(productId) {
  const cartItemIndex = cartItems.findIndex((item) => item.id === productId);

  if (cartItemIndex === -1) {
    return;
  }

  cartItems.splice(cartItemIndex, 1);
  saveCartToStorage();
  renderCart();
}

// Suma los subtotales de cada producto del carrito.
function calculateCartSubtotal() {
  return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
}

// Revisa que el carrito tenga productos existentes, disponibles y cantidades validas.
function validateCartForOrder() {
  const errors = [];

  if (cartItems.length === 0) {
    errors.push("Agrega al menos un producto al carrito.");
    return errors;
  }

  cartItems.forEach((item) => {
    const product = findProductById(item.id);

    if (!product || !product.disponible) {
      errors.push(`El producto "${item.name}" ya no esta disponible.`);
      return;
    }

    if (!Number.isInteger(item.quantity) || item.quantity <= 0) {
      errors.push(`La cantidad de "${item.name}" no es valida.`);
    }

    if (typeof item.price !== "number" || item.price < 0) {
      errors.push(`El precio de "${item.name}" no es valido.`);
    }
  });

  return errors;
}

// Revisa que los datos minimos del cliente esten completos.
function validateCustomerData(customerData) {
  const errors = [];

  if (!customerData.name) {
    errors.push("Escribe tu nombre para preparar el pedido.");
  }

  if (!customerData.deliveryType) {
    errors.push("Selecciona si quieres entrega a domicilio o recoger en restaurante.");
  }

  if (customerData.deliveryType === "domicilio" && !customerData.address) {
    errors.push("Escribe la direccion para entrega a domicilio.");
  }

  return errors;
}

// Junta las validaciones del carrito, formulario y configuracion de WhatsApp.
function validateOrder(customerData) {
  const errors = [
    ...validateCartForOrder(),
    ...validateCustomerData(customerData),
  ];

  if (!/^\d+$/.test(RESTAURANT_WHATSAPP_NUMBER)) {
    errors.push("El numero de WhatsApp del restaurante no esta configurado correctamente.");
  }

  return errors;
}

// Construye las lineas de productos que iran en el mensaje de WhatsApp.
function buildProductMessageLines() {
  return cartItems.map((item) => {
    const itemSubtotal = item.price * item.quantity;

    return `- ${item.quantity} x ${item.name} (${formatPrice(item.price)} c/u) = ${formatPrice(itemSubtotal)}`;
  });
}

// Construye el mensaje completo del pedido.
function buildWhatsAppMessage(customerData) {
  const productLines = buildProductMessageLines();
  const total = calculateCartSubtotal();
  const deliveryText = customerData.deliveryType === "domicilio"
    ? "Entrega a domicilio"
    : "Recoger en restaurante";
  const messageLines = [
    "\uD83E\uDD80 El Cangrejo Cevichero",
    "",
    "Hola, quiero hacer un pedido.",
    "",
    "Pedido:",
    ...productLines,
    "",
    `Total: ${formatPrice(total)}`,
    "",
    "Datos del cliente:",
    `Nombre: ${customerData.name}`,
    `Entrega: ${deliveryText}`,
  ];

  if (customerData.deliveryType === "domicilio") {
    messageLines.push(`Direccion: ${customerData.address}`);
  }

  if (customerData.notes) {
    messageLines.push(`Notas: ${customerData.notes}`);
  }

  return messageLines.join("\n");
}

// Codifica el texto para usarlo de forma segura en la URL de WhatsApp.
function createWhatsAppUrl(message) {
  const encodedMessage = encodeURIComponent(message);

  return `${WHATSAPP_BASE_URL}/${RESTAURANT_WHATSAPP_NUMBER}?text=${encodedMessage}`;
}

// Activa el boton de WhatsApp solo cuando hay productos en el carrito.
function updateWhatsAppButtonState() {
  if (!whatsappButton) {
    return;
  }

  whatsappButton.disabled = cartItems.length === 0;
}

// Crea la parte informativa de un producto en el carrito.
function createCartItemInfo(item) {
  const subtotal = item.price * item.quantity;
  const info = document.createElement("div");
  info.className = "cart-item-info";

  const title = document.createElement("h3");
  title.textContent = item.name;

  const unitPrice = document.createElement("p");
  unitPrice.textContent = `Precio unitario: ${formatPrice(item.price)}`;

  const subtotalText = document.createElement("p");
  subtotalText.className = "cart-item-subtotal";
  subtotalText.textContent = `Subtotal: ${formatPrice(subtotal)}`;

  info.append(title, unitPrice, subtotalText);

  return info;
}

// Crea un boton del carrito con accion y etiqueta accesible.
function createCartActionButton({ action, productId, label, text, className = "" }) {
  const button = document.createElement("button");
  button.type = "button";
  button.textContent = text;
  button.dataset.action = action;
  button.dataset.productId = productId;
  button.setAttribute("aria-label", label);

  if (className) {
    button.className = className;
  }

  return button;
}

// Crea los controles de cantidad para sumar o restar unidades.
function createQuantityControls(item) {
  const quantityControls = document.createElement("div");
  quantityControls.className = "quantity-controls";

  const decreaseButton = createCartActionButton({
    action: "decrease",
    productId: item.id,
    label: `Quitar una unidad de ${item.name}`,
    text: "-",
  });

  const quantity = document.createElement("span");
  quantity.textContent = item.quantity;
  quantity.setAttribute("aria-label", `Cantidad: ${item.quantity}`);

  const increaseButton = createCartActionButton({
    action: "increase",
    productId: item.id,
    label: `Agregar una unidad de ${item.name}`,
    text: "+",
  });

  quantityControls.append(decreaseButton, quantity, increaseButton);

  return quantityControls;
}

// Crea el boton para eliminar un producto completo del carrito.
function createRemoveButton(item) {
  return createCartActionButton({
    action: "remove",
    productId: item.id,
    label: `Eliminar ${item.name} del carrito`,
    text: "Eliminar",
    className: "remove-item-button",
  });
}

// Crea el bloque visual de un producto dentro del carrito.
function createCartItemElement(item) {
  const cartItem = document.createElement("article");
  cartItem.className = "cart-item";

  const actions = document.createElement("div");
  actions.className = "cart-item-actions";
  actions.append(createQuantityControls(item), createRemoveButton(item));

  cartItem.append(createCartItemInfo(item), actions);

  return cartItem;
}

// Actualiza el mensaje vacio, la lista de productos y los totales.
function renderCart() {
  if (!cartItemsContainer || !emptyCartMessage || !cartSubtotalElement || !cartTotalElement) {
    return;
  }

  cartItemsContainer.innerHTML = "";

  if (cartItems.length === 0) {
    emptyCartMessage.classList.remove("is-hidden");
  } else {
    emptyCartMessage.classList.add("is-hidden");
    cartItems.forEach((item) => {
      cartItemsContainer.append(createCartItemElement(item));
    });
  }

  const subtotal = calculateCartSubtotal();
  cartSubtotalElement.textContent = formatPrice(subtotal);
  cartTotalElement.textContent = formatPrice(subtotal);
  updateWhatsAppButtonState();
}

// Atiende clicks en botones "Agregar" del menu usando delegacion de eventos.
function handleMenuClick(event) {
  const addButton = event.target.closest("button[data-product-id]");

  if (!addButton || !menuGrid.contains(addButton)) {
    return;
  }

  addProductToCart(addButton.dataset.productId);
}

// Atiende clicks en +, - y Eliminar dentro del carrito.
function handleCartClick(event) {
  const actionButton = event.target.closest("button[data-action]");

  if (!actionButton || !cartItemsContainer.contains(actionButton)) {
    return;
  }

  const { action, productId } = actionButton.dataset;

  switch (action) {
    case "increase":
      increaseCartItem(productId);
      break;
    case "decrease":
      decreaseCartItem(productId);
      break;
    case "remove":
      removeCartItem(productId);
      break;
    default:
      break;
  }
}

// Valida el pedido y abre WhatsApp con el mensaje preparado.
function handleWhatsAppClick() {
  const customerData = getCustomerData();
  const errors = validateOrder(customerData);

  clearOrderMessage();

  if (errors.length > 0) {
    showOrderMessage(errors[0]);
    return;
  }

  const message = buildWhatsAppMessage(customerData);
  const whatsappUrl = createWhatsAppUrl(message);

  showOrderMessage("Pedido listo. Se abrira WhatsApp para confirmar el envio.", "success");
  window.open(whatsappUrl, "_blank");
}

// Inicia la interfaz solo si existen los contenedores necesarios.
function initializeApp() {
  if (!menuGrid || !cartItemsContainer || !whatsappButton) {
    return;
  }

  renderMenu(menuItems);
  restoreCartItems(loadCartFromStorage());
  renderCart();

  menuGrid.addEventListener("click", handleMenuClick);
  cartItemsContainer.addEventListener("click", handleCartClick);
  whatsappButton.addEventListener("click", handleWhatsAppClick);

  console.log("Carrito listo para agregar productos.");
}

document.addEventListener("DOMContentLoaded", initializeApp);
