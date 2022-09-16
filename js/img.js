import {arrayPhotoObject} from './data.js';

const pictureBlock = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const similarPhotoPost = arrayPhotoObject();

const similarListFragment = document.createDocumentFragment();

similarPhotoPost.forEach(({url, comments, likes}) => {
  const photoElement = pictureTemplate.cloneNode(true);
  console.log(photoElement.querySelector('.picture__img'));
  photoElement.querySelector('.picture__img').src = url;
  photoElement.querySelector('.picture__comments').textContent = comments.length;
  photoElement.querySelector('.picture__likes').textContent = likes;
  similarListFragment.appendChild(photoElement);
});

pictureBlock.appendChild(similarListFragment);

export {similarPhotoPost, pictureBlock};
