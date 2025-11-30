
-1. Abrir VS Code
0. Abrir carpeta (ctrl + o)
    a. Puede ser carpeta ya existente
    b. Crear carpeta nueva

=========================
NOTA: 
Hola, si clonaste este repositorio de GitHub, por favor ejecuta el 
siguiente comando npm install. 
Esto descargará todas las dependencias necesarias de manera automatica.
Y brinca hasta el paso numero 3. :D

Si estas haciendo los pasos uno por uno no hay necesidad de que
hagas caso a esta nota. Sigue con los pasos como ibas hasta ahora.
=========================

1. Abrir terminal (ctrl + j)
    1.1 npm init -y
    1.2 npm install express nodemon
2. Abrir package.json
    1.1 Crear comando dev -> nodemon index.js
    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "dev": "nodemon index.js"
    }
3. Crear index.js
    3.1 Abrir index.js
    3.2 Levantar el servidor
4. Poner a correr el servidor
    4.1 Abrir la terminal (ctrl + j)
    4.2 Ejecutar npm run dev
    4.3 Abrir navegador
        4.3.1 Abrir `localhost:3000` -> '/'
    4.4 Definir ruta para '/'
        4.4.1 console.log(req)
    4.5 Definir ruta para '/saludo'
        4.5.1 Enviar JSON
5. Metodos POST
    5.1 Definir ruta POST /user
    5.2 Instalar Thunder client
    5.3 Hacer peticion POST /user
6. Usar BODY de la REQUEST
    6.1 Habilitar parseo con app.use(express.json)
    6.2 Recibir cuerpo de peticion en RECURSO /user para
    construir un nuevo usuario
7. Metodos PUT y PATCH
    7.1 Definir recurso para actualizar usuarios
    7.2 Utilizar query params
8. Metodo DELETE
    8.1 Utilizar query params para reconocer usuario a eliminar
    8.2 Eliminar usuario

Notas:
    Existen herramientas que nos permiten generar peticiones
    con otros metodos ya que el navegador solo sabe hacer GET.
    - POSTMAN
    - INSOMNIA
    - YAAK
    - APIDOG
    - THUNDER CLIENT VSCODE -- Este vamos a utilizar
