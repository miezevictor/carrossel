let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');
let carrosselDom = document.querySelector('.carrossel');
let listItemDom = document.querySelector('.carrossel .list');
let destaquesDom = document.querySelector('.carrossel .destaques');

nextDom.onclick = function() {
    showSlider('next');
}

prevDom.onclick = function() {
    showSlider('prev');
}

let timeRunning = 3000;
let timeAutoNext = 7000;
let runTimeOut;
let runAutoRun = setTimeout(()=>{
    nextDom.click();
}, timeAutoNext);

function showSlider(type) {
    let itemSlider = document.querySelectorAll('.carrossel .list .item');
    let itemDestaques = document.querySelectorAll('.carrossel .destaques .item');

    if (type === 'next') {
        listItemDom.appendChild(itemSlider[0]);
        destaquesDom.appendChild(itemDestaques[0]);
        carrosselDom.classList.add('next');
    } else {
        let positionLastItem = itemSlider.length - 1;
        listItemDom.prepend(itemSlider[positionLastItem]);
        destaquesDom.prepend(itemDestaques[positionLastItem]);
        carrosselDom.classList.add('prev');
    }

    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() =>{
        carrosselDom.classList.remove('next');
        carrosselDom.classList.remove('prev');
    }, timeRunning);

    clearTimeout(runAutoRun);
    runAutoRun = setTimeout(()=>{
        nextDom.click();
    }, timeAutoNext);
}