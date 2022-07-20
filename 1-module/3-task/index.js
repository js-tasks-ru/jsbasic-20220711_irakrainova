function ucFirst(str) {
  let strSplit = str.split("");
  let l = strSplit.length;
  let result = strSplit[0].toUpperCase() + strSplit.slice(1, l).join('');
  console.log (result)
}
