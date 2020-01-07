export default function HelloWorld() {
  let numb = 32;
  let fact = [];
  fact = factors(numb);
  toString(fact,numb);
}
function toString(fact,numb){
  if (!fact.includes('3'||'5'||'7')){
    alert('numb');
  }
  else if(!fact.includes('3'||'5')){
    alert('Plong');
  }
  else if(fact.includes('5'&&'7')){
    alert('PlangPlong');
  }
  else if(fact.includes('3'&&'7')){
    alert('PlingPlong');}
  else {
    alert('PlingPlangPlong');
  }


  }
