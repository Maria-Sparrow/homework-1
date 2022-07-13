let buttonForSimpleSquare = document.querySelector('.buttonForSimpleSquare');
let buttonForIntervalSquare = document.querySelector('.buttonForIntervalSquare');
function generateRandomColor() {
    let color = Math.floor(Math.random() * 256);
    return color;
 }
 
function generateBlocks() {
    for (let i = 1; i <= 25; i++) {
       let body = document.querySelector('.firstblock')
       let newSquare = document.createElement('div');
       newSquare.classList.add('square')
       newSquare.style.backgroundColor = `rgb(${generateRandomColor()}, ${generateRandomColor()}, ${generateRandomColor()})`
       body.append(newSquare)
    };
 }
 function generateBlocksInterval() {
    for (let i = 1; i <= 25; i++) {
       let body = document.querySelector('.secondblock')
       let newSquare = document.createElement('div');
       newSquare.classList.add('square')
       setInterval(() => {
          newSquare.style.backgroundColor = `rgb(${generateRandomColor()}, ${generateRandomColor()}, ${generateRandomColor()})`
       }, 1000)
       body.append(newSquare)
    };
 }

 buttonForSimpleSquare.onclick = generateBlocks;

 buttonForIntervalSquare.onclick = generateBlocksInterval;