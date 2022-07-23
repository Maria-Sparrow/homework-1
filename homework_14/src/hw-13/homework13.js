function* createIdGenerator(){
    let index = 1;
    while(true){
        yield index++
    }
}

let result = createIdGenerator();
console.log(result.next().value);
console.log(result.next().value);
console.log(result.next().value);
console.log(result.next().value);

function* newFontGenerator(size) {
  let start = 1;
  for (let i = 1; i <= start; i++) {
    start++;
    fontSize = size;
    let newSize = yield size;
    if (newSize == "up") {
      size += 2;
    }
    if (newSize == "down") {
      size -= 2;
    }
  }
}
let defaultSize = 14;

let fontGenerator = newFontGenerator(defaultSize);
console.log(fontGenerator.next("up").value);
console.log(fontGenerator.next("up").value);
console.log(fontGenerator.next().value);
console.log(fontGenerator.next("down").value);
