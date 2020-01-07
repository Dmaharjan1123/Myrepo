export default function HelloWorld() {

  class Rectangle
  {
    constructor(width,height){
      this.myWidth = width;
      this.myHeight = height;
   }
  }


  let r = new Rectangle(4,5);
  r.myHeight = 50;

  Rectangle.prototype.getArea = function () {
    return this.myWidth * this.myHeight

  };
  console.log(r.getArea());


}
