# Aplicación para entrar a la nave Kruger

Esta aplicación tiene dos tipos de usuarios: Administrador y usuario base

Para el manejo de usuarios, se ha creado un fake API con json-server-auth. 
Este provee un backend con endpoints para el registro y autentificación de usuarios.

Para iniciar este fake api ejecutar: npm run start-server


Las rutas o páginas web, están protegidas de acuerdo a los permisos de usuarios. 
Ejemplo usuario normal  no pueden acceder a paneles de administrador.

Para el manejo global del estado de la aplicacion, se utilizó React context API, esta provee información del usuario autentificado .

# Credenciales y usuarios

El fake API cuenta con un usuario administrador con credenciales

correo: admin@admin.com  contraseña:12345

Para el resto de usuarios y recien generados, la applicacion  genera una contraseña.
Esta es la primera palabra del nombre mas su numero de cedula.

Ejemplo el usuario david sebastian con ci 1234567890, su contraseña generada es david1234567890

# Instrucciones para levantar la aplicacion

Ejecutar los siguientes comandos:

npm run install

npm run dev

Desarrollado con  Node v14.15.2.

# Funcionalidad implementada:

1. Como Administrador requiere registrar, editar, listar y eliminar a los empleados.

Criterios de aceptación:
a. Registrar la siguiente información del empleado.
○ Cédula.
○ Nombres.
○ Apellidos.
○ Correo electrónico.
b. Los campos deben contener validaciones de acuerdo al tipo de dato:
○ Todos los campos son requeridos.
○ Cédula válida. (Incluir un valor numérico y único de 10 dígitos)
○ Correo electrónico válido.
○ Nombres y apellidos no deben contener números o caracteres especiales.
c. Al dar de alta un empleado se debe generar un usuario y contraseña para el empleado.

2. Como Empleado requiero ingresar al sistema para visualizar y actualizar mi información.

Criterios de aceptación:
a. Completar la siguiente información:
● Fecha de nacimiento.
● Dirección de domicilio.
● Teléfono móvil.
● Estado de vacunación: Vacunado / No Vacunado.
● Si el empleado está en estado vacunado, se debe pedir la siguiente información
requerida:
○ Tipo de vacuna: Sputnik, AstraZeneca, Pfizer y Jhonson&Jhonson
○ Fecha de vacunación.
○ Número de dosis.

3. Como Administrador se requiere filtrar el listado de los empleados por los siguientes criterios.

Criterios de aceptación:
a. Filtrar por estado de vacunación.
b. Filtrar por tipo de vacuna.
c. Filtrar por rango de fecha de vacunación.


## Pruebas unitarias

Se han ejecutado pruebas unitarias para comprobar la renderización de componentes junto a sus parámetros de entrada.
Para ejecutarlas correr: npm run tests-with-server

### Scripts

Para ejecutar tanto la aplicación como el servidor (Backend) : npm run dev


Para ejecutar solo el fake api (servidor backend) :     npm run  start-server


Para ejecutar solo el front end : npm runstart


Para correr los test : npm run tests-with-server ( esto también ejecuta el backend, asegurarse que no esté ejecutado)



