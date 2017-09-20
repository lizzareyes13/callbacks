//challenge 1
function addTwo(num){
  return num + 2;
}

//challenge 2
function addS(thing) {
  return thing + 's';
}

//challenge 3
function map(array, kalbak) {
	let output = [];
	for (let i = 0; i < array.length; i++) {
		output.push(kalbak(array[i]));
    }
	return output;
}

function kalbak(input) {
	return input * 2;
}

//challenge 4
var alphabet = '';
var letters = ['a', 'b', 'c', 'd'];
letters.forEach(function(alphabet) {
    console.log(alphabet);
});


//extension 1
  function mapWith(array, kalbak) {
  	let output = [];
	  output.forEach(function(i){
		output.push(kalbak(array[i]));
	  });
  };

//extension 2
var nums = [4,1,3]
nums.reduce(function(sum, value) {
  return sum + value;
}, 0);

