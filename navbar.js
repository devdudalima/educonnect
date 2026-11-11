fetch('/navbar.html')
    .then(response => {
        if (!response.ok) {
            throw new Error('Erro ao carregar navbar');
        }
        return response.text();
    })
    .then(data => {
        document.getElementById('navbar').innerHTML = data;
    })
    .catch(erro => console.error(erro));