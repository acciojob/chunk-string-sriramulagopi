function stringChop(str, size) {
  // your code here
	let count = 0;
  let count1 = 0;
	let array = [];
	let str1 = "";
	for (let i=0;i<str.length;i++){
    str1+=str[i];
		count++;
		if (size==count){
			array.push(str1);
      count=0;
      count1++;
			str1="";
		}
	}
  str1="";
  for (let i=(count1*size);i<str.length;i++){
    str1+=str[i];
  }
  array.push(str1);
  if(str.length<size){
	  return str;
  }
  return array;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
