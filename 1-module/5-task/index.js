function truncate(str, maxlength) {
  if (str.length <= maxlength) {
    return (str);
  }
  else {
    const k = (str.length - maxlength);
    let str1 = str.slice(0,maxlength-1);
    const d = str1 + "…";
    return (d);
  }
}
let a = 'Вот, что мне хотелось бы сказать на эту тему:';
console.log (truncate( a, 10))
