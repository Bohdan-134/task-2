const defaultImgs = [
    { imgSrc: '/img/1.webp', status: true },
    { imgSrc: '/img/2.webp', status: true },
    { imgSrc: '/img/3.webp', status: true },
    { imgSrc: '/img/4.webp', status: true },
    { imgSrc: '/img/5.webp', status: true },
    { imgSrc: '/img/6.webp', status: true },
    { imgSrc: '/img/7.webp', status: true },
    { imgSrc: '/img/8.webp', status: true },
    { imgSrc: '/img/9.webp', status: true },
    { imgSrc: '/img/10.webp', status: true },
    { imgSrc: '/img/11.webp', status: true },
    { imgSrc: '/img/12.webp', status: true },
];


const wrap = document.getElementById('wrap');

if (localStorage.getItem('defaultImgs')) {
    const images = JSON.parse(localStorage.getItem('defaultImgs'));
    renderImages(images);
} else {
    renderImages(defaultImgs);
    localStorage.setItem('defaultImgs', JSON.stringify(defaultImgs));
}

function renderImages(arrImg) {
    arrImg.forEach((img, index) => {
        if (img.status) {
            const li = document.createElement('li');
            li.classList.add('img-item');
            li.setAttribute('data-num', index);
            const imgElement = document.createElement('img');
            imgElement.src = img.imgSrc;
            imgElement.alt = 'img';
            li.appendChild(imgElement);
            const listImg = document.querySelector('.img-list');
            listImg.appendChild(li);
        }
    });
}

function updateTime() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let formattedTime = `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}`;
    let timeSpan = document.getElementById("time");
    timeSpan.innerHTML = formattedTime;
}

updateTime();
setInterval(updateTime, 60000);

function updateDate() {
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const formattedDate = `${day < 10 ? '0' + day : day}.${month < 10 ? '0' + month : month}.${year}`;
    const dateSpan = document.getElementById('date');
    dateSpan.textContent = formattedDate;
}

updateDate();

function updateQuantity() {
    const imagesLength = JSON.parse(localStorage.getItem('defaultImgs')).length;
    const quantity = document.getElementById('quantity');
    quantity.textContent = `Quantity: ${imagesLength}`;
}

updateQuantity();