const express = require('express');
const router = express.Router();
const { query} = require('../Databases/Db');
const mysqlconnection  = require('../Databases/Db');

router.get('/',(req,res)=>{
    res.send("principal");
})
//ingresar datos
router.post('/usuarios',(req,res)=>{
    const{Nombre,Apellido,Email,Clave} = req.body;
    const sql = "INSERT INTO usuarios(Nombre,Apellido,Email,Clave) values(?,?,?,?)";
    mysqlconnection.query(sql,[Nombre,Apellido,Email,Clave],(err,rows,fields)=>{
        if(!err){
            res.json({Status : 'Usuario saved'});
        }
        else{
            console.log(err);
        }
    });
})
//ver datos
router.get('/usuarios',(req,res)=>{
    const sql = "select * from usuarios";
    mysqlconnection.query(sql,(err,rows,fields)=>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }

    });
})
//buscar por id

router.get('/usuarios/:id',(req,res)=>{
    const {id} = req.params;
    const sql = "select * from usuarios where id = ?";
    mysqlconnection.query(sql,[id],(err,rows,fields)=>{
        if (!err) {
            res.json(rows);
        }else{
            console.log(err);
        }
    });

})
//eliminar 
router.get('/usuarios/delete/:id',(req,res)=>{
    const {id} = req.params;
    const sql = "delete from usuarios where id = ?";
    mysqlconnection.query(sql,[id],(err,rows,fields)=>{
        if (!err) {
            res.json({Status : 'usuario deleted'});
        }else{
            console.log(err);
        }
    });

})

//Actuaizar

router.put('/usuarios/:id',(req,res)=>{
    const {Nombre,Apellido,Email,Clave} = req.body;
    const {id} = req.params;

    const sql = 'update usuarios set Nombre = ?,Apellido = ?,Email = ?,Clave = ? where id = ?';

    mysqlconnection.query(sql,[Nombre,Apellido,Email,Clave,id],(err,rows,fields)=>{
        if (!err) {
            res.json({Status : 'Employees Updated'});
        }else{
            console.log(err);
        }
    })
})
module.exports = router;