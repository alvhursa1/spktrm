//Archivo para ejecutar en la terminal y obtener las dimensiones de las imágenes en un directorio y guardarlas en un archivo JSON con la estructura necesaria para el componente Gallery de react-image-gallery (node getDimensiones.js) comando para ejecutar en la terminal. instalar antes npm install image-size


const fs = require('fs');
const path = require('path');
const sizeOf = require('image-size');
const { title } = require('process');

// Ajusta esta ruta a la ubicación correcta de tus imágenes
const directorio = path.join(__dirname, 'public', 'images', 'carrusel-home');

fs.readdir(directorio, (err, archivos) => {
  if (err) {
    console.error('Error al leer el directorio:', err);
    return;
  }

  const imagenes = archivos
    .filter(archivo => /\.(jpg|jpeg|png|gif|webp)$/i.test(archivo))
    .map((archivo, index) => {
      const rutaCompleta = path.join(directorio, archivo);
      let dimensiones;
      try {
        dimensiones = sizeOf(rutaCompleta);
      } catch (error) {
        console.error(`Error al obtener dimensiones de ${archivo}:`, error);
        return null;
      }
      return {
        id: index + 1,
      url: `/images/carrusel-home/${archivo}`,
      title: `Imagen ${index + 1}`,
        link: `#`,
        width: dimensiones.width,
        height: dimensiones.height
      };
    })
    .filter(Boolean); // Elimina cualquier entrada nula

  console.log(JSON.stringify(imagenes, null, 2));

  // Guardar en un archivo
  fs.writeFile('imagenes.json', JSON.stringify(imagenes, null, 2), (err) => {
    if (err) {
      console.error('Error al escribir el archivo:', err);
    } else {
      console.log('Archivo imagenes.json creado con éxito');
    }
  });
});