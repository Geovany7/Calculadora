let inputDosCalculos = document.querySelector('#parteOndeOsValoresVaoFicar');
let primeiroNumero = 0
let segundoNumero = 0;
let tipoDeCalculor = null;
let qualEOCalculor = []

const numero1 = document.querySelector("#numero1");

console.log('')

console.log(1.1 + 1.1);

let multiplicaVazio = null
let calculor
console.log(multiplicaVazio)


let nat

function botoesDaCalculadora(botoes) {
    switch (botoes) {
        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':

            inputDosCalculos.value += botoes;
            if (multiplicaVazio == null) {
                if (tipoDeCalculor == ' + ' || tipoDeCalculor == ' - ' || tipoDeCalculor == ' * ' || tipoDeCalculor == ' / ') {
                    primeiroNumero = 0;
                    inputDosCalculos.value = botoes;
                    tipoDeCalculor = '';
                }
                primeiroNumero = parseFloat(primeiroNumero + botoes)
                console.log(parseFloat(primeiroNumero))
                console.log(typeof (primeiroNumero))
            } else {
                if (tipoDeCalculor == ' + ' || tipoDeCalculor == ' - ' || tipoDeCalculor == ' * ' || tipoDeCalculor == ' / ') {
                    segundoNumero = parseFloat(segundoNumero + botoes)
                    console.log(parseInt(primeiroNumero) + parseInt(segundoNumero))
                    console.log(segundoNumero.toString())
                }
            }
            break;
        case '.':
            inputDosCalculos.value += botoes;
            if (multiplicaVazio == null) {
                primeiroNumero = primeiroNumero + botoes
                console.log(botoes)
                console.log(primeiroNumero)

            } else {
                if (tipoDeCalculor == ' + ' || tipoDeCalculor == ' - ' || tipoDeCalculor == ' * ' || tipoDeCalculor == ' / ') {
                    segundoNumero = segundoNumero + botoes
                    console.log(parseFloat(primeiroNumero) + parseFloat(segundoNumero))
                }
            }
            break;
        case ' * ':
        case ' - ':
        case ' + ':
        case ' / ':
            if (primeiroNumero += 0) {
                if (multiplicaVazio == null) {
                    inputDosCalculos.value += botoes;
                    tipoDeCalculor = botoes;
                    qualEOCalculor.push(botoes)
                    multiplicaVazio += 1;
                    console.log(multiplicaVazio)
                }
            }
            break;
        case 'deleter':
           
            if (multiplicaVazio == null && tipoDeCalculor == null) {
                
                inputDosCalculos.value = inputDosCalculos.value.toString().slice(0, -1);
                primeiroNumero = parseFloat(primeiroNumero.toString().slice(0, -1));
                if (isNaN(primeiroNumero) == true) {
                    primeiroNumero = 0;
                    console.log(primeiroNumero)
                }

                console.log('primeiro numero, ', primeiroNumero)
            } else if (segundoNumero != 0) {
                inputDosCalculos.value = inputDosCalculos.value.toString().slice(0, -1);

                segundoNumero = parseFloat(segundoNumero.toString().slice(0, -1))
                if (isNaN(segundoNumero) == true) {
                    segundoNumero = 0;
                }
                console.log('segundo numero, ', segundoNumero)
            }
            else if (tipoDeCalculor == ' + ' || tipoDeCalculor == ' - ' || tipoDeCalculor == ' * ' || tipoDeCalculor == ' / ' && segundoNumero == 0) {
                
                inputDosCalculos.value = parseFloat(inputDosCalculos.value.toString().slice(0, -1));
                multiplicaVazio = null
                tipoDeCalculor = null
                
                console.log('operador, ', multiplicaVazio, tipoDeCalculor)
            }
            break;
        case 'reset':
            inputDosCalculos.value = '';
            primeiroNumero = 0
            segundoNumero = 0
            multiplicaVazio = null
            break;

        case 'resultador':
            if (primeiroNumero != 0 && segundoNumero != 0) {
                inputDosCalculos.value = '';
                console.log(primeiroNumero)
                console.log(segundoNumero)
                console.log(primeiroNumero + segundoNumero)
                primeiroNumero = parseFloat(primeiroNumero)
                segundoNumero = parseFloat(segundoNumero)
                console.log(primeiroNumero)
                console.log(segundoNumero)
                parseFloat(console.log(parseInt(primeiroNumero + segundoNumero)))

                switch (tipoDeCalculor) {
                    case ' + ':
                        inputDosCalculos.value = primeiroNumero + segundoNumero;
                        primeiroNumero = primeiroNumero + segundoNumero;
                        segundoNumero = '';
                        multiplicaVazio = null;
                        tipoDeCalculor = ' + ';
                        break;
                    case ' - ':
                        inputDosCalculos.value = primeiroNumero - segundoNumero;
                        primeiroNumero = primeiroNumero - segundoNumero;
                        segundoNumero = '';
                        multiplicaVazio = null;
                        console.log()
                        break;
                    case ' * ':
                        inputDosCalculos.value = primeiroNumero * segundoNumero;
                        primeiroNumero = primeiroNumero * segundoNumero;
                        segundoNumero = '';
                        multiplicaVazio = null;
                        break;
                    case ' / ':
                        inputDosCalculos.value = primeiroNumero / segundoNumero;
                        primeiroNumero = primeiroNumero / segundoNumero;
                        segundoNumero = '';
                        multiplicaVazio = null;
                        break;
                }
                console.log(inputDosCalculos.value)

            }
    }


    /*
    if (botoes == 'reset') {
        inputDosCalculos.value = '';
        primeiroNumero = 0;
        segundoNumero = 0;
    }else if (botoes == 'resultador'){
        } else if (multiplicaVazio == null) {
        if (botoes == ' + ' || botoes == ' * ' || botoes == ' / ' || botoes == ' - ' && primeiroNumero != '1') {
            inputDosCalculos.value += botoes;
            tipoDeCalculor = botoes;
            multiplicaVazio = 1;
        }  else {
            inputDosCalculos.value += botoes;
            primeiroNumero += botoes;
            primeiroNumero.toString()
        }
        console.log(primeiroNumero.toString())
    } else if (multiplicaVazio == 1) {
        if (botoes == ' + ' || botoes == ' * ' || botoes == ' / ' || botoes == ' - ') {

        } else {
            inputDosCalculos.value += botoes;
            segundoNumero += botoes;
        }
    } else if (botoes == 'resultador' && primeiroNumero != 0 && segundoNumero != 0) {
        switch (tipoDeCalculor) {
            case ' + ':
                inputDosCalculos.value = primeiroNumero + segundoNumero;
                break;
            case ' - ':
                inputDosCalculos.value = primeiroNumero - segundoNumero;
                break;
            case ' * ':
                inputDosCalculos.value = primeiroNumero * segundoNumero;
                break;
            case ' / ':
                inputDosCalculos.value = primeiroNumero / segundoNumero;
                break;
        }
    } */
}


/*
numero1.addEventListener('click', function () {
    if (multiplicaVazio == null) {
        primeiroNumero += numero1.value
        console.log(primeiroNumero)
    } else {
        segundoNumero += numero1.value
        console.log(segundoNumero)
    };

    inputDosCalculos.value += numero1.value;


});

let numero2 = document.querySelector('#numero2');

numero2.addEventListener('click', function () {
    if (multiplicaVazio == null) {
        primeiroNumero += numero2.value;
        console.log(primeiroNumero)
    } if (nat == 1){

    }
    
    else {
        segundoNumero += numero2.value;
        console.log(segundoNumero)
    };

    inputDosCalculos.value += (numero2.value);
});

let soma = document.querySelector('#soma');

soma.addEventListener('click', function () {
    multiplicaVazio = '1'
    calculor = 'soma'
    inputDosCalculos.value += ' + ';
})

let deleter = document.querySelector('#deleter');

deleter.addEventListener('click', function () {
    inputDosCalculos.value 
})

let reset = document.querySelector('#reset');

reset.addEventListener('click', function () {
    inputDosCalculos.value = ' '
    primeiroNumero = 0
    segundoNumero = 0
})

let resultador = document.querySelector('#botaoDoIgual');

resultador.addEventListener('click', function () {
    let restante 
    if (calculor == 'soma') {
        restante = primeiroNumero;
        restante = parseInt(restante) + parseInt(segundoNumero);
        inputDosCalculos.value = restante;
        primeiroNumero = reset;
        segundoNumero = 0;
        nat = 1
    }
})

*/