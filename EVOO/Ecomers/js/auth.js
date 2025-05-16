// js/auth.js - Sistema de autenticación para EVOO

let users = [];

/**
 * Carga usuarios desde users.json y combina con localStorage
 */
async function loadUsers() {
  try {
    // Cargar usuarios del JSON
    const response = await fetch('../users.json');
    const jsonUsers = await response.json();
    
    // Cargar usuarios registrados localmente
    const localUsers = JSON.parse(localStorage.getItem('localUsers')) || [];
    
    // Combinar ambos arrays
    users = [...jsonUsers, ...localUsers];
    
    return users;
  } catch (error) {
    console.error("Error cargando usuarios:", error);
    return [];
  }
}

/**
 * Registra un nuevo usuario
 */
function registerUser(username, email, password) {
  // Validaciones básicas
  if (!username || !email || !password) {
    return { success: false, message: 'Todos los campos son obligatorios' };
  }
  
  if (password.length < 6) {
    return { success: false, message: 'La contraseña debe tener al menos 6 caracteres' };
  }
  
  // Verificar si el usuario ya existe
  const userExists = users.some(user => 
    user.username === username || user.email === email
  );
  
  if (userExists) {
    return { success: false, message: 'El usuario o email ya está registrado' };
  }
  
  // Crear nuevo usuario
  const newUser = {
    username,
    email,
    password,
    registrationDate: new Date().toISOString()
  };
  
  // Guardar en localStorage
  const localUsers = JSON.parse(localStorage.getItem('localUsers')) || [];
  localUsers.push(newUser);
  localStorage.setItem('localUsers', JSON.stringify(localUsers));
  
  // Actualizar lista en memoria
  users.push(newUser);
  
  return { success: true, message: 'Registro exitoso', user: newUser };
}

/**
 * Autentica un usuario
 */
function loginUser(username, password) {
  const user = users.find(user => 
    user.username === username && user.password === password
  );
  
  if (!user) {
    return { success: false, message: 'Usuario o contraseña incorrectos' };
  }
  
  // Guardar sesión
  sessionStorage.setItem('currentUser', JSON.stringify(user));
  
  return { success: true, message: 'Inicio de sesión exitoso', user };
}


function logoutUser() {
  sessionStorage.removeItem('currentUser');
  window.location.href = "login.html";
}


function getCurrentUser() {
  const user = sessionStorage.getItem('currentUser');
  return user ? JSON.parse(user) : null;
}


function isLoggedIn() {
  return !!getCurrentUser();
}

document.addEventListener('DOMContentLoaded', async () => {
  await loadUsers();
});

export {
  loadUsers,
  registerUser,
  loginUser,
  logoutUser,
  getCurrentUser,
  isLoggedIn
};