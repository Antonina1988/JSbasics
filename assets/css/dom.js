//1) HTML: є кнопка.
//JS: При натисканні на кнопку змінити текст цієї кнопки (див. textContent).
//2) HTML: є кнопка.
//JS: При натисканні на кнопку змінити її колір.
const btn = document. getElementById (`clickBtn`);
console.log('btn :>> ', btn);
function clickHandler (e) {
    clickBtn.style.backgroundColor =`red`;
    clickBtn.textContent = `NEW HTML`;
    clickBtn.mouseenter = ``
}
btn.addEventListener(`click`, clickHandler);
//3) HTML: є зображення.
//JS: Зробити так, щоб при появі сторінки відображалася одна картинка, а при наведенні миші на неї відображалася інша.
const imgAttr = {
    src: `https://cdn.pixabay.com/photo/2016/03/28/12/35/cat-1285634_640.png`,
    alt: `cat`,
    src: `https://cdn.pixabay.com/photo/2016/03/28/12/35/cat-1285634_640.png`,
    alt: `cat2`,
}
const imgEll = document.querySelector(`img`);
imgEll.src= imgAttr.src;
imgEll.alt = imgAttr.alt;
console.log(imgAttr);
