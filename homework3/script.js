'use strict';

window.addEventListener('load', () => {
    renderPhoto();
});

async function getRandomPhoto() {
    try {
        const response = await fetch(`https://api.unsplash.com/photos/random?client_id=8wAOWuQyNVuUVq55Vj0Tvxl7ObWlVELKGIyIr5VzEAY`);
        const photo = await response.json();
        console.log(response);
        return photo;
    } catch (error) {
        console.error('Ошибка при загрузке фотографий:', error);
        return [];
    }
}

async function renderPhoto() {
    const photo = await getRandomPhoto();
    if (photo) {
        const imageBox = document.querySelector('.image_block');
        const img = document.createElement('img');
        img.classList.add('image');

        img.src = photo.urls.small;
        img.alt = photo.alt_description;
        imageBox.appendChild(img);

        const imagePhotographerNameDiv = document.querySelector('.img_photographer-name');
        imagePhotographerNameDiv.textContent = `${photo.user.name}`;

        

        
    }
}
const likeBtn = document.querySelector('image_likes-button');
likeBtn.addEventListener('click', ()  => {
    if (likeBtn.classList.contains('liked')) {
        likeBtn.classList.remove('liked');
    } else {
        likeBtn.classList.add('liked');
    }
    console.log('you liked img');
})
getRandomPhoto();