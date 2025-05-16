import { loginUser } from './auth.js';


function initParticles() {
    particlesJS('particles-js', {
        "particles": {
            "number": {
                "value": 80,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#00cfff"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                }
            },
            "opacity": {
                "value": 0.3,
                "random": false
            },
            "size": {
                "value": 3,
                "random": true
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#00cfff",
                "opacity": 0.2,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 2,
                "direction": "none",
                "out_mode": "out"
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "grab"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                }
            },
            "modes": {
                "grab": {
                    "distance": 140,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "push": {
                    "particles_nb": 4
                }
            }
        }
    });
}


function showAlert(type, title, message) {
    const alertContainer = document.getElementById('alert-container');
    const alert = document.createElement('div');
    alert.className = `alert alert-${type}`;
    
    alert.innerHTML = `
        <span class="alert-icon">${type === 'success' ? '✓' : '✗'}</span>
        <div>
            <strong>${title}</strong>
            <p style="margin: 5px 0 0; font-weight: normal;">${message}</p>
        </div>
    `;
    
    alertContainer.appendChild(alert);
    void alert.offsetWidth;
    alert.classList.add('show');
    
    setTimeout(() => {
        alert.classList.remove('show');
        setTimeout(() => alert.remove(), 300);
    }, 5000);
}


function init() {
    initParticles();
    
    document.getElementById('loginForm').addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        
        try {
            const result = await loginUser(username, password);
            
            if (result.success) {
                showAlert('success', '¡Bienvenido!', result.message);
                setTimeout(() => {
                    window.location.href = "index.html";
                }, 1500);
            } else {
                showAlert('error', 'Error', result.message);
            }
        } catch (error) {
            showAlert('error', 'Error', 'Ocurrió un problema al iniciar sesión');
            console.error('Login error:', error);
        }
    });
}

document.addEventListener('DOMContentLoaded', init);