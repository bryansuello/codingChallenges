// Bob needs a fast way to calculate the volume of a cuboid with three values: the
// length, width and height of the cuboid. Write a function to help Bob with this calculation.

let l = 14,
  w = 12,
  h = 8;

const getVolumeOfCuboid = (length, width, height) => {
  return length * width * height;
};

console.log(getVolumeOfCuboid(l, w, h));
