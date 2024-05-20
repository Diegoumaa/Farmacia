document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', function () {
        navLinks.classList.toggle('active');
    });

    if (document.getElementById('login-form')) {
        document.getElementById('login-form').addEventListener('submit', function(e) {
            e.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            const defaultUsername = "usuario";
            const defaultPassword = "contrasena";

            if ((username === defaultUsername && password === defaultPassword) ||
                (localStorage.getItem(username) && localStorage.getItem(username) === password)) {
                alert('Inicio de sesión exitoso');
            } else {
                alert('Usuario o contraseña incorrectos');
            }
        });
    }

    if (document.getElementById('register-form')) {
        document.getElementById('register-form').addEventListener('submit', function(e) {
            e.preventDefault();
            const username = document.getElementById('reg-username').value;
            const password = document.getElementById('reg-password').value;

            if (localStorage.getItem(username)) {
                alert('El usuario ya existe');
            } else {
                localStorage.setItem(username, password);
                alert('Registro exitoso');
            }
        });
    }

    if (document.getElementById('contact-form')) {
        document.getElementById('contact-form').addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Mensaje enviado');
        });
    }
});
