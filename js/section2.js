//Секция Thaipass
const elementListThaipassSelector = '.section2__list'; //Куда вставляется в index.html

const thaipassSection = new Section(elementListThaipassSelector); //экземпляр класса для секции Thaipass

const elementThaipassSelector = '.element-card';

section1Date.forEach((item) => {
    thaipassSection.addItem(createCard(item))

});

function createCard(newCard) {
    const card = new Card(elementThaipassSelector, newCard);
    return card.generateCard();
}



