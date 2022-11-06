//write a javascript program to get
//the volume of a cylinder with your four decimal places object classess

function cylinder(cyl_height, cyl_diameter) {
  this.cyl_height = cyl_height;
  this.cyl_diameter = cyl_diameter;
}

cylinder.prototype.volume = function () {
  var radius = this.cyl_diameter / 2;
  return this.cyl_height * Math.PI * radius * radius;
};

var cyl = new cylinder(7, 4);
//volume of the cylinder with four decimal places.
console.log("volume =", cyl.volume().toFixed(4));
