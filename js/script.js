const BASE_URL = "https://newsapi.org/v2"
const API_KEY = "caeb1e9a81364b2ab6f18679120adf3e"
const listaDeNoticias = document.querySelector('#listaDeNoticias')
const listaDeUltimasNoticias = document.querySelector('#ultimas')

const noticiasTecnologia = document.querySelector('#tec')



fetch(`${BASE_URL}/top-headlines?country=br&apiKey=${API_KEY}`)
.then((res) => res.json())
.then((dados) => (console.log(dados)))



//CONSUMINDO A API COM ASYNC/AWAIT

async function getNoticias(){

    let resposta = await fetch(`${BASE_URL}/top-headlines?country=br&apiKey=${API_KEY}`)

    let dados = await resposta.json()

    listaDeNoticias.innerHTML = ""

    dados.articles.forEach(noticia =>{

        listaDeNoticias.innerHTML += `
        <div class="col-4">
        <div class="card"><img class="card-img-top"
            src=${noticia.urlToImage}>
          <div class="card-body">
            <h5 class="card-title">${noticia.title}</h5>
            <p class="card-text">${noticia.description}</p><a class="btn btn-primary"
              href="${noticia.url}">Ir
              para noticia</a>
          </div>
        </div>
      </div>
        
        `

    })

    return dados
}


getNoticias()




async function getTechNoticias(){
    

    let resposta = await fetch(`${BASE_URL}/top-headlines?country=br&category=technology&apiKey=${API_KEY}`)

    let dados = await resposta.json()

    listaDeNoticias.innerHTML = ""

    dados.articles.forEach(noticia =>{
        listaDeNoticias.innerHTML += `
        <div class="col-4">
        <div class="card"><img class="card-img-top"
            src=${noticia.urlToImage}>
          <div class="card-body">
            <h5 class="card-title">${noticia.title}</h5>
            <p class="card-text">${noticia.description}</p><a class="btn btn-primary"
              href="${noticia.url}">Ir
              para noticia</a>
          </div>
        </div>
      </div>
        
        `
    })

    return dados

}





//NOVA REQUISIÇÃO PARA A PARTE DE TECNOLOGIA

listaDeUltimasNoticias.addEventListener('click', getNoticias)
noticiasTecnologia.addEventListener('click', getTechNoticias)



