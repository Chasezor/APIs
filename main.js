

const DataContainer = document.querySelector('#movies-container')

const btn1 = document.querySelector("#btn")

const baseURL = `https://swapi.dev/api/planets/2`


const planetCallback = ({ data: movies }) => displayMovies(movies)
const errCallback = err => console.log(err.response.data)


function buttonClicked(){
    console.log("button clicked")
    getAllPlanet()
}


function displayMovies(arr) {
    DataContainer.innerHTML = ``
    for (let i = 0; i < arr.length; i++) {

        const movieCard = document.createElement('div')
       // getName = () => axios.get(arr[i]).then((res) => console.log(`<h2>${res.data.name}</h2>`))
        getName = () => axios.get(arr[i]).then((res) => movieCard.innerHTML = `<h2>${res.data.name}</h2>`)
        console.log("called NAme")
        getName()
        DataContainer.appendChild(movieCard)
        
        //movieCard.innerHTML = `<h2>${arr[i]}</h2>`
       // DataContainer.appendChild(movieCard)
        //DataContainer.appendChild(movieCard.innerHTML = `<h2>${res.data}</h2>`)
    }
}


btn1.addEventListener('click', buttonClicked)
const getAllPlanet = () => axios.get(baseURL).then((res) => displayMovies(res.data.residents))