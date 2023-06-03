let string="Clark Kent";
//Step 1: Changing the string to array
let arr=[];
for(i=0;i<string.length;i++){
  arr.push(string[i]);
}
console.log(arr);
//Step:2 Updating
arr[5]="&";
//Step:3 Converting back to string
let result="";
for(j=0;j<arr.length;j++){
  result=result+arr[j];
}
console.log(result);