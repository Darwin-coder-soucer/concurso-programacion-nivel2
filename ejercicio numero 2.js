// ejercicio numero 2

function findOutlier(integers){
  const evens = integers.filter(num => num % 2 === 0);
  const odds = integers.filter(num => num % 2 !== 0);
  if (evens.length === 1) {
    return evens[0];
  } else {
    return odds[0];
  }
}