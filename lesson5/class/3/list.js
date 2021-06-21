const listDiv = document.getElementById('list');
const key = 'key';
let store = JSON.parse(localStorage.getItem(key)) || [];

const showList = () => {
    if (!store.length) {
        const empty = document.createElement('h3');
        empty.innerText = 'List is empty';
        listDiv.appendChild(empty);
    }
    let buttonAll = document.createElement('button');
    for (let item of store) {
        const itemDiv = document.createElement('div');
        const imgE = document.createElement('img');
        const nameE = document.createElement('div');
        const amountE = document.createElement('div');
        const priceE = document.createElement('div');
        const button = document.createElement('button');

        imgE.src = item.img
        nameE.innerText = `Name: ${item.name}`
        amountE.innerText = `Amount: ${item.amount}`
        priceE.innerText = `Price: ${item.price}`
        button.innerText = 'Delete'
        buttonAll.innerText = 'DeleteAll'
        button.onclick = () => {
            deleteItem(item.id)
        }

        itemDiv.append(imgE, nameE, amountE, priceE, button)
        listDiv.appendChild(itemDiv)
    }
    buttonAll.onclick = () => {
        deleteAll()
    }
    listDiv.appendChild(buttonAll)
}

const deleteItem = (id) => {
    store = store.filter(value => value.id !== id)
    localStorage.setItem(key, JSON.stringify(store))
    listDiv.innerHTML = '';
    showList();
}

const deleteAll = () => {
    localStorage.clear()
    showList()
    listDiv.innerHTML = 'List is empty';
}

showList()