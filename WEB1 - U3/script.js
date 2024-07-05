const login = {
    user: 'admin',
    password: 'admin',
}


function verify() {
    if (login.user === document.getElementById('user').value && login.password === document.getElementById('password').value) {
        alert('Login realizado com sucesso!')
        window.location.href = 'Menu/index.html';
    } else {
        alert('Usuário ou senha incorretos!')
    }
}