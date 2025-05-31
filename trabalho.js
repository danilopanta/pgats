function geradorDeTagsDeIdentificacao(nome) {
    return nome.toUpperCase();
}

function verificarSePodeSerAdotado(idade, porte) {
    return idade === 1 && porte === 'M';
}

function calcularConsumoDeRacao(nome, idade, peso) {
    return peso * 300;
}

function decidirTipoDeAtividadePorPorte(porte) {
    if (porte === 'pequeno') {
        return 'brincar dentro de casa';
    }
    return '';
}

async function buscarDadoAsync() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Pipoca");
      }, 100);
    });
  }

export {
    geradorDeTagsDeIdentificacao,
    verificarSePodeSerAdotado,
    calcularConsumoDeRacao,
    decidirTipoDeAtividadePorPorte,
    buscarDadoAsync
};