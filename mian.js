<script>
function changeBackground() {
    // Get a random color
    const randomColor = getRandomColor();

    // Set the body background color
    document.body.style.backgroundColor = randomColor;
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
</script>