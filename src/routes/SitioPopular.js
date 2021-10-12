const express = require('express');
const router = express.Router();
const { query} = require('../Databases/Db');
const mysqlconecion = require('../Databases/Db');

router.get('/popular',(req,res)=>{
      const sql = 'SELECT * from sitios WHERE rate > 3';
    mysqlconecion.query(sql,(err,rows,fields)=>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    })
})
module.exports = router;