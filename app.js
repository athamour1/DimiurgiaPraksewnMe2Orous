var exisoseis = null;
var psifia = null;
var praksi1 = null;
var praksi2 = null;
var praksi3 = null;
var praksi4 = null;

function calc() {
  exisoseis = document.getElementById("exisoseis").value;
  psifia = document.getElementById("psifia").value;
  praksi1 = document.getElementById("praksi1").checked;
  praksi2 = document.getElementById("praksi2").checked;
  praksi3 = document.getElementById("praksi3").checked;
  praksi4 = document.getElementById("praksi4").checked;
  prakseis = [];
  if (praksi1) {
    prakseis.push("+")
  }
  if (praksi2) {
    prakseis.push("x")
  }
  if (praksi3) {
    prakseis.push("/")
  }
  if (praksi4) {
    prakseis.push("-")
  }
  console.log("prakseis: ", prakseis)
  console.log("prakseis: ", prakseis.length > 0)
  var error = document.getElementById("error");
  var resultMessage = document.getElementById("resultMessage");
  var results = document.getElementById("results")
  if (prakseis.length > 0) {
    error.innerHTML = ""
    resultMessage.innerHTML = "Βρείτε το αποτέλεσμα"
    alert("Τέλεια!!!\nΘα υπολογίσω τώρα");
    var stringResult = ""
    for (let index = 0; index < exisoseis; index += 1) {
      let number1 = Math.floor(Math.random() * (10 * psifia))
      let praksi = prakseis[Math.floor(Math.random() * prakseis.length)]
      let number2 = Math.floor(Math.random() * (10 * psifia))
      console.log(number1 + praksi + number2 + "=")
      stringResult += "<div class='row'><div class='red col-1-ss'>" + (index+1) + ") </div><div class='col-4'>" + number1 + " " + praksi + " " + number2 + " " + "=" + "</div><div class='col-7'></div></div><div class='row'><hr style='border: 1px dashed #adadad; width: 100%;' /></div>"
    }
    console.log(stringResult)
    results.innerHTML = stringResult
  } else {
    // error.style.color = "red"
    error.innerHTML = "Λάθος στο είδος των πράξεων"
    resultMessage.innerHTML =""
  }

}

function clean() {
  var error = document.getElementById("error");
  var resultMessage = document.getElementById("resultMessage");
  error.innerHTML = ""
  resultMessage.innerHTML = ""
  document.getElementById('psifia').value = '1'
  document.getElementById('exisoseis').value = ''
  document.getElementById("praksi1").checked = false;
  document.getElementById("praksi2").checked = false;
  document.getElementById("praksi3").checked = false;
  document.getElementById("praksi4").checked = false;
}
