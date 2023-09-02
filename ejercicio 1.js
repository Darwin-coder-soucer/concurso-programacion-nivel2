// ejercicio 1


function order(words){
  const arrWords = words.split(' ');
  arrWords.sort((a, b) => {
    const numA = a.match(/\d+/); 
    const numB = b.match(/\d+/);
    return numA - numB; 
  });
  return arrWords.join(' ');  
}