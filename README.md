<h1 align="center"> Grúas de Puebla </h1>

Esta página está destinada a la gestión de Gruas para la Secretaría de Movilidad y transporte, en la que se busca una eficiencia en cuanto a  la asignación de corralones a los incidentes.

#Requerimientos antes de ejecutar el proyecto:
Se recomienda seguir los pasos y descargar los archivos del siguiente repositorio, en los que se muestra detalladamente cómo hacerlo.
https://github.com/Davix00/api-gruas
## Comandos a ejecutar
Primero debemos de instalar las dependencias necesarias con:

    $ npm install
Para ejecutar el proyecto

    

## Página principal
A continuación se presenta la página principal, en la que se visualiza el título y una breve introducción de lo que consistiría la página en general, además de un apartado en el que se inicia sesión.
![image](https://github.com/Perla1802/GruassPueblaF/assets/59744172/50f96e86-cfd4-4c73-b3e9-961d02b7f805)

![Index](https://github.com/Perla1802/GruassPueblaF/assets/59744172/a0120bf0-ab9d-40d6-9507-0a9bc1f59674)

## Inicio de sesión
Como su nombre lo dice, en esta parte el usuario puede loguarse ingresando su correo y una contraseña
![image](https://github.com/Perla1802/GruassPueblaF/assets/59744172/a6332e2b-e368-4457-9be7-692e8763eea4)

Código
![login](https://github.com/Perla1802/GruassPueblaF/assets/59744172/13a99e96-eb20-4a0a-9087-ec216363af00)

## Explicación
jQuery y Bootstrap:
jQuery: Se incluye la biblioteca jQuery mediante <script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>. 
jQuery es una biblioteca de JavaScript que simplifica la manipulación del DOM y la realización de solicitudes Ajax.
Bootstrap: Se enlaza con Bootstrap para utilizar su sistema de estilos y componentes.

Encabezado (head): Se establecen metadatos como la codificación de caracteres y las configuraciones de visualización. Se incluyen enlaces a las bibliotecas jQuery y Bootstrap.

Cuerpo (body):
Se utiliza Bootstrap para organizar la página y proporcionar estilos.
El contenido principal es un formulario de inicio de sesión dentro de una tarjeta.

Formulario de Inicio de Sesión:
Dos campos de entrada para el nombre de usuario y la contraseña.
Un botón que, al hacer clic, activa una función de inicio de sesión en JavaScript.

JavaScript:
Se utiliza jQuery para seleccionar elementos del DOM y realizar operaciones.
La función handleLogin() realiza una solicitud al servidor para autenticar al usuario.
Maneja diferentes respuestas del servidor, mostrando mensajes de error o redirigiendo al usuario.

# Página de incidentes
Esta página se visualiza una vez que el usuario se halla logueado, en la cual se muestra un sliderbar que puede colapasrse en pantallas más pequeñas, contiene 3 secciones: Inicio, ajustes y salir.
En la parte derecha podemos ver la visualización de los datos en los que se consumen las Apis através de un DataTable, en la que se pueden hacer búsquedas, conteo de registros y su edición.
Además. cuenta con un botón en el que se puede agregar un nuevo registro.
![image](https://github.com/Perla1802/GruassPueblaF/assets/59744172/7c202e48-39db-48a1-ab2b-bb84cd92dd4f)
![image](https://github.com/Perla1802/GruassPueblaF/assets/59744172/70bee1bf-6d35-4ca9-8aa2-b9d6fccd955e)

Código
![Registro](https://github.com/Perla1802/GruassPueblaF/assets/59744172/f64b9ee9-ab7e-4fb2-8b20-fb87db27a333)

Estilos
![RegistroC](https://github.com/Perla1802/GruassPueblaF/assets/59744172/138956cc-7bdc-4255-bd49-84c2cecb4b12)

## Agregar Incidente
Esta página se muestra dando clic en "Agregar incidente" de la página antes mostrada.
Se nos piden varios campos, en primera, la dirección en la que pasó el accidente y después nos arroja la ubicación en el mapa.
De manera automática se llenan los campos que corresponde al corralón que se halla asignado.
Para agregar uno o más coches, basta con hacer clic en "Agregar coche implicado" y se llenan los siguientes campos:
- Marca
- Modelo
- Color
- Matricula
- Estado
- Tipo de choche
Al final guardamos los campos y se podrán visualizar en nuestra tabla, si se desea cancelar se da clic en "Cancelar"

![image](https://github.com/Perla1802/GruassPueblaF/assets/59744172/bd7aa5b1-339a-48c9-8d81-d1e012845e8f)
![image](https://github.com/Perla1802/GruassPueblaF/assets/59744172/18948c81-14ac-4c2d-9d23-925a9a7efdad)

Código
![Formulario](https://github.com/Perla1802/GruassPueblaF/assets/59744172/16adea9d-1060-4093-b6a0-1fe382c7a465)
Estilos
![FormularioC](https://github.com/Perla1802/GruassPueblaF/assets/59744172/cae7691a-f102-4dba-93dc-76634caa4de2)

# Explicación
Este código representa una página web para la gestión de incidentes. El sistema utiliza tecnologías como Bootstrap, jQuery y DataTables para crear una interfaz interactiva y tabular de incidentes, permitiendo agregar, editar y visualizar registros de incidentes.

Características Principales:

- Librerías Externas:

jQuery: Utilizado para simplificar la manipulación del DOM y realizar solicitudes Ajax.
Bootstrap: Proporciona estilos y componentes para el diseño de la página.
Boxicons CSS: Librería de iconos utilizada para los íconos en la barra de navegación.
DataTables: Facilita la creación de tablas interactivas con capacidades de búsqueda, filtrado y paginación.

- Barra de Navegación:
Contiene un menú desplegable con opciones de "Inicio," "Ajustes," y "Salir."
Interactividad lograda mediante jQuery para mostrar/ocultar el menú en pantallas pequeñas.
Contenido Principal:

- Visualización de incidentes en una tabla DataTable.
Botón para agregar nuevos incidentes, enlazando a una página de formulario.
Modal de edición para modificar registros existentes.

-Modal de Edición:
Permite la edición de folio y dirección de un incidente.
Realiza solicitudes Ajax para actualizar los datos en el servidor.

- Funcionalidad Ajax:
Se utilizan solicitudes Ajax para obtener datos de incidentes y actualizar registros.
Manejo de errores y mensajes de éxito en la consola.

- Estilos Adicionales:
Utiliza un archivo de estilos personalizado (styleSliderbar.css) para personalizar la apariencia.

- Responsividad:
Diseño responsive para adaptarse a diferentes tamaños de pantalla.



