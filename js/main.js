function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function checkLength(string, max) {
  if (string.length() > max) {
    return false;
  }
  return true;
}

let alreadyUsedPhotoIds = [];

function getUniqueRandomPhotoId(min, max) {
  let number = getRandom(min, max);

  for(let i = 0; i < alreadyUsedPhotoIds.length; i++) {
    if (alreadyUsedPhotoIds[i] === number) {
      return getUniqueRandomPhotoId(min, max);
    }
  }

  alreadyUsedPhotoIds.push(number);
  return number;
}

let alreadyUsedCommentIds = [];

function getUniqueRandomCommentId(min, max) {
  let number = getRandom(min, max);

  for(let i = 0; i < alreadyUsedCommentIds.length; i++) {
    if (alreadyUsedCommentIds[i] === number) {
      return getUniqueRandomCommentId(min, max);
    }
  }

  alreadyUsedCommentIds.push(number);
  return number;
}


const getRandomArrayElement = function (elements){
  return elements[getRandom(0, elements.length - 1)];
};


const DESCRIPTION = [
  'wow',
  'so cool!',
  'meh',
  'not so cool('
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


let counter = 0;
function createPhotoDescription(){
  counter++;
  return {
    id : getUniqueRandomPhotoId(1, 100),
    url : `photos/${counter}.jpg`,
    description : getRandomArrayElement(DESCRIPTION),
    likes : getRandom(Like.MIN, Like.MAX),
    comment : Array.from({length: getRandom(0, 10)}, createNewComment),  // От 0 до 10 комментариев
  };
}

//required post count
const REQUIRED_PHOTO_COUNT = 25;

//array of photos
const arrayPhotoObject = Array.from({length: REQUIRED_PHOTO_COUNT}, createPhotoDescription);


console.log(JSON.stringify(arrayPhotoObject, null, 2));
