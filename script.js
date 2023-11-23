let container = document.createElement('div');
container.className = 'container';

let data = [
    {
        image: '1.png',
        price: "2000",
        full_price: "6000"
    },
    {
        image: '1.png',
        price: "2000",
        full_price: "6000"
    },
    {
        image: '1.png',
        price: "2000",
        full_price: "6000"
    },
    {
        image: '1.png',
        price: "2000",
        full_price: "6000"
    },
    {
        image: '1.png',
        price: "2000",
        full_price: "6000"
    },
    {
        image: '1.png',
        price: "2000",
        full_price: "6000"
    },
];

const renderBlock = () => {
    let fragment = new DocumentFragment();

    data.map((item, id) => {
        let block = document.createElement('div');
        block.innerHTML = `
        <div id="btn" class="cards">
            <img src="${item.image}">
            <div class="texts">
                <p>${item.price}</p>
                <p class="text-line">${item.full_price}</p>
            </div>
            <button>Наш инстаграм - waka.shop.karakol</button>
            <button>Наш Whatsapp - 0707392088</button>
            <button>Наш номер - 0778558832</button>
        </div>
        `;
        fragment.append(block);
    })
    return fragment;
}

document.body.append(container);
container.append(renderBlock());