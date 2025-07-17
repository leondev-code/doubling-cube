let Value = 1;
function reset() {
    if (confirm("Are you sure?")) {
        Value = 1; update(); document.getElementById("helper").style.visibility = "visible";
    }
}
function update() {
    if (Value==1) {
        document.getElementById("cube").innerHTML= "<h2>64</h2>";
    } else {
        document.getElementById("cube").innerHTML= "<h2>" + Value + "</h2>";
    }
}
function double() {
    document.getElementById("helper").style.visibility = "hidden";
    if (Value==64) {
        alert("Cube already at 64! Cannot double anymore. Reset if you want to start over.");
    } else {
        Value *= 2; update();
    }
}