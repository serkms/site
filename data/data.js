// Здесь заносятся данные, которые будут отображаться в блоке Answer & Question.
//question - текст вопроса
//answer - текст ответа

const qa = [
    {
        question: "Lorem ipsum dolor sit amet, consectetur.",
        answer: "Unless stated otherwise by your airline, the only requirement to exit Thailand is to present your vaccination certificate or an ATK test result before boarding the flight. It is recommended to check with your airline to know the current entry requirements of your country of destination."
    },
    {
        question: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur assumenda cum earum illum ipsa molestiae nemo quo voluptas voluptatibus",
        answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, iste veniam? A amet beatae commodi corporis cupiditate debitis doloribus dolorum eaque eligendi enim illum, laboriosam laborum minima, natus nihil nisi numquam officiis optio porro praesentium quas quo vel voluptas voluptatem voluptates! Error officiis praesentium qui. Accusamus atque autem culpa cum cumque doloremque et modi, molestiae, nihil numquam quas tenetur veniam."
    },
    {
        question: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur assumenda cum earum illum ipsa molestiae nemo quo voluptas voluptatibus",
        answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, iste veniam? A amet beatae commodi corporis cupiditate debitis doloribus dolorum eaque eligendi enim illum, laboriosam laborum minima, natus nihil nisi numquam officiis optio porro praesentium quas quo vel voluptas voluptatem voluptates! Error officiis praesentium qui. Accusamus atque autem culpa cum cumque doloremque et modi, molestiae, nihil numquam quas tenetur veniam."
    },
    {
        question: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur assumenda cum earum illum ipsa molestiae nemo quo voluptas voluptatibus",
        answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, iste veniam? A amet beatae commodi corporis cupiditate debitis doloribus dolorum eaque eligendi enim illum, laboriosam laborum minima, natus nihil nisi numquam officiis optio porro praesentium quas quo vel voluptas voluptatem voluptates! Error officiis praesentium qui. Accusamus atque autem culpa cum cumque doloremque et modi, molestiae, nihil numquam quas tenetur veniam."
    },
    {
        question: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur assumenda cum earum illum ipsa molestiae nemo quo voluptas voluptatibus",
        answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, iste veniam? A amet beatae commodi corporis cupiditate debitis doloribus dolorum eaque eligendi enim illum, laboriosam laborum minima, natus nihil nisi numquam officiis optio porro praesentium quas quo vel voluptas voluptatem voluptates! Error officiis praesentium qui. Accusamus atque autem culpa cum cumque doloremque et modi, molestiae, nihil numquam quas tenetur veniam."
    },
    {
        question: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur assumenda cum earum illum ipsa molestiae nemo quo voluptas voluptatibus",
        answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, iste veniam? A amet beatae commodi corporis cupiditate debitis doloribus dolorum eaque eligendi enim illum, laboriosam laborum minima, natus nihil nisi numquam officiis optio porro praesentium quas quo vel voluptas voluptatem voluptates! Error officiis praesentium qui. Accusamus atque autem culpa cum cumque doloremque et modi, molestiae, nihil numquam quas tenetur veniam."
    },
    {
        question: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur assumenda cum earum illum ipsa molestiae nemo quo voluptas voluptatibus",
        answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, iste veniam? A amet beatae commodi corporis cupiditate debitis doloribus dolorum eaque eligendi enim illum, laboriosam laborum minima, natus nihil nisi numquam officiis optio porro praesentium quas quo vel voluptas voluptatem voluptates! Error officiis praesentium qui. Accusamus atque autem culpa cum cumque doloremque et modi, molestiae, nihil numquam quas tenetur veniam."
    },
    {
        question: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur assumenda cum earum illum ipsa molestiae nemo quo voluptas voluptatibus",
        answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, iste veniam? A amet beatae commodi corporis cupiditate debitis doloribus dolorum eaque eligendi enim illum, laboriosam laborum minima, natus nihil nisi numquam officiis optio porro praesentium quas quo vel voluptas voluptatem voluptates! Error officiis praesentium qui. Accusamus atque autem culpa cum cumque doloremque et modi, molestiae, nihil numquam quas tenetur veniam."
    },
    {
        question: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur assumenda cum earum illum ipsa molestiae nemo quo voluptas voluptatibus",
        answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, iste veniam? A amet beatae commodi corporis cupiditate debitis doloribus dolorum eaque eligendi enim illum, laboriosam laborum minima, natus nihil nisi numquam officiis optio porro praesentium quas quo vel voluptas voluptatem voluptates! Error officiis praesentium qui. Accusamus atque autem culpa cum cumque doloremque et modi, molestiae, nihil numquam quas tenetur veniam."
    },
    {
        question: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur assumenda cum earum illum ipsa molestiae nemo quo voluptas voluptatibus",
        answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, iste veniam? A amet beatae commodi corporis cupiditate debitis doloribus dolorum eaque eligendi enim illum, laboriosam laborum minima, natus nihil nisi numquam officiis optio porro praesentium quas quo vel voluptas voluptatem voluptates! Error officiis praesentium qui. Accusamus atque autem culpa cum cumque doloremque et modi, molestiae, nihil numquam quas tenetur veniam."
    },
    {
        question: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur assumenda cum earum illum ipsa molestiae nemo quo voluptas voluptatibus",
        answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, iste veniam? A amet beatae commodi corporis cupiditate debitis doloribus dolorum eaque eligendi enim illum, laboriosam laborum minima, natus nihil nisi numquam officiis optio porro praesentium quas quo vel voluptas voluptatem voluptates! Error officiis praesentium qui. Accusamus atque autem culpa cum cumque doloremque et modi, molestiae, nihil numquam quas tenetur veniam."
    },
    {
        question: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur assumenda cum earum illum ipsa molestiae nemo quo voluptas voluptatibus",
        answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, iste veniam? A amet beatae commodi corporis cupiditate debitis doloribus dolorum eaque eligendi enim illum, laboriosam laborum minima, natus nihil nisi numquam officiis optio porro praesentium quas quo vel voluptas voluptatem voluptates! Error officiis praesentium qui. Accusamus atque autem culpa cum cumque doloremque et modi, molestiae, nihil numquam quas tenetur veniam."
    },
    {
        question: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur assumenda cum earum illum ipsa molestiae nemo quo voluptas voluptatibus",
        answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, iste veniam? A amet beatae commodi corporis cupiditate debitis doloribus dolorum eaque eligendi enim illum, laboriosam laborum minima, natus nihil nisi numquam officiis optio porro praesentium quas quo vel voluptas voluptatem voluptates! Error officiis praesentium qui. Accusamus atque autem culpa cum cumque doloremque et modi, molestiae, nihil numquam quas tenetur veniam."
    },
    {
        question: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur assumenda cum earum illum ipsa molestiae nemo quo voluptas voluptatibus",
        answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, iste veniam? A amet beatae commodi corporis cupiditate debitis doloribus dolorum eaque eligendi enim illum, laboriosam laborum minima, natus nihil nisi numquam officiis optio porro praesentium quas quo vel voluptas voluptatem voluptates! Error officiis praesentium qui. Accusamus atque autem culpa cum cumque doloremque et modi, molestiae, nihil numquam quas tenetur veniam."
    },
    {
        question: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur assumenda cum earum illum ipsa molestiae nemo quo voluptas voluptatibus",
        answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, iste veniam? A amet beatae commodi corporis cupiditate debitis doloribus dolorum eaque eligendi enim illum, laboriosam laborum minima, natus nihil nisi numquam officiis optio porro praesentium quas quo vel voluptas voluptatem voluptates! Error officiis praesentium qui. Accusamus atque autem culpa cum cumque doloremque et modi, molestiae, nihil numquam quas tenetur veniam."
    },
    {
        question: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur assumenda cum earum illum ipsa molestiae nemo quo voluptas voluptatibus",
        answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, iste veniam? A amet beatae commodi corporis cupiditate debitis doloribus dolorum eaque eligendi enim illum, laboriosam laborum minima, natus nihil nisi numquam officiis optio porro praesentium quas quo vel voluptas voluptatem voluptates! Error officiis praesentium qui. Accusamus atque autem culpa cum cumque doloremque et modi, molestiae, nihil numquam quas tenetur veniam."
    },
    {
        question: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur assumenda cum earum illum ipsa molestiae nemo quo voluptas voluptatibus",
        answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, iste veniam? A amet beatae commodi corporis cupiditate debitis doloribus dolorum eaque eligendi enim illum, laboriosam laborum minima, natus nihil nisi numquam officiis optio porro praesentium quas quo vel voluptas voluptatem voluptates! Error officiis praesentium qui. Accusamus atque autem culpa cum cumque doloremque et modi, molestiae, nihil numquam quas tenetur veniam."
    },
    {
        question: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur assumenda cum earum illum ipsa molestiae nemo quo voluptas voluptatibus",
        answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, iste veniam? A amet beatae commodi corporis cupiditate debitis doloribus dolorum eaque eligendi enim illum, laboriosam laborum minima, natus nihil nisi numquam officiis optio porro praesentium quas quo vel voluptas voluptatem voluptates! Error officiis praesentium qui. Accusamus atque autem culpa cum cumque doloremque et modi, molestiae, nihil numquam quas tenetur veniam."
    },
   ]


// Здесь заносятся данные, которые будут отображаться в блоке Секция1.
//img - ссылка на изображение
//title - текст заголовка карточки
//text - текст, который будет отображаться в карточке.
//description - текст, который будет отображаться во всплывающем окне при нажатии на кнопку ПОКАЗАТЬ БОЛЬШЕ

const section1Date = [
    {
        img: "image/section1/image1.jpg",
        title: "Заголовок",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur assumenda cum earum illum ipsa molestiae nemo quo voluptas voluptatibus",
        description: [
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur assumenda cum earum illum ipsa molestiae nemo quo voluptas voluptatibus",
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur assumenda cum earum illum ipsa molestiae nemo quo voluptas voluptatibus",
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur assumenda cum earum illum ipsa molestiae nemo quo voluptas voluptatibus",
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur assumenda cum earum illum ipsa molestiae nemo quo voluptas voluptatibus",
        ],
    },
    {
        img: "image/section1/image2.jpg",
        title: "Заголовок",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur assumenda cum earum illum ipsa molestiae nemo quo voluptas voluptatibus",
        description: [
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur assumenda cum earum illum ipsa molestiae nemo quo voluptas voluptatibus",
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur assumenda cum earum illum ipsa molestiae nemo quo voluptas voluptatibus",
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur assumenda cum earum illum ipsa molestiae nemo quo voluptas voluptatibus",
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur assumenda cum earum illum ipsa molestiae nemo quo voluptas voluptatibus",
        ],
    },
    {
        img: "image/section1/image3.jpg",
        title: "Заголовок",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur assumenda cum earum illum ipsa molestiae nemo quo voluptas voluptatibus",
        description: [
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur assumenda cum earum illum ipsa molestiae nemo quo voluptas voluptatibus",
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur assumenda cum earum illum ipsa molestiae nemo quo voluptas voluptatibus",
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur assumenda cum earum illum ipsa molestiae nemo quo voluptas voluptatibus",
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur assumenda cum earum illum ipsa molestiae nemo quo voluptas voluptatibus",
        ],
    },
    {
        img: "image/section1/image4.jpg",
        title: "Заголовок",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur assumenda cum earum illum ipsa molestiae nemo quo voluptas voluptatibus",
        description: [
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur assumenda cum earum illum ipsa molestiae nemo quo voluptas voluptatibus",
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur assumenda cum earum illum ipsa molestiae nemo quo voluptas voluptatibus",
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur assumenda cum earum illum ipsa molestiae nemo quo voluptas voluptatibus",
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur assumenda cum earum illum ipsa molestiae nemo quo voluptas voluptatibus",
        ],
    },
    {
        img: "image/section1/image5.jpg",
        title: "Заголовок",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur assumenda cum earum illum ipsa molestiae nemo quo voluptas voluptatibus",
        description: [
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur assumenda cum earum illum ipsa molestiae nemo quo voluptas voluptatibus",
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur assumenda cum earum illum ipsa molestiae nemo quo voluptas voluptatibus",
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur assumenda cum earum illum ipsa molestiae nemo quo voluptas voluptatibus",
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur assumenda cum earum illum ipsa molestiae nemo quo voluptas voluptatibus",
        ],
    },
    {
        img: "image/section1/image6.jpg",
        title: "Заголовок",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur assumenda cum earum illum ipsa molestiae nemo quo voluptas voluptatibus",
        description: [
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur assumenda cum earum illum ipsa molestiae nemo quo voluptas voluptatibus",
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur assumenda cum earum illum ipsa molestiae nemo quo voluptas voluptatibus",
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur assumenda cum earum illum ipsa molestiae nemo quo voluptas voluptatibus",
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur assumenda cum earum illum ipsa molestiae nemo quo voluptas voluptatibus",
        ],
    },
    {
        img: "image/section1/image7.jpg",
        title: "Заголовок",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur assumenda cum earum illum ipsa molestiae nemo quo voluptas voluptatibus",
        description: [
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur assumenda cum earum illum ipsa molestiae nemo quo voluptas voluptatibus",
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur assumenda cum earum illum ipsa molestiae nemo quo voluptas voluptatibus",
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur assumenda cum earum illum ipsa molestiae nemo quo voluptas voluptatibus",
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur assumenda cum earum illum ipsa molestiae nemo quo voluptas voluptatibus",
        ],
    },
]

// Здесь заносятся данные, которые будут отображаться в блоке Секция2.
//img - ссылка на изображение
//title - текст заголовка карточки
//text - текст, который будет отображаться в карточке.
//description - текст, который будет отображаться во всплывающем окне при нажатии на кнопку ПОКАЗАТЬ БОЛЬШЕ

const section2Date = [
    {
        img: "image/section2/image1.jpg",
        title: "Заголовок",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur assumenda cum earum illum ipsa molestiae nemo quo voluptas voluptatibus",
        description: [
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur assumenda cum earum illum ipsa molestiae nemo quo voluptas voluptatibus",
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur assumenda cum earum illum ipsa molestiae nemo quo voluptas voluptatibus",
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur assumenda cum earum illum ipsa molestiae nemo quo voluptas voluptatibus",
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur assumenda cum earum illum ipsa molestiae nemo quo voluptas voluptatibus",
        ],
    },
    {
        img: "image/section2/image2.jpg",
        title: "Заголовок",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur assumenda cum earum illum ipsa molestiae nemo quo voluptas voluptatibus",
        description: [
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur assumenda cum earum illum ipsa molestiae nemo quo voluptas voluptatibus",
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur assumenda cum earum illum ipsa molestiae nemo quo voluptas voluptatibus",
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur assumenda cum earum illum ipsa molestiae nemo quo voluptas voluptatibus",
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur assumenda cum earum illum ipsa molestiae nemo quo voluptas voluptatibus",
        ],
    },
    {
        img: "image/section2/image3.jpg",
        title: "Заголовок",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur assumenda cum earum illum ipsa molestiae nemo quo voluptas voluptatibus",
        description: [
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur assumenda cum earum illum ipsa molestiae nemo quo voluptas voluptatibus",
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur assumenda cum earum illum ipsa molestiae nemo quo voluptas voluptatibus",
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur assumenda cum earum illum ipsa molestiae nemo quo voluptas voluptatibus",
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur assumenda cum earum illum ipsa molestiae nemo quo voluptas voluptatibus",
        ],
    },
    {
        img: "image/section2/image4.jpg",
        title: "Заголовок",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur assumenda cum earum illum ipsa molestiae nemo quo voluptas voluptatibus",
        description: [
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur assumenda cum earum illum ipsa molestiae nemo quo voluptas voluptatibus",
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur assumenda cum earum illum ipsa molestiae nemo quo voluptas voluptatibus",
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur assumenda cum earum illum ipsa molestiae nemo quo voluptas voluptatibus",
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur assumenda cum earum illum ipsa molestiae nemo quo voluptas voluptatibus",
        ],
    },
    {
        img: "image/section2/image5.jpg",
        title: "Заголовок",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur assumenda cum earum illum ipsa molestiae nemo quo voluptas voluptatibus",
        description: [
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur assumenda cum earum illum ipsa molestiae nemo quo voluptas voluptatibus",
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur assumenda cum earum illum ipsa molestiae nemo quo voluptas voluptatibus",
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur assumenda cum earum illum ipsa molestiae nemo quo voluptas voluptatibus",
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur assumenda cum earum illum ipsa molestiae nemo quo voluptas voluptatibus",
        ],
    },
    {
        img: "image/section2/image6.jpg",
        title: "Заголовок",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur assumenda cum earum illum ipsa molestiae nemo quo voluptas voluptatibus",
        description: [
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur assumenda cum earum illum ipsa molestiae nemo quo voluptas voluptatibus",
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur assumenda cum earum illum ipsa molestiae nemo quo voluptas voluptatibus",
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur assumenda cum earum illum ipsa molestiae nemo quo voluptas voluptatibus",
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur assumenda cum earum illum ipsa molestiae nemo quo voluptas voluptatibus",
        ],
    },
]



// Здесь заносятся данные, которые будут отображаться в блоке с инфографикой.
//img - ссылка на изображение
//title - текст заголовка карточки
//text - текст, который будет отображаться в карточке.
//description - текст, который будет отображаться во всплывающем окне при клике на карточку
const section3Date = [
    {
        img: "image/section3/image1.jpg",
        title: "Заголовок",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur assumenda cum earum illum ipsa molestiae nemo quo voluptas voluptatibus",
        description: [
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur assumenda cum earum illum ipsa molestiae nemo quo voluptas voluptatibus",
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur assumenda cum earum illum ipsa molestiae nemo quo voluptas voluptatibus",
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur assumenda cum earum illum ipsa molestiae nemo quo voluptas voluptatibus",
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur assumenda cum earum illum ipsa molestiae nemo quo voluptas voluptatibus",
        ],
    },
    {
        img: "image/section3/image2.jpg",
        title: "Заголовок",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur assumenda cum earum illum ipsa molestiae nemo quo voluptas voluptatibus",
        description: [
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur assumenda cum earum illum ipsa molestiae nemo quo voluptas voluptatibus",
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur assumenda cum earum illum ipsa molestiae nemo quo voluptas voluptatibus",
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur assumenda cum earum illum ipsa molestiae nemo quo voluptas voluptatibus",
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur assumenda cum earum illum ipsa molestiae nemo quo voluptas voluptatibus",
        ],
    },
    {
        img: "image/section3/image3.jpg",
        title: "Заголовок",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur assumenda cum earum illum ipsa molestiae nemo quo voluptas voluptatibus",
        description: [
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur assumenda cum earum illum ipsa molestiae nemo quo voluptas voluptatibus",
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur assumenda cum earum illum ipsa molestiae nemo quo voluptas voluptatibus",
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur assumenda cum earum illum ipsa molestiae nemo quo voluptas voluptatibus",
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur assumenda cum earum illum ipsa molestiae nemo quo voluptas voluptatibus",
        ],
    },
    {
        img: "image/section3/image4.jpg",
        title: "Заголовок",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur assumenda cum earum illum ipsa molestiae nemo quo voluptas voluptatibus",
        description: [
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur assumenda cum earum illum ipsa molestiae nemo quo voluptas voluptatibus",
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur assumenda cum earum illum ipsa molestiae nemo quo voluptas voluptatibus",
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur assumenda cum earum illum ipsa molestiae nemo quo voluptas voluptatibus",
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur assumenda cum earum illum ipsa molestiae nemo quo voluptas voluptatibus",
        ],
    },
    {
        img: "image/section3/image5.jpg",
        title: "Заголовок",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur assumenda cum earum illum ipsa molestiae nemo quo voluptas voluptatibus",
        description: [
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur assumenda cum earum illum ipsa molestiae nemo quo voluptas voluptatibus",
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur assumenda cum earum illum ipsa molestiae nemo quo voluptas voluptatibus",
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur assumenda cum earum illum ipsa molestiae nemo quo voluptas voluptatibus",
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur assumenda cum earum illum ipsa molestiae nemo quo voluptas voluptatibus",
        ],
    },
    {
        img: "image/section3/image6.jpg",
        title: "Заголовок",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur assumenda cum earum illum ipsa molestiae nemo quo voluptas voluptatibus",
        description: [
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur assumenda cum earum illum ipsa molestiae nemo quo voluptas voluptatibus",
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur assumenda cum earum illum ipsa molestiae nemo quo voluptas voluptatibus",
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur assumenda cum earum illum ipsa molestiae nemo quo voluptas voluptatibus",
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur assumenda cum earum illum ipsa molestiae nemo quo voluptas voluptatibus",
        ],
    },
    {
        img: "image/section3/image7.jpg",
        title: "Заголовок",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur assumenda cum earum illum ipsa molestiae nemo quo voluptas voluptatibus",
        description: [
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur assumenda cum earum illum ipsa molestiae nemo quo voluptas voluptatibus",
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur assumenda cum earum illum ipsa molestiae nemo quo voluptas voluptatibus",
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur assumenda cum earum illum ipsa molestiae nemo quo voluptas voluptatibus",
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur assumenda cum earum illum ipsa molestiae nemo quo voluptas voluptatibus",
        ],
    },
    {
        img: "image/section3/image8.jpg",
        title: "Заголовок",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur assumenda cum earum illum ipsa molestiae nemo quo voluptas voluptatibus",
        description: [
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur assumenda cum earum illum ipsa molestiae nemo quo voluptas voluptatibus",
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur assumenda cum earum illum ipsa molestiae nemo quo voluptas voluptatibus",
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur assumenda cum earum illum ipsa molestiae nemo quo voluptas voluptatibus",
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur assumenda cum earum illum ipsa molestiae nemo quo voluptas voluptatibus",
        ],
    },

]


// Здесь заносятся данные, которые будут отображаться в блоке Новости.
//img - ссылка на изображение
//title - текст заголовка карточки
//text - текст, который будет отображаться во всплывающем окне при нажатии на кнопку СМОТРЕТЬ
const newsDate = [
    {
        img: "image/news/image1.jpg",
        title: "Краткий заголовок новости. По клику на кнопке открывается всплывающее окно с новостью",
        text: [
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur assumenda cum earum illum ipsa molestiae nemo quo voluptas voluptatibus",
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur assumenda cum earum illum ipsa molestiae nemo quo voluptas voluptatibus",
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur assumenda cum earum illum ipsa molestiae nemo quo voluptas voluptatibus",
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur assumenda cum earum illum ipsa molestiae nemo quo voluptas voluptatibus",
        ],
    },
    {
        img: "image/news/image2.jpg",
        title: "Краткий заголовок новости. По клику на кнопке открывается всплывающее окно с новостью",
        text: [
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur assumenda cum earum illum ipsa molestiae nemo quo voluptas voluptatibus",
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur assumenda cum earum illum ipsa molestiae nemo quo voluptas voluptatibus",
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur assumenda cum earum illum ipsa molestiae nemo quo voluptas voluptatibus",
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur assumenda cum earum illum ipsa molestiae nemo quo voluptas voluptatibus",
        ],
    },
    {
        img: "image/news/image3.jpg",
        title: "Краткий заголовок новости. По клику на кнопке открывается всплывающее окно с новостью",
        text: [
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur assumenda cum earum illum ipsa molestiae nemo quo voluptas voluptatibus",
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur assumenda cum earum illum ipsa molestiae nemo quo voluptas voluptatibus",
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur assumenda cum earum illum ipsa molestiae nemo quo voluptas voluptatibus",
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur assumenda cum earum illum ipsa molestiae nemo quo voluptas voluptatibus",
        ],
    },
    {
        img: "image/news/image4.jpg",
        title: "Краткий заголовок новости. По клику на кнопке открывается всплывающее окно с новостью",
        text: [
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur assumenda cum earum illum ipsa molestiae nemo quo voluptas voluptatibus",
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur assumenda cum earum illum ipsa molestiae nemo quo voluptas voluptatibus",
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur assumenda cum earum illum ipsa molestiae nemo quo voluptas voluptatibus",
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur assumenda cum earum illum ipsa molestiae nemo quo voluptas voluptatibus",
        ],
    },
    {
        img: "image/news/image5.jpg",
        title: "Краткий заголовок новости. По клику на кнопке открывается всплывающее окно с новостью",
        text: [
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur assumenda cum earum illum ipsa molestiae nemo quo voluptas voluptatibus",
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur assumenda cum earum illum ipsa molestiae nemo quo voluptas voluptatibus",
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur assumenda cum earum illum ipsa molestiae nemo quo voluptas voluptatibus",
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur assumenda cum earum illum ipsa molestiae nemo quo voluptas voluptatibus",
        ],
    },
    {
        img: "image/news/image6.jpg",
        title: "Краткий заголовок новости. По клику на кнопке открывается всплывающее окно с новостью",
        text: [
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur assumenda cum earum illum ipsa molestiae nemo quo voluptas voluptatibus",
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur assumenda cum earum illum ipsa molestiae nemo quo voluptas voluptatibus",
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur assumenda cum earum illum ipsa molestiae nemo quo voluptas voluptatibus",
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur assumenda cum earum illum ipsa molestiae nemo quo voluptas voluptatibus",
        ],
    },
    {
        img: "image/news/image7.jpg",
        title: "Краткий заголовок новости. По клику на кнопке открывается всплывающее окно с новостью",
        text: [
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur assumenda cum earum illum ipsa molestiae nemo quo voluptas voluptatibus",
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur assumenda cum earum illum ipsa molestiae nemo quo voluptas voluptatibus",
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur assumenda cum earum illum ipsa molestiae nemo quo voluptas voluptatibus",
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur assumenda cum earum illum ipsa molestiae nemo quo voluptas voluptatibus",
        ],
    },
    {
        img: "image/news/image8.jpg",
        title: "Краткий заголовок новости. По клику на кнопке открывается всплывающее окно с новостью",
        text: [
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur assumenda cum earum illum ipsa molestiae nemo quo voluptas voluptatibus",

        ],
    },

]


// Здесь заносятся данные, которые будут отображаться в слайдере.
//img - ссылка на изображение


const sliderDate = [
    {
        img: "image/slider/image1.jpg",
    },
    {
        img: "image/slider/image2.jpg",
    },
    {
        img: "image/slider/image3.jpg",
    },
    {
        img: "image/slider/image4.jpg",
   },
    {
        img: "image/slider/image5.jpg",
    },
    {
        img: "image/slider/image6.jpg",
    },
    {
        img: "image/slider/image7.jpg",
    },
    {
        img: "image/slider/image8.jpg",
    },

]