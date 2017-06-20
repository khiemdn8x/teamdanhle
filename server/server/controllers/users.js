const User = require('../models').User;

module.exports = {
    getAll(req,res){
        User.findAll()
        .then(users=>res.status(200).json(users))
        .catch(error=>res.status(500).json(error));
    },

    show(req,res){
        User.findById(req.params.id)
        .then(user=>res.status(200).json(user))
        .catch(error=>res.status(500).json(error))
    },

    create(req,res){
        User.create({
            username:req.body.username,
            password:req.body.password,
            status:true,
        })
        .then(user=>res.status(201).json(user))
        .catch(error=>res.status(500).json(error));
    },

    update(req,res){
        User.update({
            username:req.body.username,
            password:req.body.password,
            status:req.body.status
        },{
            where:{
                id:req.params.id,
            }
        })
        .then(user=>res.status(200).json(user))
        .catch(error=>res.status(400).json(error))
    },

    delete(req,res){
        User.destroy({
            where:{
                id:req.params.id,
            }
        })
        .then(user=>res.status(200).json(user))
        .catch(error=>{res.status(500).json(error)})
        
    },
}