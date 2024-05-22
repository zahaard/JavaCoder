const mascota = "perro";
 
switch (mascota) {
  case "lagarto":
    console.log("Tengo un lagarto");
    break;
  case "perro":
    console.log("Tengo un perro");
    break;
  case "gato":
    console.log("Tengo un gato");
    break;
  case "serpiente":
    console.log("Tengo una serpiente");
    break;
  case "loro":
    console.log("Tengo un loro");
    break;
  default:
    console.log("No tengo mascota");
    break;
}
const mandado = "Ir de Compras";
switch (mandado) {
  case "Ir al Dentista": {
    let mensaje = "Odio ir al dentista";
    console.log(mensaje);
    break;
  }
  case "Ir al Cine": {
    let mensaje = "Me encanta ir al Cine";
    console.log(mensaje);
    break;
  }
  default: {
    console.log("Sin mandados");
    break;
  }
}
for (var i = 0; i < 50; i++) {
    console.log(i);
 }
 let month = 4;
let monthName;

if (month == 1) {
  monthName = 'Jan';
} else if (month == 2) {
  monthName = 'Feb';
} else if (month == 3) {
  monthName = 'Mar';
} else if (month == 4) {
  monthName = 'Apr';
} else if (month == 5) {
  monthName = 'May';
} else if (month == 6) {
  monthName = 'Jun';
} else if (month == 7) {
  monthName = 'Jul';
} else if (month == 8) {
  monthName = 'Aug';
} else if (month == 9) {
  monthName = 'Sep';
} else if (month == 10) {
  monthName = 'Oct';
} else if (month == 11) {
  monthName = 'Nov';
} else if (month == 12) {
  monthName = 'Dec';
} else {
  monthName = 'Invalid month';
}
console.log(monthName);
let contrasenia;
while (true) {
  contrasenia = prompt ("Ingrese su contraseñña");
  if (contrasenia.lenght < 8){
    alert("La contraseña debe tener almenos 8 caracteres");
  } else {
    alert("Contraseña creada correctamente");
    break;
  }
}
 