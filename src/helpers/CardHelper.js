export function getCardObjects(objectList){
    const cardObjects = [];

    //If it's not an array return the value
    if(!Array.isArray(objectList)){
        const objectName = objectList.object.name || "Unnamed Object";
        objectName.includes("Card") ? cardObjects.push(objectList.object) : null;

        return cardObjects;
    }

    objectList.forEach((object) => {
        const objectName = object.object.name || "Unnamed Object";
        objectName.includes("Card") ? cardObjects.push(object.object) : null;
    });

    return cardObjects;
}

export function flipCards(cardList, flippedCardsList) {
    // Unflip cards that are in the flippedCardsList but not in the cardList
    flippedCardsList.forEach((card) => {
        card.scale.set(Math.abs(card.scale.x), Math.abs(card.scale.y), Math.abs(card.scale.z)); //Set it to a positive value of its current value
    });

    // Clear the flippedCardsList
    flippedCardsList.length = 0;

    cardList.forEach((card) => {
        card.scale.set(Math.abs(card.scale.x)* -1,  Math.abs(card.scale.y) * -1, Math.abs(card.scale.z) * -1); //Set it to the negative of its current value
        flippedCardsList.push(card);
    });
}