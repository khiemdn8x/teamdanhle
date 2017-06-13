const Post = require('../models').Post;

module.exports = {
    getAll(req,res){
        Post.findAll()
        .then(posts=>res.status(200).json(posts))
        .catch(error=>res.status(500).json(error));
    },

    show(req,res){
        Post.findById(req.params.id)
        .then(post=>res.status(200).json(post))
        .catch(error=>res.status(500).json(error))
    },

    create(req,res){
        Post.create({
            title:req.body.title,
            summary:req.body.password,
            content:req.body.content,
            image:req.body.image,
            status:true,
        })
        .then(post=>res.status(201).json(post))
        .catch(error=>res.status(500).json(error));
    },

    update(req,res){
        Post.update({
            title:req.body.title,
            summary:req.body.password,
            content:req.body.content,
            image:req.body.image,
            status:req.body.status,
        },{
            where:{
                id:req.params.id,
            }
        })
        .then(post=>res.status(200).json(post))
        .catch(error=>res.status(400).json(error))
    },

    delete(req,res){
        Post.destroy({
            where:{
                id:req.params.id,
            }
        })
        .then(post=>res.status(200).json(post))
        .catch(error=>{res.status(500).json(error)})
    },
}