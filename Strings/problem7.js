//I want to change Donald to Ronald in short method
let str="Donald";
let bag="";
for(i=0;i<str.length;i++){
  if(i==0){
    bag=bag+"R";
  }
  else{
    bag=bag+str[i];
  }
}
console.log(bag);