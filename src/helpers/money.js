const formatBRLMoney = (money) => {
  return money.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
}

export {
  formatBRLMoney
}
