// For the  YouTube algorithm!
let count = 0;

document.getElementById("decrease").onclick = function () {
  count -= 1;
  document.getElementById("countlabel").innerHTML = count;
};

document.getElementById("rest").onclick = function () {
  count = 0;
  document.getElementById("countlabel").innerHTML = count;
};

document.getElementById("increase").onclick = function () {
  count += 1;
  document.getElementById("countlabel").innerHTML = count;
};
