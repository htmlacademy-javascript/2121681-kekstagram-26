function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function checkLength(string, max) {
  if (string.length() > max) {
    return false;
  }
  return true;
}
