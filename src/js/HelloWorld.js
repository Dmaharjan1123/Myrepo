export default function HelloWorld() {
class Person
{
  constructor(width,height){
    this.myWidth = width;
    this.myHeight = height;

 }
}

let Dilip = new Person(25,30);
let Dipesh = new Person(23,34);
alert(Dilip.myWidth);
alert(Dipesh.myWidth);
Dipesh.myHeight = 15;
Dilip.myWidth = 10;
alert(Dilip.myWidth);
alert(Dipesh.myHeight);

}
