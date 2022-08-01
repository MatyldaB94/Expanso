// stwórz jedną zmienna w ktorej bede trzymc stan strony (wszystkie informace - obejct)
//ten obiekt musi mieć ilość pizzy, cene pizzy i osoby do podziały
// znajdz  iputy po id i przypisz do zmiennych w js
// do każdego z inputó dodaj eventLister (typ eventu na kory chcesz zareaować - "keyup", listener - nowa funkcja czyli to co sie zadzieje, 
const stan = {
    pizzaAmount: 0,

}
const element = document.querySelector("#pizzaAmountInput")
element.addEventListener("change", function (event) {

    console.log(event.target.value)
    stan.pizzaAmount = event.target.value;
})


//"change" daje nam info, że coś się zmieniło w tym elemencie
