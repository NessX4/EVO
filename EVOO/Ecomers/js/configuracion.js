document.addEventListener("DOMContentLoaded", function() {
    
    const colorMain = document.getElementById('color-main');
    const colorPrimary = document.getElementById('color-primary');
    const colorAccent = document.getElementById('color-accent');
    const themeButtons = document.querySelectorAll('.theme-btn');
    const compactMode = document.getElementById('compact-mode');
    const animations = document.getElementById('animations');
    const roundedCorners = document.getElementById('rounded-corners');
    const languageSelect = document.getElementById('language-select');
    const fontSize = document.getElementById('font-size');
    const fontSizeValue = document.getElementById('font-size-value');
    const saveButton = document.getElementById('save-settings');
    const resetButton = document.getElementById('reset-settings');
    const logoutButton = document.getElementById('logout');

   
    function loadSettings() {
        const settings = JSON.parse(localStorage.getItem('appSettings')) || {};
        
        if (settings.mainColor) colorMain.value = settings.mainColor;
        if (settings.primaryColor) colorPrimary.value = settings.primaryColor;
        if (settings.accentColor) colorAccent.value = settings.accentColor;
        if (settings.theme) setActiveTheme(settings.theme);
        if (settings.compactMode !== undefined) compactMode.checked = settings.compactMode;
        if (settings.animations !== undefined) animations.checked = settings.animations;
        if (settings.roundedCorners !== undefined) roundedCorners.checked = settings.roundedCorners;
        if (settings.language) languageSelect.value = settings.language;
        if (settings.fontSize) {
            fontSize.value = settings.fontSize;
            fontSizeValue.textContent = `${settings.fontSize}px`;
        }
        
        applyPreview();
    }

    
    function setActiveTheme(theme) {
        themeButtons.forEach(btn => {
            btn.classList.remove('active');
            if (btn.dataset.theme === theme) {
                btn.classList.add('active');
            }
        });
    }

    
    function applyPreview() {
        document.documentElement.style.setProperty('--clr-main', colorMain.value);
        document.documentElement.style.setProperty('--clr-primary', colorPrimary.value);
        document.documentElement.style.setProperty('--clr-red', colorAccent.value);
        
       
        document.documentElement.style.fontSize = `${fontSize.value}px`;
    }

    
    colorMain.addEventListener('input', applyPreview);
    colorPrimary.addEventListener('input', applyPreview);
    colorAccent.addEventListener('input', applyPreview);
    
    themeButtons.forEach(button => {
        button.addEventListener('click', function() {
            setActiveTheme(this.dataset.theme);
        });
    });
    
    fontSize.addEventListener('input', function() {
        fontSizeValue.textContent = `${this.value}px`;
        applyPreview();
    });

   
    saveButton.addEventListener('click', function() {
        const settings = {
            mainColor: colorMain.value,
            primaryColor: colorPrimary.value,
            accentColor: colorAccent.value,
            theme: document.querySelector('.theme-btn.active').dataset.theme,
            compactMode: compactMode.checked,
            animations: animations.checked,
            roundedCorners: roundedCorners.checked,
            language: languageSelect.value,
            fontSize: fontSize.value
        };
        
        localStorage.setItem('appSettings', JSON.stringify(settings));
        
      
        alert('Configuración guardada correctamente');
    });

    
    resetButton.addEventListener('click', function() {
        if (confirm('¿Estás seguro de que quieres restablecer la configuración predeterminada?')) {
            localStorage.removeItem('appSettings');
            location.reload();
        }
    });


    if (logoutButton) {
        logoutButton.addEventListener('click', function() {
            localStorage.clear();
            sessionStorage.clear();
            window.location.href = "login.html";
        });
    }


    loadSettings();
});