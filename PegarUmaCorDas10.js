function getRandomColorFrom10() {
    const randomColors = getRandomColors(); // Chama a função getRandomColors para obter as 10 cores aleatórias
    const randomIndex = Math.floor(Math.random() * randomColors.length); // Seleciona um índice aleatório entre as 10 cores
    return randomColors[randomIndex]; // Retorna a cor aleatória
}
