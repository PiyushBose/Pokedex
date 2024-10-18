


async function fetchData(){

    try{

        const pokemonName = document.querySelector("#pokemonName").value.toLowerCase();

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        if(!response.ok){
            throw new Error("Could not fetch resource");
        }

        const data = await response.json();
        
        const pokemonSprite = data.sprites.front_default;

        const imgEle = document.querySelector("#pokemonSprite");

        imgEle.src = pokemonSprite;
        imgEle.style.display = "block";
    }
    catch(error){
        console.error(error);
    }
}