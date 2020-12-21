const mongoose =require('mongoose')

mongoose.connect('mongodb+srv://root:casa@cluster0.mjkgl.mongodb.net/movies_adm?retryWrites=true&w=majority', function(err){
    if(err){
        console.log("algo salio mal al establecer la conexión")}
    else{
        console.log("conexion satisfactoria.")
    }
});




console.log("hola desde ")

