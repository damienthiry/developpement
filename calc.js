let input = "";
let input2 = "";
let input3 = "";
let result = 0;
let dot = false;

function Valeur(btn) {
  if (input2 == "") {
    input += btn.value;
    document.getElementById("output").innerHTML = input + input2 + input3;
  } else {
    input3 += btn.value;
    document.getElementById("output").innerHTML = input + input2 + input3;
  }
}
function Operator(btn) {
  if (input2 == "" && input !== "") {
    input2 += btn.value;
    document.getElementById("output").innerHTML = input + input2 + input3;
  }
}

function Resultat() {

  switch (input2) {
    case "+":
      result = (+input) + (+input3);
      break;
    case "-":
      result = (+input) - (+input3);
      break;

    case "/":
      result = (+input) / (+input3);
      break;
    case "*":
      result = (+input) * (+input3);
      break;
  }

  document.getElementById("output").innerHTML = result;
  input = "";
  input2 = "";
  input3 = "";
}

function Reset(btn) {
  document.getElementById("output").innerHTML = "0";
  input = "";
  input2 = "";
  input3 = "";
}

function ResetBis(btn) {
    document.getElementById("output").innerHTML = "0";
    input = "";
    input2 = "";
  }

function Retour(btn) {
  if (input3 !== "") {
    input3 = input3.replace(input3.slice(-1), "");
    document.getElementById("output").innerHTML = input + input2 + input3;
  } else if (input2 !== "") {
    input2 = input2.replace(input2.slice(-1), "");
    document.getElementById("output").innerHTML = input + input2 + input3;
  } else if (input !== "") {
    input = input.replace(input.slice(-1), "");
    document.getElementById("output").innerHTML = input + input2 + input3;
  }
}

function Dot(btn) {
  if (input !== "" && input2 == "" && input3 == "") {
    for (i = 0; i < input.length; i++) {
      if (input[i] == ".") {
        dot = true;
      }
    }
    if (dot == false) {
      input += btn.value;
    }
    dot = false;

  } else if (input !== "" && input2 !== "" && input3 !== "") {

    for (i = 0; i < input3.length; i++) {
      if (input3[i] == ".") {
        dot = true;
      }
    }
    if (dot == false) {
      input3 += btn.value;
    }
    dot = false;
  }
  document.getElementById("output").innerHTML = input + input2 + input3;
}

function Inverser(btn) {
  if (input !== "" && input2 == "") {
    input = 0 - (input);
    document.getElementById ("output").innerHTML = input + input2 + input3;
  } else if (input !== "" && input3 !== "") {
    input = 0 - (input3);
    document.getElementById("output").innerHTML = input + input2 + input3;
  }
}
