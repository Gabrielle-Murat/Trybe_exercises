const hydrate = (string) => {
  const answer = string
    .split(' ')
    .reduce((acc, currentElement) => {
    const parsedElement = parseInt(currentElement);
    if (isNaN(parsedElement) === false) {
      return acc + currentElement;
    } else {
      return acc;
    }
    }, 0);

  const checkPlural = answer === 1 ? 'copo' : 'copos';
  return `${answer} ${checkPlural} de água`;
}

module.exports = hydrate;
