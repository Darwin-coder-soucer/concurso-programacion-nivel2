// ejercicio 4

function isValidWalk(walk) {
  if (walk.length !== 10) return false;
  const position = { n: 0, s: 0, e: 0, w: 0 };
  walk.forEach(step => {
    position[step]++;
      
  });
  return position.n === position.s && position.e === position.w;
}