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

function createCard(item) {
    // query template
    const template = document.getElementById("card-template");
    if (!template) return;
    // console.log(template);

    // clone template
    const cardClone = template.content.firstElementChild.cloneNode(true);
    // console.log("cardClone", cardClone)

    // ghi đè thông tin trên element
    const cardName = cardClone.querySelector(".homepage__trending--title h4");
    if (cardName) cardName.textContent = item.name;

    // gắn sự kiện
    function removeELement() {
        cardName.remove();
    }

    cardName.addEventListener("click", removeELement)

    // cardName.removeEventListener("click", removeELement)
    // cardName.addEventListener("click", () => {})

    // cardName.click = removeELement()

    return cardClone;
}

function renderListCard(arr) {
    if (!Array.isArray(arr) || arr.length === 0) return;

    const wrapper = document.getElementById("render-here");
    for (const item of arr) {
        // console.log(createCard(item));
        const cardEle = createCard(item);
        wrapper.appendChild(cardEle);
    }
}

renderListCard(arr);

const cardList = document.querySelectorAll('.homepage__trending--card');
console.log("cardList", cardList)

// bắt sự kiện trên element
for (let i = 0; i < cardList.length; i++) {
    cardList[i].addEventListener("click", function() {
        if (i === 2) {
            console.log('card 1');
        }
    });
}