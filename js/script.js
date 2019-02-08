document.getElementById("newBeer").addEventListener('click', getBeer)

const beerButton = document.getElementById("firstBeer")
beerButton.addEventListener('click', getBeer)
beerButton.addEventListener('click', beerVisible)
beerButton.addEventListener('click', buttonInvisible)



function getBeer() {
    fetch('https://api.punkapi.com/v2/beers/random')
        .then((response) => response.json())
        .then((JsonFile) => {
            console.log(JsonFile)
            document.getElementById("beerName").innerHTML = JsonFile[0].name
            document.getElementById("tagLine").innerHTML = JsonFile[0].tagline
            document.getElementById("firstBrew").innerHTML = JsonFile[0].first_brewed
            document.getElementById("Img").src = JsonFile[0].image_url
        })
}

function beerVisible() {
    const beerCard = document.getElementById("card");
    card.classList.remove("invisible");
}
function buttonInvisible(){
    beerButton.classList.add("invisible");
}