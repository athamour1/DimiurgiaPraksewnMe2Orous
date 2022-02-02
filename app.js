var exisoseis = null;
var psifia = null;
var praksi1 = null;
var praksi2 = null;
var praksi3 = null;
var praksi4 = null;

function calc() {
  exisoseis = document.getElementById("exisoseis").value;
  console.log(exisoseis);
  psifia = document.getElementById("psifia").value;
  console.log(psifia);
  praksi1 = document.getElementById("praksi1").checked;
  console.log(praksi1);
  praksi2 = document.getElementById("praksi2").checked;
  console.log(praksi2);
  praksi3 = document.getElementById("praksi3").checked;
  console.log(praksi3);
  praksi4 = document.getElementById("praksi4").checked;
  console.log(praksi4);
  alert("Τέλεια!!!\n Θα υπολογίσω τώρα");
}

function clean() {
  exisoseis = null;
  console.log("exisoseis ", exisoseis);
  psifia = null;
  console.log("psifia ", psifia);
  praksi1 = false;
  console.log("praksi1", praksi1);
  praksi2 = false;
  console.log("praksi2", praksi2);
  praksi3 = false;
  console.log("praksi3", praksi3);
  praksi4 = false;
  console.log("praksi4", praksi4);
}
