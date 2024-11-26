function getRandomColors() {
    const vetorCores = getColors();

    let randomColors = [];
    while (randomColors.length < 10) {
        const randomIndex = Math.floor(Math.random() * vetorCores.length);
        const color = vetorCores[randomIndex];
        if (!randomColors.includes(color)) {
            randomColors.push(color);
        }
    }

    return randomColors;
}
