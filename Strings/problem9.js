//count the names starting from "A"
let names=["Amit","Nrupul","Pulkit","Yogesh","Amar","Varun"];
let count=0;
for(i=0;i<names.length;i++){
  let x=names[i];
  if(x[0]=="A"){
    count++;
  }
}
console.log(count);