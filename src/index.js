module.exports = function longestConsecutiveLength(array) {
  // your solution here

  var arrSet = new Set();
  var maxLength = 0;
  var l = array.length;
  for (var i = 0; i < l; i++)
  {
    arrSet.add(array[i]);
  }

  for (var item of arrSet)
  {
    if(!arrSet.has(item - 1))
    {
      var length = 1;
      var current = item;

      while(arrSet.has(current + 1))
      {
        current ++;
        length ++;
      }
      if(length > maxLength)
      maxLength = length;
    }
  }
  return maxLength;
}
