//script
const fs = require('fs');
const path = require('path');

// Função para verificar se um arquivo é uma imagem com base em sua extensão
const isImage = (file) => {
  const ext = path.extname(file).toLowerCase();
  return ['.jpg', '.jpeg', '.png', '.gif', '.bmp', '.tiff', '.webp'].includes(ext);
};

// Função para ler a pasta e listar as imagens
const listImages = (directoryPath) => {
  fs.readdir(directoryPath, (err, files) => {
    if (err) {
      return console.error('Erro ao ler a pasta:', err);
    }

    const imageFiles = files.filter(file => isImage(file));
    const numberOfImages = imageFiles.length;

    console.log(`Número de imagens: ${numberOfImages}`);
    imageFiles.forEach((file, index) => {
      console.log(`ID: ${index + 1}, Nome: ${file}`);
    });
  });
};

// Substitua 'seu/caminho/para/a/pasta' pelo caminho da pasta que você deseja ler
const directoryPath = '.././Assets/img/';
listImages(directoryPath);
