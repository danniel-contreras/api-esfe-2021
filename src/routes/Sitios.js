const express = require('express');
const router = express.Router();
const { query} = require('../Databases/Db');
const mysqlconecion = require('../Databases/Db');


//ver

router.get('/sitios',(req,res)=>{
    const sql = 'SELECT * from sitios';
    mysqlconecion.query(sql,(err,rows,fields)=>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    });
})

//guardar 
 router.post('/sitios',(req,res)=>{
    const {Nombre_sitio,Info_sitio,Ubicacion_sitio,Categoria_sitio,rate,Comentario,URL} = req.body;
    const sql = "INSERT INTO sitios(Nombre_sitio,Info_sitio,Ubicacion_sitio,Categoria_sitio,rate,Comentario,URL) VALUES(?,?,?,?,?,?,?)";

    mysqlconecion.query(sql,[Nombre_sitio,Info_sitio,Ubicacion_sitio,Categoria_sitio,rate,Comentario,URL],(err,rows,fields)=>{
        if(!err){
            res.json({Status : "Sitio Guardado"});
        }else{
            console.log(err);
        }
    });
 })

//eliminar
router.get('/sitios/delete/:id',(req,res)=>{
    const {id} = req.params;
    const sql = "DELETE FROM sitios WHERE Id = ?";
    mysqlconecion.query(sql,[id],(err,rows,fields)=>{
        if(!err){
            res.json({Status : "Sitio Eliminado"})
        }
    });
})

router.put('/sitios/:id',(req,res)=>{
 const {Nombre_sitio,Info_sitio,Ubicacion_sitio,Categoria_sitio,rate,Comentario,URL} = req.body;
 const {id} = req.params;
 const sql = "UPDATE sitios SET Nombre_sitio = ?,Info_sitio = ?,Ubicacion_sitio = ?,Categoria_sitio = ?,rate = ?,Comentario = ?,URL = ? WHERE Id = ?";
 mysqlconecion.query(sql[Nombre_sitio,Info_sitio,Ubicacion_sitio,Categoria_sitio,rate,Comentario,URL,id],(err,rows,fields)=>{
    if(!err){
        res.json({Status : "Sitio Actualizado"});
    }else{
        console.log(err);
    }
 });
})

//buscar por id
router.get('/sitios/:id',(req,res)=>{
    const {id} = req.params;
    const sql = 'SELECT * from sitios WHERE Id = ?';
    mysqlconecion.query(sql,[id],(err,rows,fields)=>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    })
})
module.exports = router;