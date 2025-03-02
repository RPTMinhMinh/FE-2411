const fruitPictures = [
    {
        name: 'Kiwis',
        description: 'Collection of high resolution fruit photoshoo.',
        image_title: 'image/kiwis.jpg',
        image: ['image/kiwis1.jpg', 'image/kiwis2.jpg','image/kiwis3.jpg'],
        create_at: 'May 8'
    },
    {
        name: 'Lemons',
        description: 'Collection of high resolution fruit photoshoo.',
        image_title: 'image/lemons.jpg',
        image: ['image/lemons1.jpg', "image/lemons2.jpg", "image/lemons3.jpg", "image/lemons4.jpg"],
        create_at: 'May 8'
    },
    {
        name: 'Strawberries',
        description: 'Collection of high resolution fruit photoshoo.',
        image_title: 'strawberries.jpg',
        image: ['strawberry1.jpg', "strawberry2.jpg"],
        create_at: 'May 8'
    },
    {
        name: 'Figs',
        description: 'Second photoshoots of figs moved here. Use this fold.',
        image_title: 'figs.jpg',
        image: ['fig1.jpg', "fig2.jpg"],
        create_at: 'May 8'
    },
    {
        name: 'Nectarines',
        description: 'Collection of high resolution fruit photoshoo.',
        image_title: 'nectarines.jpg',
        image: ['nectarine1.jpg', "nectarine2.jpg"],
        create_at: 'May 7'
    },
    {
        name: 'Watermelons',
        description: 'Collection of high resolution fruit photoshoo.',
        image_title: 'watermelons.jpg',
        image: ['watermelon1.jpg', "watermelon2.jpg"],
        create_at: 'May 7'
    }
];

let $choice = document.getElementById('choice');
let $show = document.getElementById('show');
let $keyword = document.getElementById('keyword');
let $btnSearch = document.getElementById('btnSearch');

function showChoice(fruitPictures){
    let showChoice = '';
    for(let i = 0; i < fruitPictures.length; i++){
        const fruit = fruitPictures[i];
        showChoice += `
        <div class="card mb-2 d-flex flex-row align-items-center" onclick="showDetail('${fruit.name}')">
                    <img src="${fruit.image_title}" class="card-img-top" alt="${fruit.name}" style="max-width: 150px; max-height: 100px">
                    <div class="card-body mb-2 d-flex flex-row align-items-center">
                        <div>
                            <h5 class="card-title">${fruit.name}</h5>
                            <p class="card-text">${fruit.description}</p>
                        </div>
                        <p class="card-text"><small class="text-muted">${fruit.create_at}</small></p>
                    </div>
                </div>
        `
    }
$choice.innerHTML = showChoice;
}

function showDetail(fruitName) {
    const fruit = fruitPictures.find(f => f.name === fruitName);
    let showDetailPicture = '';

    if (fruit) {
        const imageElement = fruit.image;
        for (let i = 0; i < imageElement.length; i++) {
            showDetailPicture += `
            <div class="col-md-6 mb-2">
                <img src="${imageElement[i]}" class="card-img-top" alt="${fruit.name}" style="max-width: 400px;">
            </div>
            `;
        }
    }
    $show.innerHTML = showDetailPicture;
}

function searchPictures(){
    const keyword = $keyword.value.toLowerCase().trim();
    const result = [];
    for(let element of fruitPictures){
        if(element.name.toLowerCase().trim().includes(keyword)){
           result.push(element)
        }
    }
    showChoice(result);
}
$btnSearch.onclick = searchPictures;

showChoice(fruitPictures);