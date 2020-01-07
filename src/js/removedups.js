export default function removedups() {
  let arr=[1,2,2,3,3,4,7,8];
  let z=arr.length;
  arr=removedup(z,arr);
  console.log(arr);
}
function removedup(a, brr){
  let newArr = []
    for(let i = 0;i < a; i++) {
      if (!newArr.includes(brr[i])) {
        newArr.push(brr[i]);
      }
      

    }
    return newArr;
}
