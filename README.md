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

Explicación
jQuery y Bootstrap:
jQuery: Se incluye la biblioteca jQuery mediante <script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>. jQuery es una biblioteca de JavaScript que simplifica la manipulación del DOM y la realización de solicitudes Ajax.
Bootstrap: Se enlaza con Bootstrap para utilizar su sistema de estilos y componentes.

Cuerpo de la página:
"<body class="bg-light">" :  Se establece una clase de fondo ligero para el cuerpo de la página.

Contenedor principal e inicio de sesión:
Se utiliza Bootstrap para organizar la estructura de la página con un contenedor y una fila centrada "div class="container mt-5" y div class="row justify-content-center".
Se crea una tarjeta de Bootstrap "div class="card" " que contiene el formulario de inicio de sesión.

Formulario de inicio de sesión:
Se utiliza un formulario "<form>" con dos campos de entrada "input" para el nombre de usuario y la contraseña.
Un botón "button" que, al hacer clic, activa la función "handleLogin()."

JavaScript en línea:
Se incluye un script JavaScript que define la función "handleLogin()". Esta función realiza una solicitud Ajax al servidor para autenticar al usuario. Si la autenticación es exitosa, almacena algunos datos en el almacenamiento local y redirige a otra página.

Se utiliza el signo "$" de jQuery para seleccionar elementos del DOM y realizar operaciones sobre ellos.

Se manejan diferentes casos de respuesta del servidor, mostrando mensajes de error o redirigiendo al usuario según sea necesario.

## Página de incidentes
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





