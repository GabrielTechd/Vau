async function buscarSelicPorData(dataInicial, dataFinal) {
  const baseUrl = process.env.API_SELIC;

  const params = new URLSearchParams({
    formato: 'json',
    dataInicial,
    dataFinal,
  });

  const response = await fetch(`${baseUrl}?${params}`);

  if (!response.ok) {
    throw new Error('Erro ao buscar SELIC por data');
  }

  const dados = await response.json();

  return dados.map(item => ({
    data: item.data,
    valor: Number(item.valor),
  }));
}

module.exports = { buscarSelicPorData };
