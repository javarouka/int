function isOpenBracket(char) {
  return '{(['.includes(char);
}

function isCloseBracket(char) {
  return ')}]'.includes(char);
}

function isBracket(char) {
  return isOpenBracket(char) || isCloseBracket(char);
}

function isPareBracket(b1, b2) {
  const comb = b1 + b2;
  return comb === '()' || comb === '{}' || comb === '[]';
}

function check(str) {
  const stack = [];
  for(let char of str) {
    if(!isBracket(char)) {
        continue;
    }
    if(isOpenBracket(char)) {
      stack.push(char);
      continue;
    }
    if(isCloseBracket(char)) {
      const lastBracket = stack.pop();
      if(!isPareBracket(lastBracket, char)) {
          return false;
      }
    }
  }
  return stack.length ? false : true;
}
