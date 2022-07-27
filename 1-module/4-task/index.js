function checkSpam(str) {
  let str1 = str.toLowerCase()
  if ((str1.includes('1XbeT now'.toLowerCase())) || (str1.includes('xxx'.toLowerCase()))){
    return true;
  }
  return false;}

