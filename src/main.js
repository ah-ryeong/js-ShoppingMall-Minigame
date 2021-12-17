// Fetch the items from the JSON file
function loadItems() {
    return fetch('data/data.json')
    .then(response => response.json())
    .then(json => json.items);
}

// Update the list with the given items
function displayItems(items) {
    // 받아온 데이터를 변환해서 html에 표시하게 만든다.
    // 컨테이너 요소를 정의
    const container = document.querySelector('.items');
    container.innerHTML = items.map(item => createHTMLString(item)).join('');
}

// Create HTML list item from the given data item
function createHTMLString(item) {
    return `
    <li class="item">
        <img src="${item.image}" alt="${item.type}" class="item_thumbnail" />
        <span class="item_description">${item.gender}, ${item.size}</span>
    </li>
    `;
}

// main
loadItems()
    .then(items => {
        // console.log(items);
        displayItems(items);
        // setEventListener(items)
    })
    .catch(console.log);