const geradas = [4]

function getData() {
fetch('https://api.punkapi.com/v2/beers?per_page=80')
.then(response => {
    return response.json()
})
.then(data => {
    for (let i = 0; i < 5; i++) {
        let num = Math.floor(Math.random() * 80 + 1)
        geradas[i] = data[num]
    }
    for (let i = 0; i < 5; i++) {
        document.getElementsByClassName('nome-cerveja')[i].innerHTML = geradas[i].name
        document.getElementsByClassName('imagem-cerveja')[i].setAttribute('src', geradas[i].image_url)
        document.getElementsByClassName('descricao-cerveja')[i].innerHTML = geradas[i].description
    }
})
}

function popupCadastre() {
    Swal.fire({
        icon: 'info',
        title: 'Dica!',
        text: 'Cadastre-se para receber notificações!',
    })
}

async function popupCadastroEmail() {
    const { value: email } = await Swal.fire({
        title: 'Cadastre-se',
        input: 'email',
        inputLabel: 'Seu e-mail',
        inputPlaceholder: 'Digite seu e-mail'
      })
      
      if (email) {
        Swal.fire(`E-mail cadastrado: ${email}`)
      }
}