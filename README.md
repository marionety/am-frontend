# Ambulances Manager Frontend

Aplicación UI realizada con el framework VueJS, para la interacción con la API ofrecida para la administración de ambulancias y grupos que lo solicitan.

## Detalle
### Flujo de la aplicación
Un flujo correcto sería:
1. Crear una serie de ambulancias.
2. Crear una serie de traslados (grupos).
3. Localizar los grupos creados.
4. Finalizar los traslados mediante las transferencias.

## Pasos para ejecutar el servicio UI
### Ejecución del servicio en entorno sin docker.
1. Ejecutar el siguiente comando para instalar dependencias del proyecto.
> npm install
2. Para ejecutarse para entorno de dev.
> npm run serve
3. Para ejecutarse para entorno de prod.
> npm run build

Una vez levantado el servicio, se puede acceder en [http://localhost:8080](http://localhost:8080)

### Ejecución del servicio como contenedor de docker.
La aplicación está preparada para correr en un contenedor docker.

Por sencillez y testing, se facilita un fichero .env donde se encuentra la URL que apunta al backend, por defecto _8085_.

Para crear la imagen, ejecutar la siguiente instrucción en la raíz del proyecto:
> docker build -t mrc/am-frontend . 

La aplicación extá expuesta por defecto en el puerto _80_, y lanzando la siguiente instrucción:
> docker run -p 80:80 mrc/am-frontend

tendríamos nuestro contenedor ejecutándose, para confirmarlo
> docker ps
