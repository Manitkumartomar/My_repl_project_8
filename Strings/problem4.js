let name="Manit Kumar";
let x="";
for(i=0;i<name.length;i++){
  if(i==6){
    continue;
  }
  x=x+name[i];
}
console.log(x);