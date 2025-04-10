const frm = document.querySelector("form"); //obtem o form da página
const respNome = document.querySelector("span");
const respLista = document.querySelector("pre");

const pacientes = [] //declara vetor gobal

frm.addEventListener("submit", (e) => {
    e.preventDefault()                  //evitar envio do form
    const nome = frm.inPaciente.value   //obtém o nome do paciente
    pacientes.push(nome)                // coloca o nome do paciente no array 
    let lista = ""                      //string para concatenar pacientes

    //for "tradicional" (inicia em 0, enquanto menor que o tamanho da array...)

    for (let i = 0; i < pacientes.length; i++ ){
        lista += `${i + 1}. ${pacientes[i]}\n`
    }

    respLista.innerText = lista         //exibe a lista de pacientes na página
    frm.inPaciente.value = ""           //limpa conteúdo do campo de formulário
    frm.inPaciente.focus()              //posiciona o cursor no campo
})

//Aqui adicionamos um "ouvinte" para click no botão de urgência

frm.btUrgencia.addEventListener("click", () => {
    //primeiro verifica se o form está ok, no caso paciente is required

    if (!frm.checkValidity()) {
        alert("Informe o nome do paciente a ser atendido em caráter de urgência!")
        frm.inPaciente.focus()          //posiiona o cursor no campo de nome do paciente
        return                          //retorna ao form
    }
    const nome = frm.inPaciente.value   //obtém o nome do paciente
    pacientes.unshift(nome)             //adiciona o paciente no início do array
    let lista = ""                      //string para concatenar pacientes

    //forEach aplicado sobre a array de pacientes

    pacientes.forEach((paciente, i) => (lista += `${i + 1}. ${paciente}\n`))
    respLista.innerText = lista         //exibe a lista de pacientes na página
    frm.inPaciente.value = ""           //limpa o conteúdo do campo de formulário
    frm.inPaciente.focus()              //Posiciona o cursor no campo do nome
})

    //Agora o botão de atendimento
frm.btAtender.addEventListener("click", () => {
    //se o tamanho da array = 0

    if (pacientes.length == 0) {
        alert("Não há pacientes na fila de espera!")
        frm.inPaciente.focus()
        return
    }

    const atender = pacientes.shift()   //remove do inicio da fila (e obtém o nome!)
    respNome.innerText = atender        //exibe o nome do paciente em atendimento
    let lista = ""                      //String para concatenar pacientes
    pacientes.forEach((paciente, i) => (lista += `${i + 1}. ${paciente}\n`))
    respLista.innerText = lista         //atualiza e exibe a lista de espera de pacientes
})

