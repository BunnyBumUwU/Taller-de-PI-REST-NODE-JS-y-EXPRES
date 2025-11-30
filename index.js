// 1. Importar express
const express = require('express');

// 2. Creamos instancia de la aplicacion (nuestro servidor)
const app = express();
app.use(express.json()); // Middleware para parsear JSON

const PORT = 3000; // Puerto donde escuchara el servidor

// Definimos una ruta para el endpoint raiz
app.get('/', (req, res) => { // req: request, res: response
    res.send("Hola Mundo desde Express!. Este es mi primer servidor web.")
});
 
app.get('/saludo', (req, res) => {
    res.json({ 
        mensaje: "Hola",
        autor: "Oswaldo",
        fecha: new Date()
    });
});

// Mock de datos
const usuarios = [
    { id: 1, nombre: "Juan", edad: 28 },
    { id: 2, nombre: "María", edad: 34 },
    { id: 3, nombre: "Pedro", edad: 45 }
];

app.get('/user', (req, res) => {
    res.json({
        usuarios: usuarios
    })
});

app.post('/user', (req, res) => {
    const cuerpo = req.body;

    const usuario = { 
        id: usuarios.length + 1, 
        nombre: cuerpo.nombre, 
        edad: cuerpo.edad 
    } 

    usuarios.push(usuario);
    
    res.json({
        mensaje: "Usuario agregado exitosamente",
        nuevo_usuario: usuario,
        usuarios_actualizdos: usuarios
    });
});

// PUT /user/1 HTTP/1.1
app.put('/user/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const cuerpo = req.body;
    
    const usuarioIndex = usuarios.findIndex(u => u.id === id);
    if (usuarioIndex === -1) {
        return res.status(404).json({ mensaje: "Usuario no encontrado" });
    }

    usuarios[usuarioIndex].nombre = cuerpo.nombre || usuarios[usuarioIndex].nombre;
    usuarios[usuarioIndex].edad = cuerpo.edad || usuarios[usuarioIndex].edad;
    
    res.json({
        mensaje: "Usuario actualizado exitosamente",
        usuario_actualizado: usuarios[usuarioIndex],
        usuarios_actualizdos: usuarios
    });
});

app.delete('/user/:id', (req, res) => {
    const id = parseInt(req.params.id);
    
    const usuarioIndex = usuarios.findIndex(u => u.id === id);
    if (usuarioIndex === -1) {
        return res.status(404).json({ mensaje: "Usuario no encontrado" });
    }
    
    const usuarioEliminado = usuarios.splice(usuarioIndex, 1);
    
    res.json({
        mensaje: "Usuario eliminado exitosamente",
        usuario_eliminado: usuarioEliminado[0],
        usuarios_actualizdos: usuarios
    });
});

//Middleware para manejo de errores
app.use((err, req, res, next) => {
    console.error(" Error en servidor:", err);

    res.status(500).json({
        mensaje: "Ocurrió un error en el servidor",
        error: err.message
    });
});

// 3. Iniciamos el servidor
app.listen(PORT, () => {
    console.log('Servidor corriendo exitosamente en http://localhost:' + PORT);    
});
