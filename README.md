# Prueba Oscar Larrotta

A continuación describiré la manera en que realice el proyecto, espero les guste

## Arquitectura

Inicialmente realice el setup del proyecto, instalando las dependencias y realizando los scripts mostrados en package.json, el proyecto tiene 3 carpetas principales: build, data y source; en donde build están alojados todos los documentos renderizados de css y html y js.

La carpeta data almacena el archivo que alimenta la información dinámica de la página y source almacena todos los pug y scss de cada uno de los componentes ademas del archivo principal de javascript donde se ejecuta toda la interactividad de votos.

### Gulp

Por medio de gulpfile.js, se realiza la compilación y watch de pug, scss y js, además se determina el data.json como fuente de contenido de la página.

### Templates

Pug: utilicé pug para generar el código HTML, separando cada uno de los componentes como hero, card, footer entre otros. Por otra parte se realizaron las diferentes páginas de los superhéroes, siendo ironman.pug la página principal(descrita en la prueba), aunque también se puede seleccionar cualquier otro superhéroe solo agregando a la url el nombre del mismo, ejemplo : "http://127.0.0.1:8080/superman" mostrado en el localhoost al momento de descargarlo

### Pre-procesador

SASS: utilicé este preprocesador para el manejo de estilos en el proyecto, debido a que ahorra código y se puede ordenar de mejor manera, de la misma manera que pug este tiene cada uno de los estilos por componente dentro de la carpeta sass, siendo styles.scss el archivo principal que llama a los otros.

### Datos

archivos JSON: para la alimentación de datos utilice el archivo data.json alojado en la carpeta build/data, este archivo contiene la información dinámica como textos, imágenes, backgrounds entre otros del proyecto.

## framework css

En el proyecto utilice únicamente css sin ningún framework como bootstrap, debido a que no se me hizo necesario llamar un framework tan grande para utilizarlo tan poco, por lo que decidí utilizar flexbox para la parte del grid Card.

##### Adquisicion de votos

Para la adquisición de votos utilicé javaScript puro, en donde por medio de eventos click de los botones el programa suma likes o dislikes, con esta información y los votos totales el código genera el porcentaje de cada uno de ellos, siendo este dato el modificador del style: width de la barra de votos, además estos votos los almacena en el localstorage con el fin de que si se recarga la página el guarde estos datos y los siga mostrando, los votos por cada superhéroe son ilimitados y puede un mismo usuario votar con like y/o dislike.

Cada uno de los superhéroes tiene la interacción de los votos y guardan estos en localstorage visualizandolos así no se abra la página del superhéroe.
