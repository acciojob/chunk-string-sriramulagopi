function stringChop(str, size) {
  // your code here
	if (str===null){
		return [];
	}
	let i=0,array=[];
	while(i<str.length){
		array.push(str.slice(i,i+size));
		i+=size;
	}
	return array;

}
// // Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
