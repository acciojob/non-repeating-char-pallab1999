function firstNonRepeatedChar(str) {
 // Write your code here
	
	for(int i=0;i<str.length;i++){
		let f = false;
		for(int j=0;j<str.length;j++){
			if(i!=j&&str[i]===str[j]){
				f = true;
				break;
			}
		}
		if(f===false)return str[i];
	}
	return null;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
