import {getRandom, getUniqueRandomPhotoId, getUniqueRandomCommentId, getRandomArrayElement} from './util.js';

const DESCRIPTION = [
  'being happy never goes out of style',
  'I woke up like this',
  'life is too short for bad vibes',
  'It’s not a phase mom, it’s who I am',
  'at least my pizza still loves me',
  'oh hey there',
  'Stress less and enjoy the best',
  'Me, myself and I'
];

const NAMES = [
  'Bellamy',
  'Charlie',
  'Dakota',
  'Denver',
  'Emerson',
  'Finley',
  'Justice',
  'River',
  'Skyler',
  'Tatum'
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const Avatar = {
  MIN: 1,
  MAX: 6
};

const Like = {
  MIN: 15,
  MAX: 200
};

const Comment = {
  MIN: 1,
  MAX: 250,
};

//creates new object-comment
function createNewComment(){
  return {
    id: getUniqueRandomCommentId(Comment.MIN, Comment.MAX),
    avatar: `img/avatar-${getRandom(Avatar.MIN, Avatar.MAX)}.svg`,
    message: getRandomArrayElement(MESSAGES),
    name: getRandomArrayElement(NAMES),
  };
}


//creates new photo post with comments
let counter = 0;

function createPhotoPost(){
  counter++;
  return {
    id : getUniqueRandomPhotoId(1, 25),
    url : `photos/${counter}.jpg`,
    description : getRandomArrayElement(DESCRIPTION),
    likes : getRandom(Like.MIN, Like.MAX),
    comments : Array.from({length: getRandom(1, 10)}, createNewComment),  //from 1 to 10 comments
  };
}

//required post count
const REQUIRED_PHOTO_COUNT = 25;
//array of photos
const arrayPhotoObject = () => Array.from({length: REQUIRED_PHOTO_COUNT}, createPhotoPost);

export {arrayPhotoObject};
