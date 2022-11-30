const h1 = document.querySelector("h1");
const input1 = document.querySelector("#calculo1");
const input2 = document.querySelector("#calculo2");
const btn = document.querySelector("#btnCalcular");
const pResult = document.querySelector("#result");
const form = document.querySelector("#form");
//.addEventListener es un metodo se debe utilizar se agregaa ("nombre del evento", y el codigo js que queremos llamar cuando suceda ese evento)

//btn.addEventListener("click", btnOnClick);

form.addEventListener("submit", sumarInputValues);
//btn.addEventListener("click", sumarInputValues); tambien se podria hacer asi -->

function sumarInputValues(event) {
    event.preventDefault();
    const sumaInputs = input1.value + input2.value;
    pResult.innerText = "Resultado: " + sumaInputs;
}

