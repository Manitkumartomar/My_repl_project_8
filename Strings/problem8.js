//I want to change _ to &
let str="Manit_Kumar";
let x="";
for(i=0;i<str.length;i++){
  if(i==5){
    x=x+"&";
  }
  else{
    x=x+str[i];
  }
}
console.log(x);