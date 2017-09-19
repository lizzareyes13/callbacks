function addTwo(num){
  return num + 2;
}

function addS(thing) {
  return thing + 's';
}

function map(numList, callback){
  var numList = [5, 4, 3, 2, 1];
  var callback = numList.map(function(callback) {
    return numList*2; 
  } );  
};

var alphabet = '';
var letters = ['a', 'b', 'c', 'd'];
letters.forEach(function(alphabet) {
    console.log(alphabet);
});
