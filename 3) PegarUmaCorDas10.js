function getRandomColorFrom10() {
    const randomColors = getRandomColors();
    const randomIndex = Math.floor(Math.random() * randomColors.length);
    return randomColors[randomIndex];
}
