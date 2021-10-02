// original code
hoistFunction();

function hoistFunction() {
  console.log(x);
  var x = "var";
  console.log(x);
}

// same code interpreted by the JS engine
function hoistFunction() {
  var x;
  console.log(x);
  x = "var";
  console.log(x);
}

hoistFunction();