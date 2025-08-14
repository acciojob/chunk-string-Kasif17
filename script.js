function stringChop(str, size) {
  // your code here
	let arr = str.split(''); 
    let chunks = [];
    
    while (arr.length) {
        chunks.push(arr.splice(0, size).join(''));
    }
    
    return chunks;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
