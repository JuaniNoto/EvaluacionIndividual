const db = require ('../database/models');

let mainController = {
    index: function(req,res){

        /*db.sequelize.query('SELECT * FROM notes')
        .then(function(notas){
            res.render('index',{notas:notas[0]});
        })*/
        db.Notas.findAll()
        .then(function(notas){
            return res.render('index',{notas:notas});
        })

    },
    edit: function (req,res){
        db.Notas.findByPk(req.params.id)
        .then(function(nota){
            return res.render('detail',{nota:nota});
        })
        /*db.sequelize.query('SELECT * FROM notes WHERE id = '+ req.params.id)
        .then(function(nota){
            return res.render('detail',{nota:nota[0][0]});
        })*/

    },
    create: function (req,res){

        db.Notas.create({
            title: req.body.title,
            message:req.body.message
        });

        res.redirect('/');

    },
    delete: function(req,res){
        db.Notas.destroy({
            where:{
                id:req.params.id
            }
        })
        res.redirect('/');

    },
    update: function(req,res){

        db.Notas.update({
            title:req.body.title,
            message:req.body.message
        },{
            where:{
                id:req.params.id
            }
        });
        
        return res.redirect('/');
    }
}

module.exports = mainController;