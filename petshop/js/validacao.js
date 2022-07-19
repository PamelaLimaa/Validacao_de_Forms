const dataNascimento = document.querySelector('#nascimento')

dataNascimento.addEventListener('blur', (evento) => {
    validaDataNascimento(evento.target)
})

 export function valida(input) {
    const tipoDeInput = input.dataset.tipo

    if (validadores[tipoDeInput]) {
        validadores[tipoDeInput](input)
    }

    if(input,validity.valid){
        input.parentElement.classList.remove('input-container--invalido')
    }else{
        input.parentElement.classList.add('input-container--invalido')
    }
}

const mensagensDeErro = {
    nome: {
        valueMissing: 'O campo nome não pode estar vazio'
    },
    email: {
        valueMissing: 'O campo email não pode estar vazio',
        typeMismatch: 'o email digitado não é valido'
    },
    senha: {
        valueMissing: 'o campo senha não pode estar vazio',
        patternMissing: 'A senha deve conter entre 6 a 12 caracteres, deve conter pelo menos uma letra maiúscula, um número e não deve conter símbolos.'
    },
    dataNascimento: {
        valueMissing: 'o campo data nascimento não pode estar vazio',
        customError: ' Voce deve ser maior que 18 para se cadastrar'
    }
}

const validadores = {
    dataNascimento: input => validaDataNascimento(input )
} 

function validaDataNascimento(input){
    const dataRecebida = new Date(input.value)

    let mensagem = ''

    if(!maiorQue18(dataRecebida)) {
        mensagem = 'Você deve ser maior que 18 anos para se cadastrar'
    }

    input.setValueValidity(MessageChanne)
}

function maiorQue18(data){

    const dataAtual = new Date()

    const dataMais18 = new Date(data.getFullYear() + 18, data.getUTCMonth(), data.getUTCDate())

    return dataMais18 <= dataAtual
}