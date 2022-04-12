//Секция Test & Go
const elementListTestGoSelector = '.section1__list'; //Куда вставляется в index.html

const testGoSection = new Section(elementListTestGoSelector); //экземпляр класса для секции Test & Go

const elementTestGoSelector = '.element-card';

section2Date.forEach((item) => {
    testGoSection.addItem(createCard(item))

});

function createCard(newCard) {
    const card = new Card(elementTestGoSelector, newCard);
    return card.generateCard();
}

