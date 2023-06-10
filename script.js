async function buscaEndereco(cep) {
    //inserir mebsagem de erro
    var mensagemErro = document.getElementById('erro');
    mensagemErro.innerHTML = "";

    try {
        //API do via CEP para consulta de CEP em formulário
        var consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json`);
        var consultaCEPConvertida = await consultaCEP.json();
        if (consultaCEPConvertida.erro) {
            throw Error('CEP não existe!');
        }
        //funcao de preenchimento automático dos campos de endereço
        var cidade = document.getElementById('cidade')
        var logradouro = document.getElementById('endereco');
        var estado = document.getElementById('estado')
        var bairro = document.getElementById('bairro')
        //consultas para prenchimento de campo de acordo com lista na API
        cidade.value = consultaCEPConvertida.localidade;
        logradouro.value = consultaCEPConvertida.logradouro;
        estado.value = consultaCEPConvertida.uf;
        bairro.value = consultaCEPConvertida.bairro;
        //

        console.log(consultaCEPConvertida);
        return consultaCEPConvertida;
    } catch (erro) {
        mensagemErro.innerHTML = `<p> CEP Inválido. Tente novamente</p>`
        console.log(erro)
    }
}

//puxa campo de cep dentro do html
var cep = document.getElementById('cep');
//sensor para após escrever o CEP no campo do form, realizar a leitura do CEP dentro da API
cep.addEventListener("focusout", () => buscaEndereco(cep.value));

//preenchimento automático dos campos de endereço