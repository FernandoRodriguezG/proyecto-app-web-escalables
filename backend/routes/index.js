const express = require('express');
const router = express.Router();
const ObjectId = require('mongoose').Types.ObjectId;    

const { Serie } = require('../models/serie');


// Get All Employees
router.get('/api/series', (req, res) => {
    Serie.find({}, (err, data) => {
        if(!err) {
            res.send(data);
        } else {
            console.log(err);
        }
    });
});

// Get Single Employee (First Way)

router.get('/api/serie/:id', (req, res) => {
    Serie.findById(req.params.id, (err, data) => {
        if(!err) {
            res.send(data);
        } else {
           console.log(err);
        }
    });
});


// Save Employee
router.post('/api/serie/add', (req, res) => {
    const emp = new Serie({
        nombre: req.body.nombre,
        plataforma: req.body.plataforma,
        calificacion: req.body.calificacion,
        year: req.body.year,
    });
    emp.save((err, data) => {
        if(!err) {
            // res.send(data);
            res.status(200).json({code: 200, message: 'Serie añadido exitosamente', addSerie: data})
        } else {
           console.log(err);
        }
    });
});


// Update Employee

router.put('/api/serie/update/:id', (req, res) => {


    const ser = {
        nombre: req.body.nombre,
        plataforma: req.body.plataforma,
        calificacion: req.body.calificacion,
        year: req.body.year,
    };
    Serie.findByIdAndUpdate(req.params.id, { $set: ser }, { new: true }, (err, data) => {
        if(!err) {
            res.status(200).json({code: 200, message: 'Serie Updated Successfully', updateSerie: data})
        } else {
            console.log(err);
        }
    });
});


// Delete Employee
router.delete('/api/serie/:id', (req, res) => {

    Serie.findByIdAndRemove(req.params.id, (err, data) => {
        if(!err) {
            // res.send(data);
            res.status(200).json({code: 200, message: 'Serie deleted', deleteSerue: data})
        } else {
            console.log(err);
        }
    });
});


module.exports = router;