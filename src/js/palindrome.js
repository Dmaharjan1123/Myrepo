let str="madam";
let a=str.length;

alert(a);
let z = ispalindrome(a,str);
console.log(z);
}

function ispalindrome(z, b) {
  let newStr = "";
  let v = z-1;
  for(let x = v; x>-1; x--){
    newStr += b[x];
 }
 console.log(newStr);
 return b == newStr;
}
