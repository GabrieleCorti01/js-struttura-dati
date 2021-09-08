
// Creo un oggetto carta
var card = {
    name: "Anaba Shaman",
    launchCost: {
        common: 0,
        w: 0,
        ublue: 0,
        black: 0,
        red: 1,
        green: 0.
    },
    cardType: "Creatrue",
    subType: "Shaman",
    expansion: {
        expansionID: 9,
        name: "Flawless lands",
        rarity: "common",
        maxCard: 350,
    },
    flavourText: {
        author: "John Bond",
        quote: "Just try to take the bulls by the horns",
    },
    abilities: [
        {
            launchCost: {
                common: 0,
                white: 0,
                ublue: 0,
                black: 0,
                red: 3,
                green: 0,
            },
            description: "Deals 1 damage to target creature or player!",
        },
        {
            launchCost: {
                common: 0,
                white: 0,
                ublue: 2,
                black: 0,
                red: 0,
                green: 0,
            },
            description: "Delete Gabriele in one shot"
        },
        {
            launchCost: {
                common: 0,
                white: 0,
                ublue: 0,
                black: 0,
                red: 0,
                green: 5,
            },
            description: "Purchase spotify Premium!"
        }
    ],
    illustrator: {
        id: 125,
        name: "Simon",
        surname: "Bisley",
        dateOfBirth: "12/25/1976",
        placeOfBirth: "Sidney",
    },
    illustrationImage: "..&imageIllustration.jpg", //Immagine di illustrazione

    currentCard: 145,
    constitution: 2,
    strength: 2,
    borderHue: "#000",
    
    cardImage: "..img/cardImage.jpg", //Immagine della carta finita





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
    <li>Name: ${card.name}</li>
    <li>Launch cost: ${card.combineManaCost()}</li>
    <li>Specific launch cost: ${card.launchCost}</li>
    <li>Card type: ${card.cardType} ${card.subType}</li>
    <li>-- EXPANSIONS --    
        <ul class="expansions">
            <li>Expansion name: ${card.expansion.name}</li>
            <li>Expansion rarity: ${card.expansion["rarity"]}</li>
            <li>Maximum cards in expansion: ${card.expansion["maxCard"]}</li>
        </ul>
    </li>
    <li>Text description: <em>${card.flavourText["quote"]}</em>  <strong>"${card.flavourText["author"]}"</strong></li>
    <li>-- ABILITIES -- 
        <ul class: "abilities">
            <li>First Ability: <strong>"${card.abilities[0]["launchCost"]["red"]} RED MANA"</strong> ${card.abilities[0]["description"]}</li>
            <li>Second Ability: <strong>"${card.abilities[1]["launchCost"]["ublue"]} BLU MANA"</strong> ${card.abilities[1]["description"]}</li>
            <li>Third Ability: <strong>"${card.abilities[2]["launchCost"]["green"]} GREEN MANA"</strong> ${card.abilities[2]["description"]}</li>
        </ul>
    </li>
    <li>-- ILLUSTRATOR --
        <ul>
            <li>ID: ${card.illustrator["id"]}// The illustration was made by: ${card.illustrator["name"]} ${card.illustrator["surname"]} born in ${card.illustrator["placeOfBirth"]} on ${card.illustrator["dateOfBirth"]}</li>
        </ul>
    </li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
</ul>`;
document.getElementById("deck").innerHTML += cardDisplayHTML;
