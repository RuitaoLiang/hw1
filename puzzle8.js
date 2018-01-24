function repeat(direction,n) {
  var count=0
  while (count<n) {
  direction();
  count=count+1
  }
 }
repeat(down,8)
repeat(right,2)
repeat(up,7)
repeat(right,2)
repeat(down,7)
repeat(right,2)
repeat(up,7)
repeat(right,2)
repeat(down,7)
right();
