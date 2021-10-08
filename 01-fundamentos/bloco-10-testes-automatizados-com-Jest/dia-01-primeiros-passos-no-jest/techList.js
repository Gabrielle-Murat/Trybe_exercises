const list = (techArray, nameString) => {
  if (techArray.length === 0) {
    return 'Vazio!'
  } else {
    return techArray.sort().reduce((acc, currentTech) => {
      (acc.push({
        tech: currentTech,
        name: nameString,
      }))
      return acc;
    }, []);
  }
}

module.exports = list;