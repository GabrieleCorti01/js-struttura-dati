
// Creo un oggetto carta
var card = {
    name: "Dispel",
    launchCost: {
        common: 0,
        w: 0,
        ublue: 1,
        black: 0,
        red: 0,
        green: 0.
    },
    cardType: "Instant",
    subType: "Magic",
    expansion: {
        expansionID: "NaN",
        name: "Flawless lands",
        rarity: "common",
        maxCard: 350,
        currentCard: 145,
    },
    flavourText: {
        author: "Speaker Zegana",
        quote: "Civilization will subsume us unless we overwhelm it instead",
    },
    abilities: [
        {
            launchCost: {
                common: 0,
                white: 0,
                ublue: 0,
                black: 0,
                red: 0,
                green: 0,
            },
            description: "Counter target instant spell!",
        },
        
    ],
    illustrator: {
        id: 125,
        name: "Chase",
        surname: "Stone",
        dateOfBirth: "11/24/1989",
        placeOfBirth: "Chicago",
    },
    constitution: 0,
    strength: 0,
    borderHue: "#000",
    
    cardImage: "img/magic-card.jpg", //Immagine della carta finita





    combineManaCost : 
    // Funzione per ritornare il mana cost delle carte
    function(){
        let sum = 0;
        for (let type in this.launchCost){
            sum += this.launchCost[type]; 
        }
        return sum;
    },
};
console.table(card);
console.log(card.combineManaCost());

let abilitiesHTMLContent = "<strong>No abilities aviable</strong>";
if (card.abilities.length > 0){
    abilitiesHTMLContent = "<ul>";
    for (let i = 0; i < card.abilities.length; i++){
        const currentAbility = card.abilities[i];
        abilitiesHTMLContent += "------";
        abilitiesHTMLContent += `<li>Description ${currentAbility.description}</li>`
        abilitiesHTMLContent += "------";
    }
}

let cardDisplayHTML = 

// per fare questo:` //alt + 9
`<ul class= "card-element">  
    
<li>-- CARD ILLUSTRATION --</li>
    <img src="${card.cardImage}">
    
    <li>-- CARD INFO --
        <ul class: "card-info">    
            <li>Name: ${card.name}</li>
            <li>Launch cost: ${card.combineManaCost()}</li>
            <li>Card type: ${card.cardType} ${card.subType}</li>
            <li>Border Color: ${card.borderHue}</li>
            
    </li>
    </ul>
    
    <li>-- EXPANSIONS --    
        <ul class="expansions">
            <li>Expansion name: ${card.expansion.name}</li>
            <li>Expansion rarity: ${card.expansion["rarity"]}</li>
            <li>Maximum cards in expansion: ${card.expansion["maxCard"]}</li>
            <li>Current card in expansion: ${card.expansion["currentCard"]}</li>
        </ul>
    </li>
    <li>Text description: <em>"${card.flavourText["quote"]}"</em>  <strong>${card.flavourText["author"]}</strong></li>
    
    <li>-- ABILITIES -- 
        <ul class: "abilities">
            <li>First Ability: <strong>"${card.abilities[0]["launchCost"]["red"]}  MANA"</strong> ${card.abilities[0]["description"]}</li>
        </ul>
    </li>
    
    <li>-- ILLUSTRATOR --
        <ul>
            <li>ID: <strong>${card.illustrator["id"]}</strong> // The illustration was made by: ${card.illustrator["name"]} ${card.illustrator["surname"]} born in ${card.illustrator["placeOfBirth"]} on ${card.illustrator["dateOfBirth"]}</li>
        </ul>
    </li>
    <li>-- POWER! --
        <ul>
            <li>Attack Power: ${card.strength} // Defense Value: ${card.constitution}</li>
            <li>Because is a magical card!</li>
        </ul>
    </li>

    
</ul>`;
document.getElementById("deck").innerHTML += cardDisplayHTML;
