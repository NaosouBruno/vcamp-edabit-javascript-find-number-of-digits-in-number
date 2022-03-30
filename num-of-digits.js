function num_of_digits(num) {
  //primeiramente temos que pegar o valor de num utilzando o Math.abs que nos retornara o valor positivo de num
  // porém para saber a quantidade de caracteres temos que transformar esse valor em uma string 
  // e só depois desses passos então o length irá funcionar
  return Math.abs(num).toString().length
}
