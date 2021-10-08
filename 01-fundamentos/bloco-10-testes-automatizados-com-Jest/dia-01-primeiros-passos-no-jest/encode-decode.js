function encode(phrase) {
  let output;
  output = phrase.replace(/a/g, '1').replace(/e/g, '2').replace(/i/g, '3').replace(/o/g, '4')
    .replace(/u/g, '5');
  return output;
}

function decode(phrase) {
  let output;
  output = phrase.replace(/1/g, 'a').replace(/2/g, 'e').replace(/3/g, 'i').replace(/4/g, 'o')
    .replace(/5/g, 'u');
  return output;
}

module.exports = {
  encode,
  decode,
}