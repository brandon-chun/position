/**
 * Amywod
 * Created by Brandon on 9/21/2016.
 */


function position(array, target) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] >= target) {
      return i;
    }
  }
  return 0;
}
let testArray = [1, 2, 3, 6, 7];
console.log(position(testArray, 5));