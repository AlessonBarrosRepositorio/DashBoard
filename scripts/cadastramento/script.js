//script
document.addEventListener('DOMContentLoaded', (event) => {
    const images = [
        '../Assets/img/img01.jpg',  // substitua pelos caminhos das suas imagens
        '../Assets/img/img02.jpg',
        '../Assets/img/img03.jpg'
    ];
    
    let currentIndex = 0;
    
    const btn = document.getElementById('btn');
    const imageContainer = document.getElementById('imageContainer');
    
    btn.addEventListener('click', () => {
        // Remove a imagem atual se houver

        console.log("esntrei")
        while (imageContainer.firstChild) {
            imageContainer.removeChild(imageContainer.firstChild);
        }
        
        // Adiciona a próxima imagem
        const img = document.createElement('img');
        img.src = images[currentIndex];
        imageContainer.appendChild(img);
        
        // Atualiza o índice
        currentIndex = (currentIndex + 1) % images.length;
    });
});