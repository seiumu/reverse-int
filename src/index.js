module.exports = function reverse (n) {
  var reversed = "";
  var numtext = n.toString();
  var digits = n.toString().length;
  for(i=0; i<digits; i++){
    if(numtext[i]==="-"){
      current = "";
    }
    else{
      current = numtext[i];
    }
    reversed = current + reversed;
  }
  console.log(reversed);
  return reversed;
}
