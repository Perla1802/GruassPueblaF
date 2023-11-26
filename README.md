<h1 align="center"> Grúas de Puebla </h1>

Esta página está destinada a la gestión de Gruas para la Secretaría de Movilidad y transporte, en la que se busca una eficiencia en cuanto a  la asignación de corralones a los incidentes.

# Requerimientos antes de ejecutar el proyecto:
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
![image](https://github.com/Perla1802/GruassPueblaF/assets/59744172/c297f02b-ce62-45d2-8501-48d55b7d87fb)


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
Esta página podemos ver la visualización de los datos en los que se consumen las Apis através de un DataTable, en la que se pueden hacer búsquedas, conteo de registros y su edición.
Además. cuenta con un botón en el que se puede agregar un nuevo registro.
![image](https://github.com/Perla1802/GruassPueblaF/assets/59744172/ed7d2780-fd07-470e-9386-85a4602b218f)
![image](https://github.com/Perla1802/GruassPueblaF/assets/59744172/be24cf34-6062-489f-a904-08103a375c37)


Código

![incidente](https://github.com/Perla1802/GruassPueblaF/assets/59744172/cd14b59f-7dcf-4d4b-85f5-7b99595a87a2)


Estilos
![RegistroC](https://github.com/Perla1802/GruassPueblaF/assets/59744172/e1ec7037-7181-47eb-bb0a-f043ab2ef962)


## Explicación
Este código representa una página web para la gestión de incidentes. El sistema utiliza tecnologías como Bootstrap, jQuery y DataTables para crear una interfaz interactiva y tabular de incidentes, permitiendo agregar, editar y visualizar registros de incidentes.

Características Principales:

- Librerías Externas:

jQuery: Utilizado para simplificar la manipulación del DOM y realizar solicitudes Ajax.
Bootstrap: Proporciona estilos y componentes para el diseño de la página.
Boxicons CSS: Librería de iconos utilizada para los íconos en la barra de navegación.
DataTables: Facilita la creación de tablas interactivas con capacidades de búsqueda, filtrado y paginación.



Contenido Principal:

- Visualización de incidentes en una tabla DataTable.
Botón para agregar nuevos incidentes, enlazando a una página de formulario.
Modal de edición para modificar registros existentes.

- Modal de Edición:
Permite la edición de folio y dirección de un incidente.
Realiza solicitudes Ajax para actualizar los datos en el servidor.

- Funcionalidad Ajax:
Se utilizan solicitudes Ajax para obtener datos de incidentes y actualizar registros.
Manejo de errores y mensajes de éxito en la consola.

- Estilos Adicionales:
Utiliza un archivo de estilos personalizado (styleSliderbar.css) para personalizar la apariencia.

- Responsividad:
Diseño responsive para adaptarse a diferentes tamaños de pantalla.


## Agregar Incidente
Esta página se muestra dando clic en "Agregar incidente" de la página antes mostrada.
Se nos piden varios campos, en primera, la dirección en la que pasó el accidente y después nos arroja la ubicación en el mapa, así como el corralón más cercano y a cuantos minutos se encuentra.
De manera automática se llenan los campos que corresponde al corralón que se halla asignado.
Para agregar un coche llenamos los siguientes campos:
- Marca
- Modelo
- Color
- Matricula
- Estado
- Tipo de choche

Al final guardamos los campos y se podrán visualizar en nuestra tabla, si se desea cancelar se da clic en "Cancelar"

![image](https://github.com/Perla1802/GruassPueblaF/assets/59744172/4a7a7660-24c9-4954-860a-4007dcbb55b7)
![image](https://github.com/Perla1802/GruassPueblaF/assets/59744172/549241f9-83d9-4f07-886a-37b870f865de)


Código
![Formulario](https://github.com/Perla1802/GruassPueblaF/assets/59744172/2beeec00-57a9-481f-9d54-eaaf71d0b4df)
Estilos
![FormularioC](https://github.com/Perla1802/GruassPueblaF/assets/59744172/dd00a1bc-926a-42b0-9992-e3f909e37576)


## Descripción:
Este código HTML representa una página de formulario para registrar incidentes de tráfico. Utiliza tecnologías como Bootstrap, jQuery y Google Maps API para proporcionar una interfaz interactiva para el usuario.

Características Principales:

1. Librerías Externas:

- jQuery: Utilizado para simplificar la manipulación del DOM y realizar solicitudes Ajax.
- Bootstrap: Proporciona estilos y componentes para el diseño de la página.
- Google Maps API: Integrado para mostrar un mapa interactivo y proporcionar funcionalidades relacionadas con la ubicación.

2. Estilos Personalizados:

Se utiliza un archivo de estilos personalizado (styleFormulario.css) para ajustar la apariencia del formulario.

3. Campos del Formulario:
- Lugar del incidente con un botón para buscar corralones cercanos.
- Mapa interactivo que muestra la ubicación del incidente.
- Información del corralón asignado (dirección y teléfono).


4. Funcionalidades Adicionales:
Se proporciona una lista desplegable para seleccionar el tipo de coche (grúa, autobús, coche).

5. Botones de Acción:
- Botón "Cancelar" para regresar a la página de incidentes.
- Botón "Guardar" para almacenar la información del incidente.

6. Archivos necesarios
El archivo main.js contiene funciones relacionadas con la funcionalidad del mapa. Asegurarse de tener acceso a este archivo y que esté correctamente configurado.
