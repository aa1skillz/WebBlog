var express=require('express');
var router=express.Router();
var Post=require('./model_api');
router.get('/:id',function(req,res,next){
    if(req.params.id){
        Post.getPostById(req.params.id,function(err,rows){
            if(err){
                res.json(err);

            }
            else{
                res.json(rows);
            }
        });
    }
    else{
        Post.getAllPost(function(err,rows){
            if(err){
                res.json(err);
            }else{
                res.json(rows);
            }
        });
    }
});
router.get('/',function(req,res,next){
    
    Post.getAllPost(function(err,rows){
        if(err){
            res.json(err);
        }else{
            res.json(rows);
        }
    });
})
router.delete('/:id',function(req,res,next){
    Post.deletePost(req.params.id,function(err,count){
        if(err){
            res.json(err);
        }else{
            res.json(count);
        }
    });
});
router.post('/',function(req,res,next){
    Post.addPost(req.body,function(err,count){
        if(err){
            
            res.json(err);
        }else{
            res.json(req.body);
        }
    });
});
router.put('/:id',function(req,res,next){
    Post.updatePost(req.params.id,req.body,function(err,rows){
        if(err){
            res.json(err);
        }else{
            //res.json(req.body);
            res.json(rows);
        }
    });
});
module.exports=router;