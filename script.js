function random() {
  return Math.floor(Math.random() * 3);
}

function Choose(a) {
  var b = random();
  if (a == b) {
    alert("Congratulations, you hit the lucky button!");
  } else {
    alert("Unfortunately you did not find the winning button!");
  }
}
