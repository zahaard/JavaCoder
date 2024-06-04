let MenorMayor;
do {
     MenorMayor = prompt("Si eres Mayor o Menor sino ingresa ESC para salir");
    let edadIngresada;
    if (MenorMayor !== "ESC") { 

        switch (MenorMayor) {
            case "Mayor":
               edadIngresada = prompt("ingrese su edad");
               if(edadIngresada > 0 && edadIngresada >=18) alert("Su edad es de: " + edadIngresada + " años, entonces es Mayor de Edad");
               else
                alert("edad ingresada incorrecta")
               break;
            case "Menor":
              edadIngresada = prompt("ingrese su edad");
                if(edadIngresada > 0 && edadIngresada < 18) alert("Su edad es de: " + edadIngresada + " años, entonces es Menor de Edad");
                else
                    alert("edad ingresada incorrecta")
                break;
            default:
                alert("La Edad ingresada es Incorrecta!!!")
                break;
        }
    }

  } while (MenorMayor !== "ESC");
  
let cartIcon = document.querySelector("#cart-icon");
let cart = document.querySelector(".cart");
let closeCart = document.querySelector("#close-cart");

cartIcon.onclick = () => {
    cart.classList.add("active");
};
closeCart.onclick = () => {
    cart.classList.remove("active");
};

