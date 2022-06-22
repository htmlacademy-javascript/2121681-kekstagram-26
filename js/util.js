//get random number
function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function checkLength(string, max) {
  if (string.length() > max) {
    return false;
  }
  return true;
}

//unique photo id's
const alreadyUsedPhotoIds = [];

function getUniqueRandomPhotoId(min, max) {
  const number = getRandom(min, max);

  for(let i = 0; i < alreadyUsedPhotoIds.length; i++) {
    if (alreadyUsedPhotoIds[i] === number) {
      return getUniqueRandomPhotoId(min, max);
    }
  }

  alreadyUsedPhotoIds.push(number);
  return number;
}

//unique comment id's
const alreadyUsedCommentIds = [];

function getUniqueRandomCommentId(min, max) {
  const number = getRandom(min, max);

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

export {getRandom, checkLength, getUniqueRandomPhotoId, getUniqueRandomCommentId, getRandomArrayElement};
