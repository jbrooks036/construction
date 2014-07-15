'use strict';

function Room (name, length, width, height, floor, color) {
  this.name = name;
  this.length = parseInt(length);
  this.width = parseInt(width);
  this.height = parseInt(height);
  this.floor = floor;
  this.color = color;
}

Room.prototype.area = function() {
    return this.length * this.width;
  };

Room.prototype.cost = function() {
  var ppsqftFloor;

  switch (this.floor)  {
    case 'carpet':
      ppsqftFloor = 15;
      break;
    case 'tile':
      ppsqftFloor = 12;
      break;
    case 'wood':
      ppsqftFloor = 10;
      break;
  }
 
  var costFloor = this.area() * ppsqftFloor;
  var costWalls = (this.length * this.height * 2 * 0.50) + (this.width * this.height * 2 * 0.50);

  return costFloor + costWalls;
};



module.exports = Room;
