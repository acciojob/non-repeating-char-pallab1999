function firstNonRepeatedChar(str) {
 // Write your code here
	boolean f = false;
	for(int i=0;i<str.length;i++){
		f = false;
		for(int j=0;j<str.length;j++){
			if(i!=j&&str[i]===str[j]){
				f = true;
			}
		}
		if(f==false)return str[i];
	}
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
