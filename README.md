# Prueba Oscar Larrotta

A continuación describiré la manera en que realice el proyecto, espero les guste

## Arquitectura

inicialmente realice el setup del proyecto descrito en el archivo gulpfile.js, en donde se realiza la compilación y watch de pug, scss y js, además se determina el data.json como fuente de contenido de la página.

### Gulp

Por medio de gulp

### Templates

Pug: utilicé pug para generar el código HTML, separando cada uno de los componentes como hero, card, footer entre otros. Por otra parte se realizaron las diferentes páginas de los superhéroes, siendo ironman.pug la página principal(descrita en la prueba), aunque también se puede seleccionar cualquier otro superhéroe solo agregando a la url el nombre del mismo, ejemplo : "http://127.0.0.1:8080/superman" mostrado en el localhoost al momento de descargarlo

### Pre-procesador

SASS: utilicé este preprocesador para el manejo de estilos en el proyecto, debido a que ahorra código y se puede ordenar de mejor manera, de la misma manera que pug este tiene cada uno de los estilos por componente dentro de la carpeta sass, siendo styles.scss el archivo principal que llama a los otros.

### Datos

archivos JSON: para la alimentación de datos utilice el archivo data.json alojado en la carpeta build/data, este archivo contiene la información dinámica como textos, imágenes, backgrounds entre otros del proyecto.

## framework css

En el proyecto utilice únicamente css sin ningún framework como bootstrap, debido a que no se me hizo necesario llamar un framework tan grande para utilizarlo tan poco, por lo que decidí utilizar flexbox para la parte del grid Card.
