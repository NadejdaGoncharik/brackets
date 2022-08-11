module.exports = function check(str, bracketsConfig) {
  let i = 0;
  bracketsConfig.map(el => {
    let brackets = el.join('');
    if (str.indexOf(brackets) >= 0) {
      str = str.replace(brackets, '');
    } else {
      i++;
    }
  });
  if (i < bracketsConfig.length) {
    return check(str, bracketsConfig);
  } else {
    return !str;
  }
}
