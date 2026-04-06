function coletarDados() {
  let nome = document.getElementById("nome").value;
  let preco = document.getElementById("preco").value;
  let estoque = document.getElementById("estoque").value;

  // Validação
  if (!nome || !preco || !estoque || isNaN(preco) || isNaN(estoque)) {
    alert("Preencha todos os campos corretamente!");
    return;
  }

  // Criar uma lista e um conjunto
  let list = [nome, preco, estoque];
  let conj = new Set(list);

  // Criar um objeto para armazenar os dados
  let dados = {
    produto: list,
    conjunto: Array.from(conj)
  };

  let resultado = document.getElementById("📄Produtos cadastrados");

  resultado.innerHTML = `
    <h3>Dados digitados:</h3>
    <p><strong>Nome Produto:</strong> ${dados.produto[0]}</p>
    <p><strong>Preço:</strong> ${dados.produto[1]}</p>
    <p><strong>Estoque:</strong> ${dados.produto[2]}</p>
  `;
}