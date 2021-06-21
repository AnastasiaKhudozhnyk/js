// 3. Імітуємо наповнення інтернет магазину товарами :
// Створити форму з наступними полями :
// - назва товару
// - кількість товару
// - ціна товару
// - картинка товару (посилання з інтернету)
// Зберігати товари в масив в локалсорадж. При збережені товару з форми, action не повинно відбуватись.
// створити елемент <a href='list.html'> На сторінку товарів</a>, та list.html, при переході на який відобразити на сторінці всі товари.
// На сторінці  list.html побудувати кнопку яка видаляє всі товари з корзини та локалстораджа.

const {name, price, img} = document.forms.f1;
const btn = document.getElementById('btn');
const key = 'key';

const save = (name, price, img) => {
    const store = JSON.parse(localStorage.getItem(key)) || [];

    store.push({id: Math.random(), name, price, img})
    localStorage.setItem(key, JSON.stringify(store))
}

btn.onclick = () => {
    save(name.value, price.value, img.value)
}