 function verificarEdad() {
            let edad = document.getElementById("edad").value;
            let resultado = document.getElementById("resultadoVerificacion");
            if(edad >= 18) {
               resultado.textContent = "PUEDES INGRESAR A LA DISCOTECA";
               resultado.style.color = "green";
            }else{
               resultado.textContent = "NO PUEDES INGRESAR A LA DISCOTECA";
               resultado.style.color = "red";
               resultado.style.fontSize = "30px";
            }
        }