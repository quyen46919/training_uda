const arr = [
    {
        id: 1,
        name: 'Miss Showbiz 1',
        source: 'https://res.cloudinary.com/dlq6za9et/video/upload/v1669906697/y3fkhfvwma9uls7pfuhv.mp3',
        imageUrl: 'https://res.cloudinary.com/dlq6za9et/image/upload/v1669906677/rmrkntpzroc2zm2uiflf.jpg',
        createdAt: 991299249242
    },
    {
        id: 2,
        name: 'Miss Showbiz 2',
        source: 'https://res.cloudinary.com/dlq6za9et/video/upload/v1669906697/y3fkhfvwma9uls7pfuhv.mp3',
        imageUrl: 'https://res.cloudinary.com/dlq6za9et/image/upload/v1669906751/cvy9noeug3irs147p7du.jpg',
        createdAt: 991299249242
    },
    {
        id: 3,
        name: 'Miss Showbiz 3',
        source: 'https://res.cloudinary.com/dlq6za9et/video/upload/v1669906697/y3fkhfvwma9uls7pfuhv.mp3',
        imageUrl: 'https://res.cloudinary.com/dlq6za9et/image/upload/v1669906592/wbt4vuf21d6rlembqf1r.webp',
        createdAt: 991299249242
    },
    {
        id: 4,
        name: 'Miss Showbiz 4',
        source: 'https://res.cloudinary.com/dlq6za9et/video/upload/v1669906697/y3fkhfvwma9uls7pfuhv.mp3',
        imageUrl: 'https://res.cloudinary.com/dlq6za9et/image/upload/v1669906380/rzqw05ypp0pfdlu1zgw9.jpg',
        createdAt: 991299249242
    },
]


function createCardElement(card) {
    console.log('render card')
    const cardTemplate = document.getElementById('card-template');
    if (!cardTemplate) return null;

    
    const cardCloneEle = cardTemplate.content.firstElementChild.cloneNode(true);

    const cardNameEle = cardCloneEle.querySelector(".homepage__trending--title h4");
    if (cardNameEle) cardNameEle.innerHTML = card.name;

    return cardCloneEle; 
}

function renderCardList(arr) {
    console.log('render card list')
    if (!Array.isArray(arr) || arr.length === 0) return null;

    const listWapper = document.querySelector(".homepage__trending--content");
    if (!listWapper) return;

    for (const item of arr) {
        const card = createCardElement(item);
        listWapper.appendChild(card);
    }
}

(() => {
    console.log("sakdl;asld");
    renderCardList(arr);
})();
