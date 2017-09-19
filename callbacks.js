//challenge 1
function addTwo(num){
  return num + 2;
}

//challenge 2
function addS(thing) {
  return thing + 's';
}

//challenge 3
function map(numList, callback){
  var numList = [5, 4, 3, 2, 1];
  var callback = numList.map(function(callback) {
    return numList*2; 
  } );  
};

//challenge 4
var alphabet = '';
var letters = ['a', 'b', 'c', 'd'];
letters.forEach(function(alphabet) {
    console.log(alphabet);
});


//extension 1
  var numList = [5, 4 , 3, 2, 1];
  var callback = mapWith.forEach(
    function(callback){
      return numList*2;
    }
  );


//extension 2
var nums = [4,1,3]
nums.reduce(function(sum, value) {
  return sum + value;
}, 0);

